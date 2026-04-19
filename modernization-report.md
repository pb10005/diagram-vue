# diagram-vue modernization report

Claude Code による diagram-vue レガシーコード改善作業の記録

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
| 公開ファイル | `dist/diagram.es.js`（56KB）, `dist/diagram.cjs.js`（40KB）, `dist/diagram.umd.js`（40KB）, `dist/style.css`（10KB） |

### 機能追加

**矢印マーカーの修正**
- `refX="5"` → `refX="10"` に変更し、矢先がノードに食い込む問題を解消

**折れ線（Polyline）リンクの追加**
- 新しいリンク shape `"polyline"` を実装
- ソースノードの出口方向に応じて自動ルーティング：
  - 左右出口（horizontal exit）→ H→V→H パス
  - 上下出口（vertical exit）→ V→H→V パス
- `EditLinkModal` の Line shape セレクトに選択肢を追加

---

## 成果まとめ

### Before / After

| 観点 | Before | After |
|---|---|---|
| Vue バージョン | Vue 2.5.17（2017年、EOL） | Vue 3.4 |
| ビルドツール | Vue CLI 3.x / webpack | Vite 5 |
| コンポーネント記法 | Options API | Composition API（`<script setup>`） |
| TypeScript | なし | `src/types.ts` に全型定義 |
| ノード形状 | rectangle / ellipse | rectangle / ellipse / **diamond** |
| リンク形状 | straight / bezier | straight / bezier / **polyline（新規）** |
| ノードスタイル指定 | text, url, color のみ | + fontSize, fontColor, fontWeight, rx, ry, opacity |
| リンクスタイル指定 | color, pattern, arrow のみ | + label, strokeWidth, opacity |
| UI コンポーネント | 旧来スタイル（素のチェックボックス等） | モダンなトグル・カード型モーダル・グループ化ツールバー |
| デモシナリオ数 | 1種（日課フロー） | 4種（日課・フローチャート・AIワークフロー・読み取り専用） |
| セキュリティ | XSS リスクあり（未検証 URL） | `http(s)://` のみ許可 |
| npm パッケージ | Vue 2 依存・`files` 未設定 | Vue 3 peerDep・最小セット publish |
| ドキュメント | Vue 2 時代の内容（イベント名誤り等） | Vue 3 完全対応・AI エージェント向けガイド付き |

### コミット数

合計 **16 コミット**（`db3dc5a` 〜 `06360ed`）

---

*Generated by Claude Code — 2026-04-19*
