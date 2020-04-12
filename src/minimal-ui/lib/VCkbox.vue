<template>
  <span>
    <input
      class="ckbox"
      :id="idCheckbox"
      type="checkbox"
      v-model="val"
      @change="onChange"
    />
    <label :for="idCheckbox"><slot /></label>
  </span>
</template>

<script>
export default {
  name: "VCkbox",
  props: {
    value: Boolean
  },
  computed: {
    idCheckbox() {
      return Math.floor(Math.random() * 1000000).toString(16);
    },
    val: {
      get() {
        return this.value;
      },
      set(content) {
        this.$emit("input", content);
        this.$emit("changed", content);
      }
    }
  },
  methods: {
    onChange() {
      if (this.value !== this.val) {
        this.$emit("input", this.val);
        this.$emit("changed", this.val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ckbox {
  background: #ffffff;
  cursor: pointer;
  border: 1px solid #eeeeee;
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  padding: 5px;
}
.ckbox:hover {
  background: #eeeeee;
  opacity: 0.8;
}
label {
  font-size: 14px;
}
</style>
