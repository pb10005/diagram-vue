<template>
  <g>
    <g v-if="editable">
      <text
        v-if="selected"
        :x="x + 5"
        :y="y + node.height + 22"
        class="button"
        fill="#00b894"
        @click="editCandidate"
      >
        {{ labels.edit || "Edit" }}
      </text>
      <text
        v-if="selected"
        :x="x + 5"
        :y="y - 10"
        class="button"
        fill="#00b894"
        stroke="none"
        @click="toggleSelect"
      >
        {{ !createLinkMode ? labels.link || "Link" : labels.cancel || "Cancel" }}
      </text>
      <text
        v-if="selected"
        :x="x + 100"
        :y="y - 10"
        class="button"
        fill="orange"
        @click="copy"
      >
        {{ labels.copy || "Copy" }}
      </text>
      <text
        v-if="selected"
        :x="x + 65"
        :y="y + node.height + 22"
        class="button"
        fill="#ff7675"
        @click="remove"
      >
        {{ labels.remove || "Remove" }}
      </text>
      <text
        v-if="createLinkMode && !selected"
        :x="x + 5"
        :y="y - 10"
        class="button"
        fill="#ff7675"
        @click="commitDest"
      >
        {{ labels.select || "Select" }}
      </text>
    </g>
    <ellipse
      v-if="node.shape === 'ellipse'"
      class="grab"
      :cx="x + node.width / 2"
      :cy="y + node.height / 2"
      :width="node.width"
      :height="node.height"
      :rx="node.width / 2"
      :ry="node.height / 2"
      :fill="node.content.color || '#ecf0f1'"
      :stroke-width="node.strokeWeight"
      :stroke="node.stroke"
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
      rx="5"
      ry="3"
      :fill="node.content.color || '#ecf0f1'"
      :stroke-width="node.strokeWeight"
      :stroke="node.stroke"
      @touchstart="mousedown"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mouseup="mouseup"
      @touchend="mouseup"
    />
    <a target="_blank" :href="safeUrl">
      <text
        :x="x + node.width / 2"
        :y="y + node.height / 2"
        fill="#34495e"
        font-family="Meiryo UI, sans-serif"
        font-size="20"
        text-anchor="middle"
      >
        {{ node.content.text }}
      </text>
    </a>
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
    content: props.node.content,
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
.button {
  cursor: pointer;
}
.grab {
  cursor: grab;
}
</style>
