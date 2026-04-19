<template>
  <div class="field">
    <label v-if="label" class="field-label">{{ label }}</label>
    <select :value="modelValue" :multiple="multiple" @change="handleChange">
      <option v-if="placeholder" :value="null" disabled>{{ placeholder }}</option>
      <slot></slot>
    </select>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'VSelect' })
defineProps({
  modelValue: { type: [String, Number, Boolean, Object], default: null },
  multiple: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])

function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>
<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}
.field-label {
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
select {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  background: #fff;
  cursor: pointer;
  appearance: auto;
  &:focus { outline: none; border-color: #3b82f6; }
}
</style>
