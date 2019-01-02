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
  z-index: -1;
  &.is-open {
    background: gray;
    visibility: visible;
    opacity: 0.8;
    z-index: 100;
  }
}
.item {
  width: 70vw;
  padding: 10px;
  position: fixed;
  background: white;
  visibility: hidden;
  opacity: 1;
  z-index: 101;
  top: 25vh;
  left: 15vw;
  &.is-open {
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
    z-index: 101;
    left: 0;
    top: 10px;
    &.is-open {
      visibility: visible;
    }
  }
}
</style>
