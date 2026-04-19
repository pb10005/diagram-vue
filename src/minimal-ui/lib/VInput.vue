<template>
  <div class="field">
    <label v-if="label" class="field-label">{{ label }}</label>
    <input
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'VInput' })
defineProps({
  type: String,
  modelValue: [String, Number],
  label: String,
  placeholder: String
})
const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
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
input {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  background: #fff;
  box-sizing: border-box;
  transition: border-color 0.15s, box-shadow 0.15s;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }
  &::placeholder { color: #9ca3af; }
  &[type='color'] {
    padding: 2px 4px;
    height: 34px;
    cursor: pointer;
  }
}
</style>
