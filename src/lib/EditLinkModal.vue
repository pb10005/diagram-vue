<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="form" v-if="isActive">
        <VInput v-model="content.color" placeholder="color" /><br />
        <VButton @click="ok">OK</VButton>
        <VButton class="danger" @click="cancel">Cancel</VButton>
      </div>
    </transition>
  </VModal>
</template>
<script>
export default {
  props: {
    isActive: Boolean,
    link: {
      type: Object,
      default() {
        return {
          id: "0",
          content: {
            color: "#ecf0f1"
          }
        };
      }
    }
  },
  data() {
    return {
      content: this.link.content
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        id: this.link.id,
        content: {
          color: this.content.color
        }
      });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  width: 95%;
  margin-bottom: 5px;
}
.item-enter-active {
  transition: all 0.8s ease;
}
.item-leave-active {
  transition: all 0.3s ease;
}
.item-enter,
.item-leave-to {
  opacity: 0;
}
</style>
