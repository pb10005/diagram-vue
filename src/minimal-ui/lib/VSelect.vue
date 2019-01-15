<template>
  <select v-model="val" :multiple="multiple" @change="onChange">
    <option id="placeholder" :value="null" selected disabled hidden>
      {{ placeholder }}
    </option>
    <slot></slot>
  </select>
</template>
<script>
export default {
  name: "VSelect",
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
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
