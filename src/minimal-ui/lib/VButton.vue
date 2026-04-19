<template>
  <button :class="['btn', variant]" @click="emit('click', $event)"><slot /></button>
</template>
<script setup lang="ts">
defineOptions({ name: 'VButton' })
defineProps({ variant: { type: String, default: 'default' } })
const emit = defineEmits(['click'])
</script>
<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #374151;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;
  &:hover { background: #f3f4f6; }
  &.primary {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #fff;
    &:hover { background: #2563eb; border-color: #2563eb; }
  }
  &.danger {
    border-color: #ef4444;
    color: #ef4444;
    &:hover { background: #ef4444; color: #fff; }
  }
}
</style>
