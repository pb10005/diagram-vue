<template>
  <transition name="modal">
    <div v-if="isActive" class="overlay" @click.self="$emit('clickModal')">
      <div class="card">
        <div class="card-header">
          <span class="card-title">{{ title }}</span>
          <button class="close-btn" @click="$emit('clickModal')">✕</button>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
defineOptions({ name: 'VModal' })
defineProps({ isActive: Boolean, title: { type: String, default: '' } })
defineEmits(['clickModal'])
</script>
<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  width: min(520px, 92vw);
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  z-index: 9999;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #f3f4f6;
  flex-shrink: 0;
}
.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
}
.close-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  &:hover { background: #f3f4f6; color: #374151; }
}
.card-body {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}
.card-footer {
  padding: 12px 20px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex-shrink: 0;
}
.modal-enter-active,
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
</style>
