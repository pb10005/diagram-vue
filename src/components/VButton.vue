<template>
  <button @click="onClick"><slot /></button>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss" scoped>
button {
  background: transparent;
  border: 1px solid #eeeeee;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background: #eeeeee;
  opacity: 0.8;
}
</style>
