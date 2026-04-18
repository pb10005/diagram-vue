<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <div>
      <textarea class="input" v-model="tmp" required placeholder="JSON"></textarea><br />
      <VButton @click="ok">OK</VButton>
      <VButton class="danger" @click="cancel">Cancel</VButton>
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
.input {
  width: 100%;
  height: 100px;
  margin-bottom: 5px;
}
</style>
