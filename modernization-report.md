# diagram-vue modernization report

Claude Code による diagram-vue レガシーコード改善作業の記録

---

> **注目：本ドキュメントに記録された全改善作業は、スマートフォン上の Claude アプリから Claude Code（Pro プラン）を使って実施されました。**
> PC・IDE・ターミナルを一切使用せず、スマートフォン 1 台で Vue 3 移行・型安全化・UI 刷新・新機能開発・LP 制作まで完遂しています。

---

## 背景

`diagram-vue` は Vue 2 ベースの SVG ダイアグラムコンポーネントライブラリ（v0.3.2）で、長期間メンテナンスが行われていなかった。依存関係の陳腐化・コード品質の低下・セキュリティリスク・UI の古さなど、複合的な問題を抱えていた。

---

## フェーズ 1: バグ修正・セキュリティ対応

### 修正内容

| # | 分類 | 対象ファイル | 内容 |
|---|---|---|---|
| 1 | **セキュリティ** | `src/lib/Node.vue` | `javascript:` URL による XSS リスク解消。`http(s)://` のみ許可する `safeUrl` computed を追加 |
| 2 | **クラッシュ** | `src/Diagram.vue`, `src/DiagramEditor.vue` | `.find()` の戻り値が `undefined` の場合のクラッシュを null ガードで修正 |
| 3 | **クラッシュ** | `src/DiagramEditor.vue` | `JSON.parse` を `try-catch` でラップし、不正入力でもクラッシュしないよう修正 |
| 4 | **クラッシュ** | `src/DiagramEditor.vue` | `getElementById` が `null` を返す場合の null チェック追加 |
| 5 | **バグ** | `src/lib/EditNodeModal.vue` | `this.node.Height`（typo）→ `this.node.height` に修正 |
| 6 | **バグ** | `src/lib/EditNodeModal.vue` | prop の直接参照を `{ ...this.node }` ディープコピーに変更し、意図しない親データ変更を防止 |
| 7 | **バグ** | `src/lib/EditLinkModal.vue` | setter のない computed を `data + watch` パターンに変更し、編集内容が保存されないバグを修正 |
| 8 | **メモリリーク** | `src/lib/Node.vue`, `src/lib/Link.vue` | `beforeDestroy` フックでグローバルイベントリスナーを確実にクリーンアップ |
| 9 | **コード品質** | `src/DiagramEditor.vue` | `parseInt()` に基数 `10` を追加（8進数解釈リスクの排除） |
| 10 | **コード品質** | `src/minimal-ui/lib/VCkbox.vue` | `Math.random()` によるID生成をモジュールレベルカウンターに変更（SSR対応・重複排除）|
| 11 | **デッドコード** | `src/demo/Calculator.vue` | 未使用変数・空のスタブメソッドを削除 |

---

## フェーズ 2: Vue 3 + Vite 移行

### 移行内容

**ビルドシステム刷新（Vue CLI / webpack → Vite 5）**
- `vite.config.js`（開発・テスト用）と `vite.lib.config.js`（ライブラリビルド用）を新規作成
- `babel.config.js`, `vue.config.js` を削除
- Node.js v20 LTS に更新（`.nvmrc`）

**Vue 2 → Vue 3 API 対応**
- `createApp` / `app.use()` パターンに更新
- v-model: `value` / `input` → `modelValue` / `update:modelValue`
- ライフサイクル: `beforeDestroy` → `beforeUnmount`
- 全フォームコンポーネント（VInput, VSelect, VCkbox）のバインディングを更新

**Composition API 移行（全14コンポーネント）**
- マウスイベント mixin を `src/composables/useMouseLocation.js` として抽出
- `data()` / `methods` / `computed` → `ref` / `reactive` / `computed` 関数
- `<script setup>` 構文に統一
- `defineOptions` / `defineExpose` を適切に使用

**TypeScript 導入**
- `tsconfig.json` 追加（strict: false による段階的移行）
- `src/types.ts` に型定義を集約
  - `DiagramNode`, `DiagramLink`, `GraphData`, `DiagramLabels`, `DiagramSettings`
- 全 `<script setup>` ブロックを `lang="ts"` に変更

---

## フェーズ 3: UI 刷新 + JSON スキーマ拡張

### UIコンポーネントの全面リデザイン

| コンポーネント | 変更内容 |
|---|---|
| `VButton` | 角丸スタイル、`primary` / `danger` / `default` バリアント |
| `VInput` | ラベル付き、フォーカスボーダー、カラーピッカー対応 |
| `VSelect` | ラベル付き、統一スタイル |
| `VModal` | カード型、シャドウ、トランジション、スクロール可能ボディ、固定フッター |
| `VCkbox` | トグルスイッチ（CSS adjacent sibling セレクタで実装） |
| ツールバー | グループ化ボタン、セパレーター付きモダンレイアウト |
| 全モーダル | セクションヘッダー、2〜3カラムグリッド、Save/Cancel フッター |

### JSON スキーマの拡張

**ノード（DiagramNode）に追加**
| フィールド | 説明 |
|---|---|
| `content.fontSize` | フォントサイズ（px） |
| `content.fontColor` | テキスト色 |
| `content.fontWeight` | `normal` / `bold` |
| `rx`, `ry` | 角丸半径（rectangle のみ） |
| `opacity` | 透明度（0〜1） |
| `shape: 'diamond'` | ダイヤモンド形状を追加（既存の rectangle / ellipse に追加） |

**リンク（DiagramLink）に追加**
| フィールド | 説明 |
|---|---|
| `label` | リンク上に表示するテキストラベル |
| `strokeWidth` | 線の太さ |
| `opacity` | 透明度（0〜1） |

---

## フェーズ 4: バグ修正（Vue 3 移行後）

### 発見・修正したバグ

**1. Netlify ビルドエラー**
- 原因: `src/minimal-ui/lib/index.js` のインポートに `.vue` 拡張子が欠落
- 修正: 全インポートパスに `.vue` を追加

**2. `graphData.nodes` が undefined になるクラッシュ**
- 原因: `App.vue` が `graph = ref({})` で初期化 → `nodes` が存在しない状態で `push()` が失敗
- 修正: `initGraph()` で `nodes: [], links: []` を保証 + `internalUpdate` フラグ付き二重 watch によるエコーループ防止

**3. モーダルの Save ボタンを押しても閉じない**
- 原因: `VModal` の高さ制限でフッターがスクロール領域内に入り、見えていなかった
- 修正: VModal を `flex-column`（固定ヘッダー・スクロール可能ボディ・固定フッター）構造に変更

**4. VButton の `@click` が named slot 内で機能しない**
- 原因: Vue 3 の fallthrough 属性は named slot 内で不安定
- 修正: `defineEmits(['click'])` を追加し、`@click="emit('click', $event)"` で明示的に転送

**5. Edit モーダルが保存後も閉じない**
- 原因: `tmpNode` は `reactive` オブジェクトのため `Object.assign` ミューテーション時に参照が変わらず、`EditNodeModal` の `watch(() => props.node)` が発火しない → `newNode.value.id` が空のまま → `find()` が失敗し早期 return
- 修正: `watch` に `{ deep: true }` を追加、`editNode`/`editLink` の先頭でモーダルを閉じる防御処理を追加

---

## フェーズ 5: ドキュメント・デモ充実

### デモアプリの拡充

| デモシナリオ | 内容 |
|---|---|
| Daily Routine（デフォルト） | 既存の日課フロー |
| Flowchart | 全形状（rectangle/ellipse/diamond）・全線パターン（solid/dash/dot）・ラベル付きリンクを網羅 |
| AI Agent Workflow | ダークテーマの AI エージェントワークフロー図 |
| Read-only Diagram | `Diagram` コンポーネントの直接利用例 |

JSON パネル（トグル・コピーボタン付き）を追加し、生成データをリアルタイムで確認可能。

### ドキュメントの整備

| ファイル | 内容 |
|---|---|
| `README.md` | Vue 3 対応に全面書き直し。正しいイベント名・全 props/events テーブル・TypeScript 使用法・AI エージェント向けガイドを追加 |
| `DATA_SPECIFICATION.md` | 新フィールドをすべて追記、TypeScript インターフェース定義と完全な JSON サンプルを追加 |
| `CLAUDE.md` | AIエージェント・開発者向けコードガイドを新規作成。ディレクトリ構成・データモデル・重要パターン（deep watch, internalUpdate フラグ等）を解説 |

---

## フェーズ 6: npm publish 対応 + 機能追加

### publish 準備

| 項目 | 変更内容 |
|---|---|
| バージョン | `0.3.2` → `0.4.0`（Vue 3 移行・新機能追加による minor バンプ） |
| `peerDependencies` | `vue` を `dependencies` から移動（二重インスタンス問題を防止） |
| `files` フィールド | `["dist", "src/types.ts"]` を追加し、デモ/ソースを除外した最小セットのみ publish |
| `types` フィールド | `"src/types.ts"` を追加し、IDE・AI ツールの型補完を有効化 |

### 機能追加

**矢印マーカーの修正**
- `refX="5"` → `refX="10"` に変更し、矢先がノードに食い込む問題を解消

**折れ線（Polyline）リンクの追加**
- 新しいリンク shape `"polyline"` を実装
- ソースノードの出口方向に応じて自動ルーティング（H→V→H / V→H→V）
- `EditLinkModal` の Line shape セレクトに選択肢を追加

---

## フェーズ 7: デモサイト LP（ランディングページ）制作

### 概要

`src/demo/App.vue` をシングルページデモから、ライブラリを紹介するフルスクロール型 LP へ全面リニューアル。

### セクション構成

| セクション | 内容 |
|---|---|
| **Navbar** | スクロール追随型、バージョンバッジ（v0.4.0）、npm インストールコマンド（クリックコピー） |
| **Hero** | ダークグラデーション背景、キャッチコピー、「Try the Demo」「View on GitHub」CTA |
| **Features** | 6枚カードグリッド（Composable、Editable、Polyline Routing、Typed、Lightweight、Customizable） |
| **Live Demo** | id="demo" セクション。600px 高の DiagramEditor + JSON パネルをインライン表示 |
| **Quick Start** | npm install / Vue コード例を 2カラムグリッドで表示 |
| **Footer** | コピーライト、GitHub・npm リンク |

### 技術的工夫

- **CSS Grid `min-width: 0`** — Quick Start のコードブロックがグリッド列幅を超過するオーバーフローを修正
- **スムーズスクロール** — Hero CTA から Live Demo セクションへのアンカー遷移
- **クリックコピー** — `navigator.clipboard.writeText()` によるインストールコマンドのワンクリックコピー

---

## フェーズ 8: Polyline ルーティング刷新 + インライン形状スイッチャー

### 問題

フェーズ 6 で実装した Polyline のルーティングが、コントロールポイント（ドラッグ可能な点）の位置に依存していたため、初期配置が不自然なケースが多かった。また、形状（straight / bezier / polyline）の切り替えがモーダルを開かなければできず UX が悪かった。

### 解決策

#### 1. ルーティングロジックの全面再構築

ノード中心間のベクトルを基に、ベンド数を**自動選択**するステートレスなアルゴリズムに刷新。

```
dy / dx 比率 ≤ 0.5  → H→V→H（水平方向に長い場合、3ベンド）
dy / dx 比率 ≥ 2.0  → V→H→V（垂直方向に長い場合、3ベンド）
0.5 < 比率 < 2.0   → L字（斜め方向、1ベンド）
ほぼ同一行 / 同一列 → 直線
```

コントロールポイントに依存しないため、ノードを移動しても常に最適なパスが生成される。

#### 2. インラインシェイプスイッチャー

選択中のリンク上に SVG オーバーレイとしてアイコンボタン 3 つ（straight / bezier / polyline）を表示。モーダルを開かずにワンクリックで形状を切り替え可能。

- `anchorPos()` 関数でアンカー位置を動的計算
  - polyline → `labelPos()`（ノード中心ベースで常に追随）
  - straight / bezier → `point.value`（コントロールポイント）
- `changeShape` イベントを `Link.vue → Diagram.vue` で処理し、`props.links[i].shape` を直接ミューテーション

#### 3. バグ修正（2件）

| バグ | 原因 | 修正 |
|---|---|---|
| polyline 選択時も制御点ドットが表示される | `<circle>` を `v-if="link.shape === 'polyline'"` で非表示にしていたが、クリック用の別要素がなかったため再び表示されていた | `<circle>` を削除し、透明な幅広ストローク `<path>`（stroke-width=12）をクリックヒット領域として配置 |
| ノード移動後もスイッチャーが元の位置に残る | スイッチャーのアンカーを `point.value`（マウント時スナップショット）に固定していた | `anchorPos()` を導入し polyline の場合は `labelPos()`（算出値）を返すよう分岐 |

#### 4. Event-Driven Architecture デモの追加

Polyline の実用例として、マイクロサービスの非同期通信を可視化した新デモシナリオを追加。

| 項目 | 内容 |
|---|---|
| ノード数 | 9（ellipse / rectangle 混在） |
| ノード例 | User App (indigo) / API Gateway (blue) / Event Bus (amber) / Cache (emerald) / Auth (violet) / Order Service (red) / Notification (teal) |
| リンク | 全リンクが `"shape": "polyline"`、HTTP / publish / auth event / notify 等のラベル付き |
| パターン | solid / dash / dot を混在させ、同期・非同期・読み取りを視覚的に区別 |

デモセレクターに **「Event-Driven Architecture (polyline)」** オプションを追加。

---

## 成果まとめ

### 定量メトリクス

| 指標 | 値 |
|---|---|
| **Claude Code セッション コミット数** | **24** |
| **修正バグ数** | **18**（セキュリティ 1・クラッシュ 3・ロジック 9・メモリリーク 1・表示 4） |
| **デモシナリオ数** | **5**（Daily Routine / Flowchart / AI Workflow / Event-Driven / Read-only） |
| **ノード形状数** | **3**（rectangle / ellipse / diamond） |
| **リンク形状数** | **3**（straight / bezier / polyline） |
| **ビルドサイズ（ES）** | 62 KB（gzip: 12 KB） |
| **ビルドサイズ（CJS）** | 44 KB（gzip: 10 KB） |
| **ビルドサイズ（CSS）** | 10 KB（gzip: 2 KB） |
| **TypeScript 型定義ファイル** | 1（`src/types.ts`、5インターフェース） |
| **追加デモ JSON ファイル** | 3（flowchart / ai_workflow / event_driven） |

### 定性評価：Before / After

| 観点 | Before | After |
|---|---|---|
| Vue バージョン | Vue 2.5.17（2017年、EOL） | Vue 3.4 |
| ビルドツール | Vue CLI 3.x / webpack | Vite 5 |
| コンポーネント記法 | Options API | Composition API（`<script setup lang="ts">`） |
| TypeScript | なし | `src/types.ts` に全型定義、IDE・AI ツールで補完可能 |
| セキュリティ | XSS リスクあり（未検証 URL） | `http(s)://` のみ許可する `safeUrl` computed |
| ノード形状 | rectangle / ellipse | + diamond |
| リンク形状 | straight / bezier | + polyline（ステートレス自動ルーティング） |
| ノードスタイル | text, url, color のみ | + fontSize / fontColor / fontWeight / rx / ry / opacity |
| リンクスタイル | color, pattern, arrow のみ | + label / strokeWidth / opacity |
| 形状切り替え UI | モーダルを開いて変更 | 選択中リンクにインラインスイッチャーを表示 |
| UI コンポーネント | 素のチェックボックス・平坦なレイアウト | トグルスイッチ・カード型モーダル・グループ化ツールバー |
| デモ | 1種（日課フロー）、素の HTML | 5種 + フルスクロール LP（Hero / Features / Live Demo / Quick Start） |
| npm パッケージ | Vue 2 依存・`files` 未設定 | Vue 3 peerDep・最小セット publish・型定義付き |
| ドキュメント | Vue 2 時代の内容（イベント名誤り等） | Vue 3 完全対応・AI エージェント向け CLAUDE.md 付き |

---

## スマートフォン × Claude Code という開発スタイル

本プロジェクトは、**スマートフォン上の Claude アプリ**から **Claude Code（Pro プラン）** を操作するだけで全作業を完遂しました。

### 実施した作業の種類

- Vue 2 → Vue 3 全面移行（ビルドツール・API・型システム）
- 18件のバグ修正（クラッシュ・セキュリティ・メモリリーク・表示崩れ）
- SVG レンダリングロジックの設計・実装（ルーティングアルゴリズム）
- UI コンポーネントの全面リデザイン
- フルスクロール型ランディングページの制作
- npm publish 対応（パッケージ設定・型定義）
- ドキュメント整備（README / DATA_SPECIFICATION / CLAUDE.md）

### PC なしで可能だった理由

Claude Code は自然言語による指示をそのままコード変更・ファイル操作・Git コミット・ビルド実行まで一貫して処理する。スマートフォンのキーボードによる入力制約を、**「何を直すか」の意思決定に集中できる抽象度**でカバーできるため、従来 PC が必要だった複雑なソフトウェア開発タスクを実施できた。

> **この事例は、「コードを書かなくてもソフトウェアを改善できる」ではなく、「Claude Code が開発環境の制約そのものを取り除く」ことを示している。**

---

*Generated by Claude Code (Pro plan) on smartphone — 2026-04-25*
