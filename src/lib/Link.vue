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
    <path
      v-else-if="link.shape === 'polyline'"
      :d="calcPolylinePath()"
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
        refX="10"
        refY="5"
      >
        <polygon points="0,2 0,8 10,5" :fill="link.color || '#6366f1'" />
      </marker>
    </defs>

    <text
      v-if="link.label"
      :x="labelPos().x"
      :y="labelPos().y - 14"
      text-anchor="middle"
      font-family="system-ui, sans-serif"
      font-size="12"
      :fill="link.color || '#6366f1'"
      style="pointer-events: none; user-select: none;"
    >{{ link.label }}</text>

    <g v-if="editable && link.shape !== 'polyline'">
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
    <!-- Polyline: invisible wide hit area for selection (no draggable dot) -->
    <path
      v-if="editable && link.shape === 'polyline'"
      :d="calcPolylinePath()"
      stroke="transparent"
      stroke-width="12"
      fill="none"
      style="cursor: pointer"
      @mousedown="polylineClick"
    />
    <g v-if="selected">
      <!-- Shape switcher — anchored to anchorPos() so it follows the link -->
      <rect :x="anchorPos().x - 42" :y="anchorPos().y - 70" width="84" height="22" rx="5" fill="#0f172a" />
      <!-- straight -->
      <rect :x="anchorPos().x - 41" :y="anchorPos().y - 69" width="26" height="20" rx="3"
        :fill="(link.shape === 'straight' || !link.shape) ? '#3b82f6' : '#1e293b'"
        class="button" @click="changeShape('straight')" />
      <line :x1="anchorPos().x - 35" :y1="anchorPos().y - 59" :x2="anchorPos().x - 19" :y2="anchorPos().y - 59"
        stroke="#fff" stroke-width="2" style="pointer-events:none" />
      <!-- bezier -->
      <rect :x="anchorPos().x - 13" :y="anchorPos().y - 69" width="26" height="20" rx="3"
        :fill="link.shape === 'bezier' ? '#3b82f6' : '#1e293b'"
        class="button" @click="changeShape('bezier')" />
      <path :d="`M${anchorPos().x-8},${anchorPos().y-55} Q${anchorPos().x},${anchorPos().y-67} ${anchorPos().x+8},${anchorPos().y-55}`"
        fill="none" stroke="#fff" stroke-width="2" style="pointer-events:none" />
      <!-- polyline -->
      <rect :x="anchorPos().x + 15" :y="anchorPos().y - 69" width="26" height="20" rx="3"
        :fill="link.shape === 'polyline' ? '#3b82f6' : '#1e293b'"
        class="button" @click="changeShape('polyline')" />
      <path :d="`M${anchorPos().x+19},${anchorPos().y-55} L${anchorPos().x+19},${anchorPos().y-63} L${anchorPos().x+37},${anchorPos().y-63}`"
        fill="none" stroke="#fff" stroke-width="2" style="pointer-events:none" />
      <!-- edit / remove -->
      <rect :x="anchorPos().x - 20" :y="anchorPos().y - 42" width="40" height="20" rx="4" fill="#3b82f6" class="button" @click="edit" />
      <text :x="anchorPos().x" :y="anchorPos().y - 28" text-anchor="middle" class="button btn-text" @click="edit">
        {{ labels.edit || "Edit" }}
      </text>
      <rect :x="anchorPos().x - 24" :y="anchorPos().y + 14" width="48" height="20" rx="4" fill="#ef4444" class="button" @click="remove" />
      <text :x="anchorPos().x" :y="anchorPos().y + 28" text-anchor="middle" class="button btn-text" @click="remove">
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

const emit = defineEmits(['click', 'select', 'updateLocation', 'remove', 'editLink', 'changeShape'])

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
function changeShape(shape: string) { emit('changeShape', { id: props.link.id, shape }) }
function polylineClick(e) { emit('click', props.link.id); select() }

function anchorPos() {
  return props.link.shape === 'polyline' ? labelPos() : point.value
}

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

function calcPolylinePath() {
  const srcCx = props.source.point.x + props.source.width / 2
  const srcCy = props.source.point.y + props.source.height / 2
  const dstCx = props.destination.point.x + props.destination.width / 2
  const dstCy = props.destination.point.y + props.destination.height / 2

  const dx = dstCx - srcCx
  const dy = dstCy - srcCy
  const absDx = Math.abs(dx)
  const absDy = Math.abs(dy)

  const goRight  = dx >= 0
  const goDown   = dy >= 0

  // Nearly same row (|dy| tiny) → straight or H→V→H with tiny V
  if (absDy < 10) {
    const src = { x: goRight ? props.source.point.x + props.source.width : props.source.point.x, y: srcCy }
    const dst = { x: goRight ? props.destination.point.x : props.destination.point.x + props.destination.width, y: dstCy }
    if (Math.abs(src.y - dst.y) < 2) return `M${src.x},${src.y} L${dst.x},${dst.y}`
    const midX = (src.x + dst.x) / 2
    return `M${src.x},${src.y} L${midX},${src.y} L${midX},${dst.y} L${dst.x},${dst.y}`
  }

  // Nearly same column (|dx| tiny) → straight or V→H→V with tiny H
  if (absDx < 10) {
    const src = { x: srcCx, y: goDown ? props.source.point.y + props.source.height : props.source.point.y }
    const dst = { x: dstCx, y: goDown ? props.destination.point.y : props.destination.point.y + props.destination.height }
    if (Math.abs(src.x - dst.x) < 2) return `M${src.x},${src.y} L${dst.x},${dst.y}`
    const midY = (src.y + dst.y) / 2
    return `M${src.x},${src.y} L${src.x},${midY} L${dst.x},${midY} L${dst.x},${dst.y}`
  }

  const ratio = absDy / absDx

  if (ratio <= 0.5) {
    // Mostly horizontal → H→V→H (2 bends)
    const src = { x: goRight ? props.source.point.x + props.source.width : props.source.point.x, y: srcCy }
    const dst = { x: goRight ? props.destination.point.x : props.destination.point.x + props.destination.width, y: dstCy }
    const midX = (src.x + dst.x) / 2
    return `M${src.x},${src.y} L${midX},${src.y} L${midX},${dst.y} L${dst.x},${dst.y}`
  }

  if (ratio >= 2.0) {
    // Mostly vertical → V→H→V (2 bends)
    const src = { x: srcCx, y: goDown ? props.source.point.y + props.source.height : props.source.point.y }
    const dst = { x: dstCx, y: goDown ? props.destination.point.y : props.destination.point.y + props.destination.height }
    const midY = (src.y + dst.y) / 2
    return `M${src.x},${src.y} L${src.x},${midY} L${dst.x},${midY} L${dst.x},${dst.y}`
  }

  // Diagonal (0.5 < ratio < 2.0) → L-shape (1 bend)
  // Exit horizontally from source, enter vertically into destination
  const src = { x: goRight ? props.source.point.x + props.source.width : props.source.point.x, y: srcCy }
  const dst = { x: dstCx, y: goDown ? props.destination.point.y : props.destination.point.y + props.destination.height }
  return `M${src.x},${src.y} L${dst.x},${src.y} L${dst.x},${dst.y}`
}

function labelPos() {
  if (props.link.shape === 'polyline') {
    return {
      x: (props.source.point.x + props.source.width / 2 + props.destination.point.x + props.destination.width / 2) / 2,
      y: (props.source.point.y + props.source.height / 2 + props.destination.point.y + props.destination.height / 2) / 2
    }
  }
  return point.value
}

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
