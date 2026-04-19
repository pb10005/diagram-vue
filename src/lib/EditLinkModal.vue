<template>
  <VModal :isActive="isActive" title="Link Properties" @clickModal="cancel">
    <div class="form">
      <section class="section">
        <h3 class="section-title">Label</h3>
        <VInput v-model="newLink.label" label="Text label (optional)" placeholder="Describe this link..." />
      </section>

      <section class="section">
        <h3 class="section-title">Line Style</h3>
        <div class="field-row two-col">
          <VSelect v-model="newLink.shape" label="Line shape">
            <option value="straight">Straight</option>
            <option value="bezier">Bezier curve</option>
          </VSelect>
          <VSelect v-model="newLink.pattern" label="Line pattern">
            <option value="solid">Solid</option>
            <option value="dash">Dashed</option>
            <option value="dot">Dotted</option>
          </VSelect>
        </div>
        <div class="field-row two-col">
          <VInput type="number" v-model="newLink.strokeWidth" label="Stroke width" placeholder="2" />
          <VSelect v-model="newLink.arrow" label="Arrow">
            <option value="none">None</option>
            <option value="dest">→ Destination</option>
            <option value="src">← Source</option>
            <option value="both">↔ Both</option>
          </VSelect>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Appearance</h3>
        <div class="field-row two-col">
          <div class="field-group">
            <label class="field-label">Color</label>
            <VInput type="color" v-model="newLink.color" />
          </div>
          <VInput type="number" v-model="newLink.opacity" label="Opacity (0–1)" placeholder="1" />
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
  link: {
    type: Object,
    default: () => ({
      id: '0',
      content: { color: '#6366f1', shape: 'straight', pattern: 'solid', arrow: 'none', strokeWidth: 2, label: '', opacity: 1 }
    })
  }
})

const emit = defineEmits(['ok', 'cancel'])

const newLink = ref({ ...props.link.content })

watch(() => props.link, val => {
  newLink.value = { ...val.content }
}, { deep: true })

function ok() {
  emit('ok', { id: props.link.id, content: { ...newLink.value } })
}
function cancel() { emit('cancel') }
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
