<template>
  <VModal :isActive="isActive" title="Confirm" @clickModal="cancel">
    <p class="message"><slot></slot></p>

    <template #footer>
      <VButton variant="danger" @click="ok">OK</VButton>
      <VButton @click="cancel">Cancel</VButton>
    </template>
  </VModal>
</template>
<script setup lang="ts">
defineProps({ isActive: Boolean })
const emit = defineEmits(['ok', 'cancel'])
function ok() { emit('ok', true) }
function cancel() { emit('cancel') }
</script>
<style lang="scss" scoped>
.message { margin: 0; font-size: 14px; color: #374151; }
</style>
