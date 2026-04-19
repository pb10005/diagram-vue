<template>
  <VModal :isActive="isActive" title="Diagram Settings" @clickModal="cancel">
    <div class="form">
      <section class="section">
        <h3 class="section-title">Canvas size</h3>
        <div class="field-row two-col">
          <VInput type="number" v-model="newSettings.width" label="Width" />
          <VInput type="number" v-model="newSettings.height" label="Height" />
        </div>
      </section>
      <section class="section">
        <h3 class="section-title">Display</h3>
        <div class="field-row">
          <VSelect v-model="newSettings.scale" label="Scale">
            <option value="0.5">Small (50%)</option>
            <option value="1">Medium (100%)</option>
            <option value="1.5">Large (150%)</option>
            <option value="2">XLarge (200%)</option>
          </VSelect>
        </div>
        <div class="toggles">
          <VCkbox v-model="newSettings.isFluid">Fluid (fill container)</VCkbox>
          <VCkbox v-model="newSettings.showGrid">Show grid</VCkbox>
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
import { reactive, watch } from 'vue'

const props = defineProps({
  isActive: { type: Boolean, default: false },
  settings: {
    type: Object,
    default: () => ({ width: 1500, height: 1000, scale: '1', isFluid: false, showGrid: false })
  }
})

const emit = defineEmits(['ok', 'cancel'])

const newSettings = reactive({ width: 0, height: 0, scale: '1', isFluid: false, showGrid: false })

watch(() => props.isActive, val => {
  if (val) Object.assign(newSettings, props.settings)
})

function ok() { emit('ok', { ...newSettings }) }
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
.toggles {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}
</style>
