<template>
  <div id="editor">
    <VButton v-if="!editable" @click="editable = true">Edit</VButton>
    <span v-else>
      <VButton @click="openModal">New Node</VButton>
      <VButton @click="endEdit">End</VButton>
    </span>
    <VButton @click="openInputModal">Import/Export</VButton>
    <VButton @click="downloadSVG">Download SVG</VButton>
    <VButton @click="isAskClearDiagram = true">Clear Diagram</VButton>
    <VButton @click="openSettingsModal">Settings</VButton>
    <AskModal :isActive="isAskClearDiagram" @ok="clearDiagram" @cancel="cancel">
      Do you wanna clear the Diagram?
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
      :background="graphData.background || '#fafafa'"
      :showGrid="graphData.showGrid"
      :nodes="graphData.nodes"
      :links="graphData.links"
      :editable="editable"
      :labels="graphData.labels || { edit: 'Edit', remove: 'Remove', link: 'New Link', select: 'Select', cancel: 'Cancel', copy: 'Copy' }"
      @editNode="openNodeEdit"
      @editLink="openLinkEdit"
      @nodeClicked="nodeClicked"
      @linkClicked="linkClicked"
      @nodeRemoved="nodeRemoved"
      @linkRemoved="linkRemoved"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
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
      background: '#fafafa',
      showGrid: false,
      labels: { edit: 'Edit', remove: 'Remove', link: 'New Link', select: 'Select', copy: 'Copy' },
      nodes: [],
      links: []
    })
  }
})

const emit = defineEmits([
  'update:modelValue', 'nodeClicked', 'linkClicked', 'nodeRemoved', 'linkRemoved'
])

const graphData = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

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
  stroke: '', strokeWeight: 0,
  content: { text: '', url: '', color: '' }
})

const tmpLink = reactive({
  id: '',
  content: { color: '', pattern: 'solid', arrow: 'none' }
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
    content: { text: item.content.text, url: item.content.url, color: item.content.color },
    width: parseInt(item.width, 10) || 150,
    height: parseInt(item.height, 10) || 60,
    stroke: item.stroke,
    strokeWeight: item.strokeWeight,
    shape: item.shape,
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
    height: item.height
  })
  Object.assign(tmpNode.content, {
    text: item.content.text,
    url: item.content.url,
    color: item.content.color
  })
  isEditModalActive.value = true
}

function editNode(item) {
  const tmp = graphData.value.nodes.find(x => x.id === item.id)
  if (!tmp) return
  tmp.content.text = item.content.text
  tmp.content.url = item.content.url
  tmp.content.color = item.content.color
  tmp.shape = item.shape
  tmp.stroke = item.stroke
  tmp.strokeWeight = item.strokeWeight
  tmp.width = parseInt(item.width, 10)
  tmp.height = parseInt(item.height, 10)
  isEditModalActive.value = false
}

function openLinkEdit(item) {
  tmpLink.id = item.id
  Object.assign(tmpLink.content, item.content)
  isEditLinkModalActive.value = true
}

function editLink(item) {
  const tmp = graphData.value.links.find(x => x.id === item.id)
  if (!tmp) return
  tmp.color = item.content.color
  tmp.shape = item.content.shape
  tmp.pattern = item.content.pattern
  tmp.arrow = item.content.arrow
  isEditLinkModalActive.value = false
}

function endEdit() { editable.value = false }

function nodeClicked(id) { emit('nodeClicked', id) }
function linkClicked(id) { emit('linkClicked', id) }
function nodeRemoved(id) { emit('nodeRemoved', id) }
function linkRemoved(id) { emit('linkRemoved', id) }

function openInputModal() {
  isInputModalActive.value = true
  json.value = JSON.stringify(graphData.value)
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
  link.download = 'image.svg'
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
