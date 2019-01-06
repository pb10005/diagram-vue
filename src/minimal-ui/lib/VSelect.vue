<template>
  <select value="val" v-model="val" @change="onChange">
    <slot></slot>
  </select>
</template>
<script>
export default {
  name: "VSelect",
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
  border: 1px solid #eeeeee;
  padding: 5px 10px;
  background: transparent;
  option {
    padding: 5px;
  }
}
</style>
