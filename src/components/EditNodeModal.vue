<template>
  <Modal :isActive="isActive">
    <transition name="item">
      <div class="form" v-if="isActive">
        <VInput v-model="newData.text" placeholder="name" /><br />
        <VInput v-model="newData.url" placeholder="url" /><br />
        <VInput v-model="newData.color" placeholder="color" /><br />
        <VButton @click="ok">OK</VButton>
        <VButton class="danger" @click="cancel">Cancel</VButton>
      </div>
    </transition>
  </Modal>
</template>
<script>
import Modal from "@/components/Modal";
import VInput from "@/components/VInput";
import VButton from "@/components/VButton";
export default {
  components: {
    Modal,
    VInput,
    VButton
  },
  props: {
    isActive: Boolean,
    node: {
      type: Object,
      default() {
        return {
          id: "",
          content: {
            text: "none",
            url: "",
            color: "#ecf0f1"
          }
        };
      }
    }
  },
  data() {
    return {
      newData: this.node.content
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        id: this.node.id,
        content: this.newData
      });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
<style lang="scss" scoped>
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
