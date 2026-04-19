<template>
  <div id="editor">
    <div class="toolbar">
      <div class="toolbar-group">
        <VButton v-if="!editable" variant="primary" @click="editable = true">✏️ Edit</VButton>
        <template v-else>
          <VButton variant="primary" @click="openModal">＋ New Node</VButton>
          <VButton @click="endEdit">✓ Done</VButton>
        </template>
      </div>
      <div class="toolbar-group">
        <VButton @click="openInputModal">⬆ Import / Export</VButton>
        <VButton @click="downloadSVG">⬇ Download SVG</VButton>
      </div>
      <div class="toolbar-group">
        <VButton @click="openSettingsModal">⚙ Settings</VButton>
        <VButton variant="danger" @click="isAskClearDiagram = true">🗑 Clear</VButton>
      </div>
    </div>

    <AskModal :isActive="isAskClearDiagram" @ok="clearDiagram" @cancel="cancel">
      Clear the entire diagram? This cannot be undone.
    </AskModal>
    <EditNodeModal
      :node="{ content: {} }"
      :isActive="isModalActive"
      @ok="addNode"
      @cancel="cancel"
    />
    <EditNodeModal
      :node="tmpNode"
      :isActive="isEditModalActive"
      @ok="editNode"
      @cancel="cancel"
    />
    <EditLinkModal
      :link="tmpLink"
      :isActive="isEditLinkModalActive"
      @ok="editLink"
      @cancel="cancel"
    />
    <InputModal
      :text="json"
      :isActive="isInputModalActive"
      @ok="importData"
      @cancel="cancel"
    />
    <SettingsModal
      :isActive="isSettingsModalActive"
      :settings="settings"
      @ok="updateSettings"
      @cancel="cancel"
    />
    <Diagram
      :width="graphData.width || 2000"
      :height="graphData.height || 1000"
      :fluid="settings.isFluid"
      :scale="settings.scale"
      :background="graphData.background || '#f8fafc'"
      :showGrid="graphData.showGrid"
      :nodes="graphData.nodes"
      :links="graphData.links"
      :editable="editable"
      :labels="graphData.labels || { edit: 'Edit', remove: 'Remove', link: 'Link', select: 'Select', cancel: 'Cancel', copy: 'Copy' }"
      @editNode="openNodeEdit"
      @editLink="openLinkEdit"
      @nodeClicked="nodeClicked"
      @linkClicked="linkClicked"
      @nodeRemoved="handleNodeRemoved"
      @linkRemoved="handleLinkRemoved"
      @linkAdded="handleLinkAdded"
      @nodeCopied="handleNodeCopied"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, nextTick } from 'vue'
import Diagram from './Diagram.vue'
import EditNodeModal from '@/lib/EditNodeModal.vue'
import EditLinkModal from '@/lib/EditLinkModal.vue'
import InputModal from '@/lib/InputModal.vue'
import AskModal from '@/lib/AskModal.vue'
import SettingsModal from '@/lib/SettingsModal.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      width: 2000,
      height: 1000,
      background: '#f8fafc',
      showGrid: false,
      labels: { edit: 'Edit', remove: 'Remove', link: 'Link', select: 'Select', copy: 'Copy' },
      nodes: [],
      links: []
    })
  }
})

const emit = defineEmits([
  'update:modelValue', 'nodeClicked', 'linkClicked', 'nodeRemoved', 'linkRemoved'
])

const initGraph = (val) => ({
  width: 2000, height: 1000, background: '#f8fafc', showGrid: false, nodes: [], links: [],
  ...JSON.parse(JSON.stringify(val || {}))
})

const graphData = ref(initGraph(props.modelValue))

// Sync external prop changes (e.g. initial data loaded by parent in onMounted)
// Flag prevents echo: graphData change → emit → parent updates prop → watcher skips
let internalUpdate = false

watch(() => props.modelValue, (val) => {
  if (internalUpdate || !val) return
  graphData.value = initGraph(val)
})

watch(graphData, val => {
  internalUpdate = true
  emit('update:modelValue', val)
  nextTick(() => { internalUpdate = false })
}, { deep: true })

const json = ref('')
const isModalActive = ref(false)
const isEditModalActive = ref(false)
const isEditLinkModalActive = ref(false)
const isInputModalActive = ref(false)
const isSettingsModalActive = ref(false)
const isAskClearDiagram = ref(false)
const editable = ref(false)

const settings = reactive({
  width: 1500, height: 1000, isFluid: false, scale: '1', showGrid: false
})

const tmpNode = reactive({
  id: '', shape: 'rectangle', width: 0, height: 0,
  stroke: '', strokeWeight: 0, rx: 6, ry: 6, opacity: 1,
  content: { text: '', url: '', color: '', fontColor: '', fontSize: 13, fontWeight: 'normal' }
})

const tmpLink = reactive({
  id: '',
  content: { color: '', pattern: 'solid', arrow: 'none', shape: 'straight', strokeWidth: 2, label: '', opacity: 1 }
})

function generateID() {
  return new Date().getTime().toString(16) + Math.floor(Math.random() * 1000000).toString(16)
}

function clearDiagram() {
  graphData.value.nodes = []
  graphData.value.links = []
  isAskClearDiagram.value = false
}

function openModal() { isModalActive.value = true }

function cancel() {
  isModalActive.value = false
  isEditModalActive.value = false
  isEditLinkModalActive.value = false
  isInputModalActive.value = false
  isAskClearDiagram.value = false
  isSettingsModalActive.value = false
}

function addNode(item) {
  graphData.value.nodes.push({
    id: generateID(),
    content: {
      text: item.content.text,
      url: item.content.url,
      color: item.content.color || '#dbeafe',
      fontColor: item.content.fontColor || '#1e3a5f',
      fontSize: parseInt(item.content.fontSize, 10) || 13,
      fontWeight: item.content.fontWeight || 'normal'
    },
    width: parseInt(item.width, 10) || 150,
    height: parseInt(item.height, 10) || 60,
    stroke: item.stroke || '#93c5fd',
    strokeWeight: parseFloat(item.strokeWeight) || 1,
    shape: item.shape || 'rectangle',
    rx: parseInt(item.rx, 10) || 6,
    ry: parseInt(item.ry, 10) || 6,
    opacity: parseFloat(item.opacity) || 1,
    point: { x: 10, y: 100 + Math.random() * 100 }
  })
  isModalActive.value = false
}

function openNodeEdit(item) {
  Object.assign(tmpNode, {
    id: item.id,
    shape: item.shape,
    stroke: item.stroke,
    strokeWeight: item.strokeWeight,
    width: item.width,
    height: item.height,
    rx: item.rx ?? 6,
    ry: item.ry ?? 6,
    opacity: item.opacity ?? 1
  })
  Object.assign(tmpNode.content, {
    text: item.content.text,
    url: item.content.url,
    color: item.content.color,
    fontColor: item.content.fontColor || '#1e3a5f',
    fontSize: item.content.fontSize || 13,
    fontWeight: item.content.fontWeight || 'normal'
  })
  isEditModalActive.value = true
}

function editNode(item) {
  const tmp = graphData.value.nodes.find(x => x.id === item.id)
  if (!tmp) return
  tmp.content.text = item.content.text
  tmp.content.url = item.content.url
  tmp.content.color = item.content.color
  tmp.content.fontColor = item.content.fontColor
  tmp.content.fontSize = parseInt(item.content.fontSize, 10) || 13
  tmp.content.fontWeight = item.content.fontWeight
  tmp.shape = item.shape
  tmp.stroke = item.stroke
  tmp.strokeWeight = parseFloat(item.strokeWeight) || 1
  tmp.width = parseInt(item.width, 10)
  tmp.height = parseInt(item.height, 10)
  tmp.rx = parseInt(item.rx, 10) || 6
  tmp.ry = parseInt(item.ry, 10) || 6
  tmp.opacity = parseFloat(item.opacity) || 1
  isEditModalActive.value = false
}

function openLinkEdit(item) {
  tmpLink.id = item.id
  Object.assign(tmpLink.content, {
    color: item.content.color,
    shape: item.content.shape,
    pattern: item.content.pattern,
    arrow: item.content.arrow,
    strokeWidth: item.content.strokeWidth ?? 2,
    label: item.content.label || '',
    opacity: item.content.opacity ?? 1
  })
  isEditLinkModalActive.value = true
}

function editLink(item) {
  const tmp = graphData.value.links.find(x => x.id === item.id)
  if (!tmp) return
  tmp.color = item.content.color
  tmp.shape = item.content.shape
  tmp.pattern = item.content.pattern
  tmp.arrow = item.content.arrow
  tmp.strokeWidth = parseFloat(item.content.strokeWidth) || 2
  tmp.label = item.content.label
  tmp.opacity = parseFloat(item.content.opacity) || 1
  isEditLinkModalActive.value = false
}

function endEdit() { editable.value = false }

function nodeClicked(id) { emit('nodeClicked', id) }
function linkClicked(id) { emit('linkClicked', id) }

function handleNodeRemoved(id) {
  graphData.value.nodes = graphData.value.nodes.filter(x => x.id !== id)
  graphData.value.links = graphData.value.links.filter(x => x.source !== id && x.destination !== id)
  emit('nodeRemoved', id)
}

function handleLinkRemoved(id) {
  graphData.value.links = graphData.value.links.filter(x => x.id !== id)
  emit('linkRemoved', id)
}

function handleLinkAdded(link) {
  graphData.value.links.push(link)
}

function handleNodeCopied(node) {
  graphData.value.nodes.push(node)
}

function openInputModal() {
  isInputModalActive.value = true
  json.value = JSON.stringify(graphData.value, null, 2)
}

function importData(value) {
  try {
    const obj = JSON.parse(value.text)
    if (obj) {
      graphData.value = obj
      isInputModalActive.value = false
    }
  } catch (e) {
    alert('Invalid JSON: ' + e.message)
  }
}

function downloadSVG() {
  const el = document.getElementById('svg-diagram-show-area')
  if (!el) return
  const blob = new Blob([el.innerHTML], { type: 'image/svg+xml' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'diagram.svg'
  link.click()
}

function openSettingsModal() {
  isSettingsModalActive.value = true
  settings.width = graphData.value.width
  settings.height = graphData.value.height
  settings.showGrid = graphData.value.showGrid
}

function updateSettings(val) {
  Object.assign(settings, val)
  graphData.value.width = parseInt(settings.width, 10)
  graphData.value.height = parseInt(settings.height, 10)
  graphData.value.showGrid = settings.showGrid
  isSettingsModalActive.value = false
}
</script>
<style lang="scss" scoped>
#editor {
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  flex-wrap: wrap;
}
.toolbar-group {
  display: flex;
  align-items: center;
  gap: 6px;
  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 1px;
    height: 20px;
    background: #e5e7eb;
    margin-left: 2px;
  }
}
</style>
