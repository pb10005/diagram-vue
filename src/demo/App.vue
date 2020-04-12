<template>
  <div id="app">
    <h2>diagram-vue</h2>
    <section>
      <span>Demo:</span>
      <VSelect v-model="demo">
        <option value="default">Default Editor</option>
        <option value="calculator">Calculator</option>
      </VSelect>
    </section>
    <br />
    <section v-if="demo === 'default'">
      <DiagramEditor v-model="graph"></DiagramEditor>
    </section>
    <section v-if="demo === 'calculator'"><Calculator /></section>
  </div>
</template>

<script>
import data from "./data.json";
import { DiagramEditor } from "../index.js";
import Calculator from "./Calculator";
export default {
  name: "app",
  components: {
    DiagramEditor,
    Calculator
  },
  data() {
    return {
      demo: "default",
      graph: {}
    };
  },
  mounted() {
    this.graph = data;
  },
  methods: {
    refresh() {
      this.graph = data;
    }
  }
};
</script>

<style lang="scss">
body {
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }
  .scrollXY {
    overflow-x: auto;
    overflow-y: auto;
  }
}
</style>
