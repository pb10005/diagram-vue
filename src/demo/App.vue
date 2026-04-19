<template>
  <div id="app">
    <header class="app-header">
      <h1 class="app-title">diagram-vue</h1>
      <div class="header-controls">
        <label class="control-label">Demo:</label>
        <VSelect v-model="demo" @change="loadDemo">
          <option value="default">Daily Routine (default)</option>
          <option value="flowchart">Flowchart (all shapes & styles)</option>
          <option value="ai_workflow">AI Agent Workflow</option>
          <option value="readonly">Read-only Diagram</option>
        </VSelect>
        <VButton @click="showJson = !showJson">
          {{ showJson ? 'Hide JSON' : 'Show JSON' }}
        </VButton>
      </div>
    </header>

    <div class="app-body" :class="{ 'with-panel': showJson }">
      <div class="diagram-area">
        <template v-if="demo === 'readonly'">
          <div class="readonly-note">Read-only mode — uses the <code>Diagram</code> component directly</div>
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
          <VButton @click="copyJson" variant="primary">{{ copied ? 'Copied!' : 'Copy' }}</VButton>
        </div>
        <pre class="json-content">{{ prettyJson }}</pre>
      </aside>
    </div>
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

const demo = ref('default')
const graph = ref<any>({})
const showJson = ref(false)
const copied = ref(false)

const prettyJson = computed(() => JSON.stringify(graph.value, null, 2))

function loadDemo() {
  const map: Record<string, any> = {
    default: defaultData,
    flowchart: flowchartData,
    ai_workflow: aiWorkflowData,
    readonly: flowchartData
  }
  graph.value = JSON.parse(JSON.stringify(map[demo.value] || defaultData))
}

async function copyJson() {
  await navigator.clipboard.writeText(prettyJson.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}

onMounted(loadDemo)
</script>
<style lang="scss">
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: #f1f5f9;
  color: #1e293b;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
}
.app-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #3b82f6;
}
.header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.control-label {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}
.app-body {
  flex: 1;
  overflow: hidden;
  display: flex;
  &.with-panel {
    .diagram-area { flex: 1; min-width: 0; }
  }
}
.diagram-area {
  flex: 1;
  overflow: auto;
  min-width: 0;
}
.readonly-note {
  padding: 8px 16px;
  background: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
  font-size: 13px;
  color: #3b82f6;
  code {
    background: #dbeafe;
    padding: 1px 5px;
    border-radius: 3px;
    font-family: monospace;
  }
}
.json-panel {
  width: 380px;
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
  font-size: 12px;
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
</style>
