<template>
  <g :opacity="node.opacity ?? 1">
    <g v-if="editable && selected">
      <rect
        :x="x + 2" :y="y - 30"
        width="48" height="22" rx="4"
        fill="#3b82f6" class="button"
        @click="editCandidate"
      />
      <text :x="x + 26" :y="y - 15" class="button btn-text" @click="editCandidate">
        {{ labels.edit || "Edit" }}
      </text>
      <rect
        :x="x + 2" :y="y + node.height + 6"
        width="56" height="22" rx="4"
        :fill="!createLinkMode ? '#6366f1' : '#9ca3af'" class="button"
        @click="toggleSelect"
      />
      <text :x="x + 30" :y="y + node.height + 21" class="button btn-text" @click="toggleSelect">
        {{ !createLinkMode ? labels.link || "Link" : labels.cancel || "Cancel" }}
      </text>
      <rect
        :x="x + 66" :y="y - 30"
        width="48" height="22" rx="4"
        fill="#f59e0b" class="button"
        @click="copy"
      />
      <text :x="x + 90" :y="y - 15" class="button btn-text" @click="copy">
        {{ labels.copy || "Copy" }}
      </text>
      <rect
        :x="x + 66" :y="y + node.height + 6"
        width="56" height="22" rx="4"
        fill="#ef4444" class="button"
        @click="remove"
      />
      <text :x="x + 94" :y="y + node.height + 21" class="button btn-text" @click="remove">
        {{ labels.remove || "Remove" }}
      </text>
    </g>
    <g v-if="editable && createLinkMode && !selected">
      <rect
        :x="x + 2" :y="y - 30"
        width="56" height="22" rx="4"
        fill="#10b981" class="button"
        @click="commitDest"
      />
      <text :x="x + 30" :y="y - 15" class="button btn-text" @click="commitDest">
        {{ labels.select || "Select" }}
      </text>
    </g>

    <ellipse
      v-if="node.shape === 'ellipse'"
      class="grab"
      :cx="x + node.width / 2"
      :cy="y + node.height / 2"
      :rx="node.width / 2"
      :ry="node.height / 2"
      :fill="node.content.color || '#dbeafe'"
      :stroke="node.stroke || '#93c5fd'"
      :stroke-width="node.strokeWeight ?? 1"
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <polygon
      v-else-if="node.shape === 'diamond'"
      :points="diamondPoints"
      class="grab"
      :fill="node.content.color || '#dbeafe'"
      :stroke="node.stroke || '#93c5fd'"
      :stroke-width="node.strokeWeight ?? 1"
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <rect
      v-else
      class="grab"
      :x="x"
      :y="y"
      :width="node.width"
      :height="node.height"
      :rx="node.rx ?? 6"
      :ry="node.ry ?? 6"
      :fill="node.content.color || '#dbeafe'"
      :stroke="node.stroke || '#93c5fd'"
      :stroke-width="node.strokeWeight ?? 1"
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />

    <a v-if="safeUrl" :href="safeUrl" target="_blank">
      <text
        :x="x + node.width / 2"
        :y="y + node.height / 2 + (node.content.fontSize ?? 13) / 3"
        :fill="node.content.fontColor || '#1e3a5f'"
        font-family="system-ui, sans-serif"
        :font-size="node.content.fontSize ?? 13"
        :font-weight="node.content.fontWeight || 'normal'"
        text-anchor="middle"
        text-decoration="underline"
        style="pointer-events: none;"
      >
        {{ node.content.text }}
      </text>
    </a>
    <text
      v-else
      :x="x + node.width / 2"
      :y="y + node.height / 2 + (node.content.fontSize ?? 13) / 3"
      :fill="node.content.fontColor || '#1e3a5f'"
      font-family="system-ui, sans-serif"
      :font-size="node.content.fontSize ?? 13"
      :font-weight="node.content.fontWeight || 'normal'"
      text-anchor="middle"
      style="pointer-events: none;"
    >
      {{ node.content.text }}
    </text>
  </g>
</template>
<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { useMouseLocation } from '../composables/useMouseLocation'

const props = defineProps({
  node: { type: Object, required: true },
  editable: Boolean,
  createLinkMode: Boolean,
  selected: Boolean,
  labels: Object,
  scale: String,
  rWidth: Number,
  rHeight: Number
})

const emit = defineEmits([
  'toggleSelect', 'commitDest', 'remove', 'copy',
  'click', 'select', 'updateLocation', 'editNode'
])

const { getLocation } = useMouseLocation()

const startPosition = ref(null)
const cursorOffset = ref({ x: 0, y: 0 })
const x = ref(props.node.point.x)
const y = ref(props.node.point.y)

const safeUrl = computed(() => {
  const url = props.node.content?.url
  return url && /^https?:\/\//i.test(url) ? url : ''
})

const diamondPoints = computed(() => {
  const cx = x.value + props.node.width / 2
  const cy = y.value + props.node.height / 2
  const hw = props.node.width / 2
  const hh = props.node.height / 2
  return `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`
})

watch(() => props.node, node => {
  x.value = node.point.x
  y.value = node.point.y
})

function toggleSelect() { emit('toggleSelect') }
function commitDest() { emit('commitDest', props.node.id) }
function remove() { emit('remove', props.node.id) }
function copy() { emit('copy', props.node) }

function mousedown(e) {
  emit('click', props.node.id)
  if (!props.editable) return
  emit('select', props.node.id)
  const [ex, ey] = getLocation(e)
  cursorOffset.value = { x: ex, y: ey }
  startPosition.value = { x: x.value, y: y.value }
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)
}

function mousemove(e) {
  if (!startPosition.value) return
  e.preventDefault()
  const [ex, ey] = getLocation(e)
  x.value = startPosition.value.x + (ex - cursorOffset.value.x) / props.rWidth / parseFloat(props.scale)
  y.value = startPosition.value.y + (ey - cursorOffset.value.y) / props.rHeight / parseFloat(props.scale)
  emit('updateLocation', { id: props.node.id, x: x.value, y: y.value })
}

function mouseup() {
  startPosition.value = null
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
}

function editCandidate() {
  emit('editNode', {
    id: props.node.id,
    shape: props.node.shape,
    width: props.node.width,
    height: props.node.height,
    rx: props.node.rx,
    ry: props.node.ry,
    opacity: props.node.opacity,
    content: { ...props.node.content },
    stroke: props.node.stroke,
    strokeWeight: props.node.strokeWeight
  })
}

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
})

defineExpose({ safeUrl })
</script>
<style lang="scss" scoped>
.button { cursor: pointer; }
.btn-text {
  fill: #fff;
  font-family: system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
  pointer-events: none;
  user-select: none;
}
.grab { cursor: grab; }
</style>
