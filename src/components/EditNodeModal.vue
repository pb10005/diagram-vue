<template>
  <div>
    <div class="modal" :class="{ 'is-open': isActive }"></div>
    <div class="form" v-if="isActive">
      <VInput v-model="newData.text" placeholder="name" /><br />
      <VInput v-model="newData.url" placeholder="url" /><br />
      <VInput v-model="newData.color" placeholder="color" /><br />
      <VButton @click="ok">OK</VButton>
      <VButton @click="cancel">Cancel</VButton>
    </div>
  </div>
</template>
<script>
import VInput from "@/components/VInput";
import VButton from "@/components/VButton";
export default {
  components: {
    VInput,
    VButton
  },
  props: {
    isActive: Boolean,
    node: {
      type: Object,
      default: {
        id: "",
        content: {
          text: "none",
          url: "",
          color: "#dfe6e9"
        }
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
.form {
  padding: 10px;
  position: fixed;
  background: white;
  opacity: 1;
  z-index: 101;
  top: calc(50% - 50px / 2);
  left: calc(50% - 50px / 2);
}
</style>
