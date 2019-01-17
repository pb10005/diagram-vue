<template>
  <div>
    <div
      class="modal"
      :class="{ 'is-open': isActive }"
      @click="clickModal"
    ></div>
    <div class="item" :class="{ 'is-open': isActive }"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "VModal",
  props: {
    isActive: Boolean
  },
  methods: {
    clickModal() {
      this.$emit("clickModal");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  z-index: -9999;
  &.is-open {
    background: gray;
    visibility: visible;
    opacity: 0.8;
    z-index: 9998;
  }
}
.item {
  width: 70vw;
  padding: 10px;
  position: fixed;
  background: white;
  visibility: hidden;
  opacity: 1;
  z-index: -9999;
  top: 25vh;
  left: 15vw;
  &.is-open {
    z-index: 9999;
    visibility: visible;
  }
}
@media screen and (max-width: 900px) {
  .item {
    width: 100vw;
    padding: 10px;
    position: fixed;
    background: white;
    visibility: hidden;
    opacity: 1;
    z-index: -9999;
    left: 0;
    top: 10px;
    &.is-open {
      z-index: 9999;
      visibility: visible;
    }
  }
}
</style>
