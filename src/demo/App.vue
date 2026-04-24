<template>
  <div id="lp-root">

    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-inner">
        <div class="navbar-brand">
          <span class="brand-name">diagram-vue</span>
          <span class="brand-badge">v0.4.0</span>
        </div>
        <div class="navbar-actions">
          <button class="npm-copy-btn" @click="copyInstall">
            <code>npm install diagram-vue</code>
            <span class="copy-icon">{{ installCopied ? '✓' : '⎘' }}</span>
          </button>
          <a class="github-link" href="https://github.com/pb10005/diagram-vue" target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">diagram<span class="hero-title-accent">-vue</span></h1>
        <p class="hero-subtitle">Vue 3 SVG Diagram Component Library</p>
        <p class="hero-desc">
          Build interactive flowcharts, node graphs, and diagrams with full JSON control.<br>
          Fully typed, zero-dependency, and ready for Vue 3.
        </p>
        <div class="hero-install">
          <code class="install-code">npm install diagram-vue</code>
          <button class="install-copy-btn" @click="copyInstall">{{ installCopied ? 'Copied!' : 'Copy' }}</button>
        </div>
        <div class="hero-ctas">
          <button class="cta-primary" @click="scrollToDemo">Try Live Demo</button>
          <a class="cta-secondary" href="https://github.com/pb10005/diagram-vue" target="_blank" rel="noopener">View on GitHub</a>
        </div>
      </div>
      <div class="hero-bg"></div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="section-inner">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="f in features" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Live Demo -->
    <section class="demo-section" id="demo">
      <div class="section-inner">
        <h2 class="section-title">Interactive Demo</h2>
        <p class="section-subtitle">Edit nodes and links in real time. Switch between scenarios to explore all features.</p>

        <div class="demo-toolbar">
          <div class="demo-toolbar-left">
            <label class="toolbar-label">Scenario:</label>
            <VSelect v-model="demoScenario" @change="loadDemo">
              <option value="default">Daily Routine</option>
              <option value="flowchart">Flowchart (all shapes &amp; styles)</option>
              <option value="ai_workflow">AI Agent Workflow</option>
              <option value="readonly">Read-only Diagram</option>
            </VSelect>
          </div>
          <VButton @click="showJson = !showJson">
            {{ showJson ? 'Hide JSON' : 'Show JSON' }}
          </VButton>
        </div>

        <div class="demo-frame" :class="{ 'with-panel': showJson }">
          <div class="demo-canvas">
            <div v-if="demoScenario === 'readonly'" class="readonly-note">
              Read-only mode — using the <code>Diagram</code> component directly (no toolbar)
            </div>
            <template v-if="demoScenario === 'readonly'">
              <Diagram
                :width="graph.width || 1200"
                :height="graph.height || 800"
                :background="graph.background || '#f8fafc'"
                :showGrid="graph.showGrid || false"
                scale="1"
                :nodes="graph.nodes || []"
                :links="graph.links || []"
                :editable="false"
                :labels="{ edit: 'Edit', remove: 'Remove', link: 'Link', select: 'Select', cancel: 'Cancel', copy: 'Copy' }"
              />
            </template>
            <template v-else>
              <DiagramEditor v-model="graph" />
            </template>
          </div>

          <aside v-if="showJson" class="json-panel">
            <div class="json-panel-header">
              <span class="json-panel-title">Graph JSON</span>
              <VButton @click="copyJson" variant="primary">{{ jsonCopied ? 'Copied!' : 'Copy' }}</VButton>
            </div>
            <pre class="json-content">{{ prettyJson }}</pre>
          </aside>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="quickstart">
      <div class="section-inner">
        <h2 class="section-title">Quick Start</h2>
        <div class="quickstart-grid">
          <div class="quickstart-code">
            <div class="code-block">
              <div class="code-block-title">Install</div>
              <pre><code>npm install diagram-vue</code></pre>
            </div>
            <div class="code-block">
              <div class="code-block-title">DiagramEditor (full editor)</div>
              <pre><code>&lt;script setup&gt;
import { ref } from 'vue'
import { DiagramEditor } from 'diagram-vue'
import 'diagram-vue/dist/style.css'

const graph = ref({ width: 1200, height: 800, nodes: [], links: [] })
&lt;/script&gt;

&lt;template&gt;
  &lt;DiagramEditor v-model="graph" /&gt;
&lt;/template&gt;</code></pre>
            </div>
            <div class="code-block">
              <div class="code-block-title">TypeScript</div>
              <pre><code>import type { GraphData, DiagramNode, DiagramLink } from 'diagram-vue/src/types'

const graph = ref&lt;GraphData&gt;({
  width: 1200, height: 800,
  nodes: [], links: []
})</code></pre>
            </div>
          </div>
          <div class="quickstart-info">
            <h3>Two components, one library</h3>
            <p>
              <strong>DiagramEditor</strong> — Full editor with toolbar, node/link creation,
              modals, import/export, and SVG download. Bind with <code>v-model</code>.
            </p>
            <p>
              <strong>Diagram</strong> — Core SVG renderer only. Use when you need
              custom editing logic or a read-only view.
            </p>
            <h3>JSON-driven</h3>
            <p>
              Every node and link is plain JSON. Generate diagrams programmatically,
              persist them to a database, or have an AI write them directly.
            </p>
            <div class="quickstart-links">
              <a href="https://github.com/pb10005/diagram-vue" target="_blank" rel="noopener" class="link-btn">README</a>
              <a href="https://github.com/pb10005/diagram-vue/blob/main/DATA_SPECIFICATION.md" target="_blank" rel="noopener" class="link-btn">Data Spec</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="lp-footer">
      <div class="footer-inner">
        <div class="footer-left">
          <span class="footer-brand">diagram-vue</span>
          <span class="footer-version">v0.4.0</span>
          <span class="footer-sep">·</span>
          <span class="footer-license">MIT License</span>
        </div>
        <div class="footer-right">
          <a href="https://www.npmjs.com/package/diagram-vue" target="_blank" rel="noopener">npm</a>
          <a href="https://github.com/pb10005/diagram-vue" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import defaultData from './data.json'
import flowchartData from './flowchart.json'
import aiWorkflowData from './ai_workflow.json'
import { DiagramEditor, Diagram } from '../index.js'
import VSelect from '../minimal-ui/lib/VSelect.vue'
import VButton from '../minimal-ui/lib/VButton.vue'

const demoScenario = ref('default')
const graph = ref<any>({})
const showJson = ref(false)
const installCopied = ref(false)
const jsonCopied = ref(false)

const prettyJson = computed(() => JSON.stringify(graph.value, null, 2))

const features = [
  {
    icon: '▣',
    title: '3 Node Shapes',
    desc: 'Rectangle, Ellipse, and Diamond — with custom colors, fonts, opacity, and border radius.'
  },
  {
    icon: '↗',
    title: '3 Link Styles',
    desc: 'Straight, Bezier curve, and Polyline (orthogonal) — with dashed/dotted patterns and arrow directions.'
  },
  {
    icon: '🎨',
    title: 'Full Customization',
    desc: 'Control fill color, font size, font weight, font color, stroke color, stroke width, and opacity per element.'
  },
  {
    icon: '{}',
    title: 'JSON-Driven',
    desc: 'Import and export full graph state as JSON. AI agents can generate diagrams programmatically.'
  },
  {
    icon: 'TS',
    title: 'TypeScript Ready',
    desc: 'GraphData, DiagramNode, DiagramLink interfaces included. Full IDE autocomplete support.'
  },
  {
    icon: '⬡',
    title: 'SVG Canvas',
    desc: 'Clean, scalable SVG output. Export diagrams as .svg files with one click.'
  }
]

function loadDemo() {
  const map: Record<string, any> = {
    default: defaultData,
    flowchart: flowchartData,
    ai_workflow: aiWorkflowData,
    readonly: flowchartData
  }
  graph.value = JSON.parse(JSON.stringify(map[demoScenario.value] || defaultData))
}

function scrollToDemo() {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
}

async function copyInstall() {
  await navigator.clipboard.writeText('npm install diagram-vue')
  installCopied.value = true
  setTimeout(() => { installCopied.value = false }, 1500)
}

async function copyJson() {
  await navigator.clipboard.writeText(prettyJson.value)
  jsonCopied.value = true
  setTimeout(() => { jsonCopied.value = false }, 1500)
}

onMounted(loadDemo)
</script>

<style lang="scss">
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  background: #fff;
  color: #1e293b;
  line-height: 1.6;
}

a { color: inherit; text-decoration: none; }

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e2e8f0;
}
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}
.brand-name {
  font-size: 17px;
  font-weight: 700;
  color: #3b82f6;
  letter-spacing: -0.02em;
}
.brand-badge {
  font-size: 11px;
  background: #eff6ff;
  color: #3b82f6;
  padding: 2px 7px;
  border-radius: 20px;
  font-weight: 600;
}
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.npm-copy-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  color: #475569;
  transition: background 0.15s;
  &:hover { background: #f1f5f9; }
  code { font-family: 'Courier New', monospace; }
}
.copy-icon { font-size: 15px; color: #94a3b8; }
.github-link {
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  padding: 6px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: background 0.15s;
  &:hover { background: #f1f5f9; }
}

/* Hero */
.hero {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  padding: 100px 24px 120px;
  text-align: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.3) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
}
.hero-title {
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #fff;
  margin: 0 0 12px;
  line-height: 1;
}
.hero-title-accent { color: #818cf8; }
.hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: #94a3b8;
  margin: 0 0 16px;
}
.hero-desc {
  font-size: 16px;
  color: #cbd5e1;
  margin: 0 0 36px;
  line-height: 1.7;
}
.hero-install {
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 32px;
}
.install-code {
  padding: 10px 18px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #e2e8f0;
  letter-spacing: 0.02em;
}
.install-copy-btn {
  padding: 10px 16px;
  background: rgba(99,102,241,0.5);
  border: none;
  border-left: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: rgba(99,102,241,0.7); }
}
.hero-ctas {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-primary {
  padding: 12px 28px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  &:hover { background: #2563eb; transform: translateY(-1px); }
}
.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  background: rgba(255,255,255,0.08);
  color: #e2e8f0;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover { background: rgba(255,255,255,0.14); }
}

/* Section common */
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.section-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 0 8px;
  color: #0f172a;
}
.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
}

/* Features */
.features {
  padding: 80px 24px;
  background: #f8fafc;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 48px;
}
.feature-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
}
.feature-icon {
  font-size: 26px;
  font-weight: 800;
  font-family: monospace;
  color: #6366f1;
  margin-bottom: 14px;
  line-height: 1;
}
.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px;
}
.feature-desc {
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.65;
}

/* Live Demo */
.demo-section {
  padding: 80px 24px;
  background: #fff;
}
.demo-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.demo-toolbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.toolbar-label {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}
.demo-frame {
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  height: 600px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  &.with-panel .demo-canvas { flex: 1; min-width: 0; }
}
.demo-canvas {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.readonly-note {
  padding: 8px 16px;
  background: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
  font-size: 13px;
  color: #3b82f6;
  flex-shrink: 0;
  code {
    background: #dbeafe;
    padding: 1px 5px;
    border-radius: 3px;
    font-family: monospace;
  }
}
.json-panel {
  width: 360px;
  flex-shrink: 0;
  border-left: 1px solid #e2e8f0;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.json-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
}
.json-panel-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
}
.json-content {
  flex: 1;
  margin: 0;
  padding: 12px;
  overflow: auto;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  line-height: 1.5;
  color: #334155;
  background: #f8fafc;
  white-space: pre;
}

/* Quick Start */
.quickstart {
  padding: 80px 24px;
  background: #0f172a;
  color: #e2e8f0;
}
.quickstart .section-title { color: #f8fafc; }
.quickstart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 48px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
}
.quickstart-code {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}
.code-block {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
}
.code-block-title {
  padding: 8px 14px;
  background: rgba(255,255,255,0.06);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.code-block pre {
  margin: 0;
  padding: 16px;
  background: rgba(255,255,255,0.03);
  overflow-x: auto;
  min-width: 0;
}
.code-block code {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #a5f3fc;
  white-space: pre;
}
.quickstart-info {
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #f8fafc;
    margin: 0 0 10px;
    &:not(:first-child) { margin-top: 28px; }
  }
  p {
    font-size: 14px;
    color: #94a3b8;
    margin: 0 0 10px;
    line-height: 1.7;
  }
  code {
    background: rgba(255,255,255,0.1);
    padding: 1px 6px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 13px;
    color: #a5f3fc;
  }
  strong { color: #e2e8f0; }
}
.quickstart-links {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}
.link-btn {
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  transition: background 0.15s;
  &:hover { background: rgba(255,255,255,0.08); }
}

/* Footer */
.lp-footer {
  background: #020617;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 24px;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.footer-left {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #475569;
}
.footer-brand { font-weight: 700; color: #64748b; }
.footer-version { color: #374151; }
.footer-sep { color: #374151; }
.footer-license { color: #374151; }
.footer-right {
  display: flex;
  gap: 16px;
  a {
    font-size: 13px;
    color: #475569;
    font-weight: 500;
    transition: color 0.15s;
    &:hover { color: #94a3b8; }
  }
}
</style>
