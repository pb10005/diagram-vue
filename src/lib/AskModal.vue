<template>
  <VModal :isActive="isActive" title="Confirm" @clickModal="cancel">
    <div class="body">
      <p class="message"><slot></slot></p>
      <div class="actions">
        <VButton variant="danger" @click="ok">OK</VButton>
        <VButton @click="cancel">Cancel</VButton>
      </div>
    </div>
  </VModal>
</template>
<script setup lang="ts">
defineProps({ isActive: Boolean })
const emit = defineEmits(['ok', 'cancel'])
function ok() { emit('ok', true) }
function cancel() { emit('cancel') }
</script>
<style lang="scss" scoped>
.body { display: flex; flex-direction: column; gap: 20px; }
.message { margin: 0; font-size: 14px; color: #374151; }
.actions { display: flex; gap: 8px; }
</style>
