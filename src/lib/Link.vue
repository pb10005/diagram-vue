<template>
  <g :opacity="link.opacity ?? 1">
    <path
      v-if="link.shape === 'bezier'"
      :d="`M${calcSource().x} ${calcSource().y} Q ${point.x} ${point.y} ${calcDestination().x} ${calcDestination().y}`"
      :stroke="link.color || '#6366f1'"
      :stroke-width="link.strokeWidth ?? 2"
      fill="none"
      :stroke-dasharray="definePattern(link.pattern)"
      :marker-start="link.arrow === 'src' || link.arrow === 'both' ? `url(#arrow-${link.id})` : ''"
      :marker-end="link.arrow === 'dest' || link.arrow === 'both' ? `url(#arrow-${link.id})` : ''"
    />
    <line
      v-else
      :x1="calcSource().x"
      :y1="calcSource().y"
      :x2="calcDestination().x"
      :y2="calcDestination().y"
      :stroke="link.color || '#6366f1'"
      :stroke-width="link.strokeWidth ?? 2"
      fill="none"
      :stroke-dasharray="definePattern(link.pattern)"
      :marker-start="link.arrow === 'src' || link.arrow === 'both' ? `url(#arrow-${link.id})` : ''"
      :marker-end="link.arrow === 'dest' || link.arrow === 'both' ? `url(#arrow-${link.id})` : ''"
    />
    <defs>
      <marker
        :id="`arrow-${link.id}`"
        markerUnits="userSpaceOnUse"
        orient="auto-start-reverse"
        markerWidth="12"
        markerHeight="12"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
      >
        <polygon points="0,2 0,8 10,5" :fill="link.color || '#6366f1'" />
      </marker>
    </defs>

    <text
      v-if="link.label"
      :x="point.x"
      :y="point.y - 14"
      text-anchor="middle"
      font-family="system-ui, sans-serif"
      font-size="12"
      :fill="link.color || '#6366f1'"
      style="pointer-events: none; user-select: none;"
    >{{ link.label }}</text>

    <g v-if="editable">
      <line :x1="calcSource().x" :y1="calcSource().y" :x2="point.x" :y2="point.y" stroke="#e5e7eb" stroke-dasharray="4" />
      <line :x1="point.x" :y1="point.y" :x2="calcDestination().x" :y2="calcDestination().y" stroke="#e5e7eb" stroke-dasharray="4" />
      <circle
        :cx="point.x"
        :cy="point.y"
        r="8"
        fill="#6366f1"
        stroke="#fff"
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
    <g v-if="selected">
      <rect :x="point.x - 20" :y="point.y - 42" width="40" height="20" rx="4" fill="#3b82f6" class="button" @click="edit" />
      <text :x="point.x" :y="point.y - 28" text-anchor="middle" class="button btn-text" @click="edit">
        {{ labels.edit || "Edit" }}
      </text>
      <rect :x="point.x - 24" :y="point.y + 14" width="48" height="20" rx="4" fill="#ef4444" class="button" @click="remove" />
      <text :x="point.x" :y="point.y + 28" text-anchor="middle" class="button btn-text" @click="remove">
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
  if (p === 'dash') return '10,5'
  if (p === 'dot') return '3,3'
  return '0'
}

function remove() { emit('remove', props.link.id) }
function select() { emit('select', props.link.id) }

function edit() {
  emit('editLink', {
    id: props.link.id,
    content: {
      color: props.link.color || '#6366f1',
      shape: props.link.shape || 'straight',
      pattern: props.link.pattern || 'solid',
      arrow: props.link.arrow || 'none',
      strokeWidth: props.link.strokeWidth ?? 2,
      label: props.link.label || ''
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
.btn-text {
  fill: #fff;
  font-family: system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  pointer-events: none;
  user-select: none;
}
.grab { cursor: grab; }
</style>
