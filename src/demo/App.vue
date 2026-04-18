<template>
  <div id="app">
    <h2>diagram-vue</h2>
    <section>
      <span>Demo:</span>
      <VSelect v-model="demo">
        <option value="default">Default Editor</option>
      </VSelect>
    </section>
    <br />
    <section v-if="demo === 'default'">
      <DiagramEditor v-model="graph"></DiagramEditor>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import data from './data.json'
import { DiagramEditor } from '../index.js'

const demo = ref('default')
const graph = ref({})

onMounted(() => { graph.value = data })
</script>
<style lang="scss">
body {
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .scrollXY {
    overflow-x: auto;
    overflow-y: auto;
  }
}
</style>
