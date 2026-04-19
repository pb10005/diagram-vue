<template>
  <label class="toggle">
    <input
      class="toggle-input"
      :id="checkboxId"
      type="checkbox"
      :checked="modelValue"
      @change="handleCheckChange"
    />
    <span class="toggle-track">
      <span class="toggle-thumb"></span>
    </span>
    <span class="toggle-label"><slot /></span>
  </label>
</template>
<script lang="ts">
let ckboxCounter = 0
</script>
<script setup lang="ts">
defineOptions({ name: 'VCkbox' })
const checkboxId = `vckbox-${++ckboxCounter}`
defineProps({ modelValue: Boolean })
const emit = defineEmits(['update:modelValue'])

function handleCheckChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>
<style lang="scss" scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}
.toggle-input { display: none; }
.toggle-track {
  width: 36px;
  height: 20px;
  background: #d1d5db;
  border-radius: 10px;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
}
.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: left 0.2s;
}
.toggle-input:checked + .toggle-track {
  background: #3b82f6;
}
.toggle-input:checked + .toggle-track .toggle-thumb {
  left: 19px;
}
.toggle-label {
  font-size: 13px;
  color: #374151;
}
</style>
