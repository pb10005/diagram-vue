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
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background: #EEEEEE;
  opacity: 0.8;
  &.danger {
    background: #FF0000;
    color: #FFFFFF;
    border: 0;
  }
}
</style>
