<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="form" v-if="isActive">
        <VInput v-model="newNode.content.text" placeholder="name" /><br />
        <VInput v-model="newNode.content.url" placeholder="url" /><br />
        <VInput v-model="newNode.content.color" placeholder="color" /><br />
        <VInput type="number" v-model="newNode.width" placeholder="width" /><br />
        <VInput type="number" v-model="newNode.height" placeholder="height" /><br />
        <VInput type="text" v-model="newNode.stroke" placeholder="stroke" /><br />
        <VInput type="number" v-model="newNode.strokeWeight" placeholder="stroke weight" /><br />
        <VSelect v-model="newNode.shape" placeholder="Select shape">
          <option value="rectangle" selected>Rectangle</option>
          <option value="ellipse">Ellipse</option>
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
  node: {
    type: Object,
    default: () => ({
      id: '',
      shape: 'rectangle',
      width: 150,
      height: 60,
      stroke: '',
      strokeWeight: 0,
      content: { text: 'none', url: '', color: '#ecf0f1' }
    })
  }
})

const emit = defineEmits(['ok', 'cancel'])

const newNode = ref({ ...props.node, content: { ...props.node.content } })

watch(() => props.node, val => {
  newNode.value = { ...val, content: { ...val.content } }
})

function ok() { emit('ok', newNode.value) }
function cancel() { emit('cancel') }

defineExpose({ newNode })
</script>
<style lang="scss" scoped>
input {
  width: 95%;
  margin-bottom: 5px;
}
select {
  margin-bottom: 5px;
}
.item-enter-active { transition: all 0.8s ease; }
.item-leave-active { transition: all 0.3s ease; }
.item-enter-from,
.item-leave-to { opacity: 0; }
</style>
