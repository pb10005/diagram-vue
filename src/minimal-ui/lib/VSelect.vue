<template>
  <select :value="modelValue" :multiple="multiple" @change="handleChange">
    <option class="placeholder" :value="null" disabled>{{ placeholder }}</option>
    <slot></slot>
  </select>
</template>
<script setup lang="ts">
defineOptions({ name: 'VSelect' })
defineProps({
  modelValue: { type: [String, Number, Boolean, Object], default: null },
  multiple: { type: Boolean, default: false },
  placeholder: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])

function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>
<style lang="scss" scoped>
select {
  border: 1px solid #eeeeee;
  padding: 5px 10px;
  background: transparent;
  option { padding: 5px; }
  .placeholder { display: none; }
}
</style>
