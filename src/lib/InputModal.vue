<template>
  <VModal :isActive="isActive" title="Import / Export JSON" @clickModal="cancel">
    <textarea class="editor" v-model="tmp" placeholder="Paste JSON here..."></textarea>

    <template #footer>
      <VButton variant="primary" @click="ok">Import</VButton>
      <VButton @click="cancel">Cancel</VButton>
    </template>
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
.editor {
  width: 100%;
  height: 220px;
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
</style>
