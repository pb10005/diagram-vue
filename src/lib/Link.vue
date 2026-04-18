<template>
  <g>
    <path
      v-if="link.shape === 'bezier'"
      :d="`M${calcSource().x} ${calcSource().y} Q ${point.x} ${point.y} ${calcDestination().x} ${calcDestination().y}`"
      :stroke="link.color || '#ffeaa7'"
      stroke-width="3"
      fill="none"
      :stroke-dasharray="definePattern(link.pattern)"
      :marker-start="link.arrow === 'src' || link.arrow === 'both' ? `url(#${link.id})` : ''"
      :marker-end="link.arrow === 'dest' || link.arrow === 'both' ? `url(#${link.id})` : ''"
    />
    <line
      v-else
      :x1="calcSource().x"
      :y1="calcSource().y"
      :x2="calcDestination().x"
      :y2="calcDestination().y"
      :stroke="link.color || '#ffeaa7'"
      stroke-width="3"
      fill="none"
      :stroke-dasharray="definePattern(link.pattern)"
      :marker-start="link.arrow === 'src' || link.arrow === 'both' ? `url(#${link.id})` : ''"
      :marker-end="link.arrow === 'dest' || link.arrow === 'both' ? `url(#${link.id})` : ''"
    />
    <marker
      :id="link.id"
      markerUnits="userSpaceOnUse"
      orient="auto-start-reverse"
      markerWidth="15"
      markerHeight="15"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
    >
      <polygon points="0,1.5 0,8.5 10,5 " :fill="link.color || '#ffeaa7'" />
    </marker>
    <g v-if="editable">
      <line :x1="calcSource().x" :y1="calcSource().y" :x2="point.x" :y2="point.y" stroke="lightgray" />
      <line :x1="point.x" :y1="point.y" :x2="calcDestination().x" :y2="calcDestination().y" stroke="lightgray" />
      <ellipse
        :id="link.id"
        :cx="point.x"
        :cy="point.y"
        rx="10"
        ry="10"
        fill="#ff7675"
        stroke-width="2"
        class="grab"
        @click="select"
        @mousedown="mousedown"
        @touchstart="mousedown"
        @mousemove="mousemove"
        @touchmove="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <g>
      <text :x="point.x - 15" :y="point.y - 20" fill="#00b894" @click="edit" v-if="selected" class="button">
        {{ labels.edit || "Edit" }}
      </text>
      <text :x="point.x - 15" :y="point.y + 30" fill="#ff7675" @click="remove" v-if="selected" class="button">
        {{ labels.remove || "Remove" }}
      </text>
    </g>
  </g>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useMouseLocation } from '../composables/useMouseLocation'

const props = defineProps({
  selected: Boolean,
  editable: Boolean,
  source: { type: Object, required: true },
  destination: { type: Object, required: true },
  link: { type: Object, required: true },
  labels: Object,
  scale: String,
  rWidth: Number,
  rHeight: Number
})

const emit = defineEmits(['click', 'select', 'updateLocation', 'remove', 'editLink'])

const { getLocation } = useMouseLocation()

const startPosition = ref(null)
const cursorOffset = ref({ x: 0, y: 0 })
const point = ref(props.link.point)

function mousedown(e) {
  emit('click', props.link.id)
  const [ex, ey] = getLocation(e)
  cursorOffset.value = { x: ex, y: ey }
  startPosition.value = { x: point.value.x, y: point.value.y }
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)
}

function mousemove(e) {
  if (!startPosition.value) return
  e.preventDefault()
  const [ex, ey] = getLocation(e)
  point.value = {
    x: startPosition.value.x + (ex - cursorOffset.value.x) / props.rWidth / parseFloat(props.scale),
    y: startPosition.value.y + (ey - cursorOffset.value.y) / props.rHeight / parseFloat(props.scale)
  }
  emit('updateLocation', { id: props.link.id, x: point.value.x, y: point.value.y })
}

function mouseup() {
  startPosition.value = null
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
}

function definePattern(p) {
  if (p === 'dash') return 10
  if (p === 'dot') return 3
  return 0
}

function remove() { emit('remove', props.link.id) }
function select() { emit('select', props.link.id) }

function edit() {
  emit('editLink', {
    id: props.link.id,
    content: {
      color: props.link.color || '#ffeaa7',
      shape: props.link.shape || 'straight',
      pattern: props.link.pattern || 'solid',
      arrow: props.link.arrow || 'none'
    }
  })
}

function calcEdge(node, toPoint) {
  let dx = toPoint.x - node.point.x - node.width / 2
  let dy = toPoint.y - node.point.y - node.height / 2
  if (dx === 0) dx = 0.01
  if (Math.abs(dy / dx) <= 1) {
    return dx >= 0
      ? { x: node.point.x + node.width, y: node.point.y + node.height / 2 }
      : { x: node.point.x, y: node.point.y + node.height / 2 }
  }
  return dy >= 0
    ? { x: node.point.x + node.width / 2, y: node.point.y + node.height }
    : { x: node.point.x + node.width / 2, y: node.point.y }
}

function calcSource() { return calcEdge(props.source, point.value) }
function calcDestination() { return calcEdge(props.destination, point.value) }

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
})
</script>
<style scoped>
.button { cursor: pointer; }
.grab { cursor: grab; }
</style>
