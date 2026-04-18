<template>
  <div id="svg-diagram-show-area" class="scrollXY" ref="field">
    <svg
      :width="fluid ? '100%' : width"
      :height="fluid ? '100%' : height"
      :viewBox="viewBoxDiagram"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1" />
        </pattern>
      </defs>
      <g :transform="scaleStr">
        <rect
          x="0" y="0"
          :width="width" :height="height"
          :fill="showGrid ? 'url(#grid)' : background"
          @click="reset"
        />
        <Node
          :node="item"
          :selected="item.id === selectedNode"
          v-for="item in nodes"
          :key="item.id"
          :createLinkMode="createLinkMode"
          :editable="editable"
          :labels="labels"
          :rWidth="rect().rWidth"
          :rHeight="rect().rHeight"
          :scale="scale"
          @editNode="editNode"
          @click="clickNode"
          @select="selectNode"
          @copy="copyNode"
          @updateLocation="updateNodeLocation"
          @toggleSelect="toggleSrcSelect"
          @commitDest="commitDest"
          @remove="removeNode"
        />
        <Link
          :link="item"
          v-for="item in links"
          :selected="item.id === selectedLink"
          :key="item.id"
          :source="findNode(item.source)"
          :destination="findNode(item.destination)"
          :editable="editable"
          :labels="labels"
          :rWidth="rect().rWidth"
          :rHeight="rect().rHeight"
          :scale="scale"
          @editLink="editLink"
          @click="clickLink"
          @select="selectLink"
          @updateLocation="updateLinkLocation"
          @remove="removeLink"
        />
      </g>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Node from '@/lib/Node.vue'
import Link from '@/lib/Link.vue'

const props = defineProps({
  width: Number,
  height: Number,
  scale: { type: String, default: '1' },
  background: String,
  showGrid: Boolean,
  nodes: Array,
  links: Array,
  editable: Boolean,
  labels: Object,
  fluid: { type: Boolean, default: false }
})

const emit = defineEmits([
  'editNode', 'editLink', 'nodeClicked', 'linkClicked',
  'nodeChanged', 'linkChanged', 'nodeRemoved', 'linkRemoved'
])

const field = ref(null)
const selectedNode = ref(-1)
const selectedLink = ref(-1)
const createLinkMode = ref(false)

const viewBoxDiagram = computed(() =>
  props.fluid
    ? `0 0 ${props.width / props.scale} ${props.height / props.scale}`
    : `0 0 ${props.width} ${props.height}`
)

const scaleStr = computed(() =>
  `scale(${props.fluid ? 1.0 : props.scale || 1.0})translate(0,0)`
)

function generateID() {
  return new Date().getTime().toString(16) + Math.floor(Math.random() * 1000000).toString(16)
}

function rect() {
  if (props.fluid && field.value) {
    const r = field.value.getBoundingClientRect()
    return { rWidth: r.width / props.width, rHeight: r.height / props.height }
  }
  return { rWidth: 1, rHeight: 1 }
}

function findNode(id) {
  return props.nodes.find(x => x.id === id)
}

function reset() {
  if (!createLinkMode.value) {
    selectedNode.value = -1
    selectedLink.value = -1
  }
}

function editNode(item) { emit('editNode', item) }
function editLink(item) { emit('editLink', item) }

function updateNodeLocation(obj) {
  const item = props.nodes.find(x => x.id === obj.id)
  if (!item) return
  item.point.x = obj.x
  item.point.y = obj.y
}

function updateLinkLocation(obj) {
  const item = props.links.find(x => x.id === obj.id)
  if (!item) return
  item.point.x = obj.x
  item.point.y = obj.y
}

function clickNode(id) { emit('nodeClicked', id) }
function clickLink(id) { emit('linkClicked', id) }
function selectNode(id) { selectedNode.value = id }
function selectLink(id) { selectedLink.value = id }

function toggleSrcSelect() { createLinkMode.value = !createLinkMode.value }

function commitDest(id) {
  const src = props.nodes.find(x => x.id === selectedNode.value)
  const dest = props.nodes.find(x => x.id === id)
  if (!src || !dest) return
  props.links.push({
    id: generateID(),
    source: selectedNode.value,
    destination: id,
    point: {
      x: (src.point.x + dest.point.x) * 0.5,
      y: (src.point.y + dest.point.y) * 0.5
    }
  })
  createLinkMode.value = false
  selectedNode.value = -1
}

function removeLink(id) {
  emit('linkRemoved', id)
  const idx = props.links.findIndex(x => x.id === id)
  if (idx !== -1) props.links.splice(idx, 1)
}

function removeNode(id) {
  emit('nodeRemoved', id)
  const nIdx = props.nodes.findIndex(x => x.id === id)
  if (nIdx !== -1) props.nodes.splice(nIdx, 1)
  const toRemove = props.links.filter(x => x.source === id || x.destination === id)
  toRemove.forEach(l => {
    const lIdx = props.links.findIndex(x => x.id === l.id)
    if (lIdx !== -1) props.links.splice(lIdx, 1)
  })
  createLinkMode.value = false
}

function copyNode(node) {
  if (!props.editable) return
  props.nodes.push({
    id: generateID(),
    content: { ...node.content },
    width: node.width,
    height: node.height,
    point: { x: node.point.x + 30, y: node.point.y + 30 },
    shape: node.shape,
    stroke: node.stroke,
    strokeWeight: node.strokeWeight
  })
}

defineExpose({ updateNodeLocation, updateLinkLocation, commitDest })
</script>
<style>
.scrollXY {
  overflow-x: auto;
  overflow-y: auto;
}
</style>
