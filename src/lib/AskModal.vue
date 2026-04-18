<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="block">
        <div class="inner-block"><slot></slot></div>
        <VButton @click="ok">OK</VButton>
        <VButton class="danger" @click="cancel">Cancel</VButton>
      </div>
    </transition>
  </VModal>
</template>
<script setup lang="ts">
defineProps({ isActive: Boolean })
const emit = defineEmits(['ok', 'cancel'])
function ok() { emit('ok', true) }
function cancel() { emit('cancel') }
</script>
<style lang="scss" scoped>
.inner-block { margin-bottom: 20px; }
.block { padding: 40px; }
.item-enter-active { transition: all 0.8s ease; }
.item-leave-active { transition: all 0.3s ease; }
.item-enter-from,
.item-leave-to { opacity: 0; }
</style>
