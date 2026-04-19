<template>
  <VModal :isActive="isActive" title="Node Properties" @clickModal="cancel">
    <div class="form">
      <section class="section">
        <h3 class="section-title">Content</h3>
        <div class="field-row">
          <VInput v-model="newNode.content.text" label="Label" placeholder="Node label" />
        </div>
        <div class="field-row">
          <VInput v-model="newNode.content.url" label="URL (optional)" placeholder="https://..." />
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Typography</h3>
        <div class="field-row three-col">
          <VInput type="number" v-model="newNode.content.fontSize" label="Font size" placeholder="13" />
          <div class="field-group">
            <label class="field-label">Font color</label>
            <VInput type="color" v-model="newNode.content.fontColor" />
          </div>
          <VSelect v-model="newNode.content.fontWeight" label="Weight">
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </VSelect>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Shape &amp; Size</h3>
        <div class="field-row three-col">
          <VSelect v-model="newNode.shape" label="Shape">
            <option value="rectangle">Rectangle</option>
            <option value="ellipse">Ellipse</option>
            <option value="diamond">Diamond</option>
          </VSelect>
          <VInput type="number" v-model="newNode.width" label="Width" placeholder="150" />
          <VInput type="number" v-model="newNode.height" label="Height" placeholder="60" />
        </div>
        <div class="field-row two-col" v-if="newNode.shape === 'rectangle'">
          <VInput type="number" v-model="newNode.rx" label="Corner radius X" placeholder="6" />
          <VInput type="number" v-model="newNode.ry" label="Corner radius Y" placeholder="6" />
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Appearance</h3>
        <div class="field-row three-col">
          <div class="field-group">
            <label class="field-label">Fill color</label>
            <VInput type="color" v-model="newNode.content.color" />
          </div>
          <div class="field-group">
            <label class="field-label">Stroke color</label>
            <VInput type="color" v-model="newNode.stroke" />
          </div>
          <VInput type="number" v-model="newNode.strokeWeight" label="Stroke weight" placeholder="1" />
        </div>
        <div class="field-row">
          <VInput type="number" v-model="newNode.opacity" label="Opacity (0–1)" placeholder="1" />
        </div>
      </section>
    </div>

    <template #footer>
      <VButton variant="primary" @click="ok">Save</VButton>
      <VButton variant="danger" @click="cancel">Cancel</VButton>
    </template>
  </VModal>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  isActive: Boolean,
  node: {
    type: Object,
    default: () => ({
      id: '',
      shape: 'rectangle',
      width: 150,
      height: 60,
      stroke: '#93c5fd',
      strokeWeight: 1,
      rx: 6,
      ry: 6,
      opacity: 1,
      content: { text: '', url: '', color: '#dbeafe', fontColor: '#1e3a5f', fontSize: 13, fontWeight: 'normal' }
    })
  }
})

const emit = defineEmits(['ok', 'cancel'])

const newNode = ref({ ...props.node, content: { ...props.node.content } })

watch(() => props.node, val => {
  newNode.value = { ...val, content: { ...val.content } }
}, { deep: true })

function ok() { emit('ok', newNode.value) }
function cancel() { emit('cancel') }

defineExpose({ newNode })
</script>
<style lang="scss" scoped>
.form { display: flex; flex-direction: column; gap: 0; }
.section {
  padding: 14px 0;
  border-bottom: 1px solid #f3f4f6;
  &:last-of-type { border-bottom: none; }
}
.section-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #9ca3af;
  margin: 0 0 10px;
}
.field-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  &.two-col { grid-template-columns: 1fr 1fr; }
  &.three-col { grid-template-columns: 1fr 1fr 1fr; }
  & + .field-row { margin-top: 10px; }
}
.field-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.field-label {
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
