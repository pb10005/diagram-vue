<template>
  <div id="app"><DiagramEditor v-model="graph"></DiagramEditor></div>
</template>

<script>
import data from "./data.json";
import DiagramEditor from "./DiagramEditor";
export default {
  name: "app",
  components: {
    DiagramEditor
  },
  data() {
    return {
      graph: {}
    };
  },
  mounted() {
    this.graph = data;
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
