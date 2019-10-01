<template>
  <span>
    <input class="ckbox" id="checkbox" type="checkbox" v-model="val" @change="onChange"/>
    <label for="checkbox"><slot/></label>
  </span>
</template>

<script>
export default {
  name: "VCkbox",
  props: {
    value: Boolean
  },
  data() {
    return {
      val: this.value
    };
  },
  methods: {
    onChange() {
      this.$emit("input", this.val);
      this.$emit("changed", this.val);
    }
  }
}
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
</style>