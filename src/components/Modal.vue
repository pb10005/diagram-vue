<template>
  <div>
    <div class="modal" :class="{ 'is-open': isActive }"></div>
    <div class="item" :class="{'is-open': isActive }"><slot></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    isActive: Boolean
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
  padding: 10px;
  position: fixed;
  background: white;
  visibility: hidden;
  opacity: 1;
  z-index: 101;
  top: calc(50% - 50px / 2);
  left: calc(50% - 50px / 2);
  &.is-open {
    visibility: visible;
  }
}
</style>
