<template>
  <select v-model="val" @change="onChange">
    <slot></slot>
  </select>
</template>
<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      val: this.value
    };
  },
  methods: {
    onChange() {
      if (this.value !== this.val) this.$emit("input", this.val);
    }
  }
};
</script>
<style lang="scss" scoped>
select {
  border: 0;
  border-bottom: #e0e0e0 solid 1px;
  padding: 5px;
  background: transparent;
  option {
    padding: 5px;
  }
}
</style>
