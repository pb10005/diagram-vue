<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="form" v-if="isActive">
        <h2>Edit link</h2>
        <label>Color:</label>
        <VInput v-model="newLink.color" placeholder="color" /><br />
        <label>Shape:</label>
        <VSelect v-model="newLink.shape" placeholder="Select line shape">
          <option value="straight">Straight line</option>
          <option value="bezier">Bezier curve</option>
        </VSelect><br />
        <label>Pattern:</label>
        <VSelect v-model="newLink.pattern" placeholder="Select line pattern">
          <option value="solid" selected>Solid</option>
          <option value="dash">Dash</option>
          <option value="dot">Dot</option>
        </VSelect><br />
        <label>Arrow type:</label>
        <VSelect v-model="newLink.arrow" placeholder="Select arrow type">
          <option value="none">none</option>
          <option value="src">One side(source)</option>
          <option value="dest">One side(destination)</option>
          <option value="both">Both side</option>
        </VSelect><br />
        <VButton @click="ok">OK</VButton>
        <VButton class="danger" @click="cancel">Cancel</VButton>
      </div>
    </transition>
  </VModal>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  isActive: Boolean,
  link: {
    type: Object,
    default: () => ({
      id: '0',
      content: { color: '#ffeaa7', shape: 'straight', pattern: 'solid', arrow: 'none' }
    })
  }
})

const emit = defineEmits(['ok', 'cancel'])

const newLink = ref({ ...props.link.content })

watch(() => props.link, val => {
  newLink.value = { ...val.content }
})

function ok() {
  emit('ok', { id: props.link.id, content: { ...newLink.value } })
}
function cancel() { emit('cancel') }
</script>
<style lang="scss" scoped>
input { margin-bottom: 5px; }
.item-enter-active { transition: all 0.8s ease; }
.item-leave-active { transition: all 0.3s ease; }
.item-enter-from,
.item-leave-to { opacity: 0; }
select { margin-bottom: 5px; }
</style>
