<template>
  <span>
    <input
      class="ckbox"
      :id="checkboxId"
      type="checkbox"
      :checked="modelValue"
      @change="handleCheckChange"
    />
    <label :for="checkboxId"><slot /></label>
  </span>
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
.ckbox {
  background: #ffffff;
  cursor: pointer;
  border: 1px solid #eeeeee;
  transform: scale(1.5);
  padding: 5px;
}
.ckbox:hover {
  background: #eeeeee;
  opacity: 0.8;
}
label { font-size: 14px; }
</style>
