<template>
  <button><slot /></button>
</template>
<script setup lang="ts">
defineOptions({ name: 'VButton' })
</script>
<style lang="scss" scoped>
button {
  background: #ffffff;
  border: 1px solid #eeeeee;
  padding: 5px 10px;
  cursor: pointer;
  &.danger {
    border: 1px solid #ff0000;
    color: #ff0000;
  }
}
button:hover {
  background: #eeeeee;
  opacity: 0.8;
  &.danger {
    background: #ff0000;
    color: #ffffff;
  }
}
</style>
