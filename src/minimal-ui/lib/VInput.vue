<template>
  <input :type="type" :value="modelValue" @input="handleInput" />
</template>
<script setup lang="ts">
defineOptions({ name: 'VInput' })
defineProps({ type: String, modelValue: [String, Number] })
const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<style lang="scss" scoped>
input {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  padding: 10px 5px;
}
input:focus {
  border-bottom: 1px solid #00b894;
}
input::placeholder {
  font-weight: lighter;
  font-size: 20px;
}
</style>
