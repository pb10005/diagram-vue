<template>
  <VModal :isActive="isActive" title="Import / Export JSON" @clickModal="cancel">
    <div class="body">
      <textarea class="editor" v-model="tmp" placeholder="Paste JSON here..."></textarea>
      <div class="actions">
        <VButton variant="primary" @click="ok">Import</VButton>
        <VButton @click="cancel">Cancel</VButton>
      </div>
    </div>
  </VModal>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({ isActive: Boolean, text: String })
const emit = defineEmits(['ok', 'cancel'])

const tmp = ref('')

watch(() => props.text, val => { tmp.value = val ?? '' })

function ok() { emit('ok', { text: tmp.value }) }
function cancel() { emit('cancel') }
</script>
<style lang="scss" scoped>
.body { display: flex; flex-direction: column; gap: 12px; }
.editor {
  width: 100%;
  height: 200px;
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  resize: vertical;
  box-sizing: border-box;
  background: #f9fafb;
  &:focus { outline: none; border-color: #3b82f6; }
}
.actions { display: flex; gap: 8px; justify-content: flex-end; }
</style>
