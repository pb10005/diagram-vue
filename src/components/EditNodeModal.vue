<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="form" v-if="isActive">
        <VInput v-model="newData.text" placeholder="name" /><br />
        <VInput v-model="newData.url" placeholder="url" /><br />
        <VInput v-model="newData.color" placeholder="color" /><br />
        <VSelect v-model="newShape">
          <option value="rectangle" selected>Rectangle</option>
          <option value="ellipse">Ellipse</option> </VSelect
        ><br />
        <VButton @click="ok">OK</VButton>
        <VButton class="danger" @click="cancel">Cancel</VButton>
      </div>
    </transition>
  </VModal>
</template>
<script>
import VModal from "./VModal";
import VInput from "./VInput";
import VButton from "./VButton";
import VSelect from "./VSelect";
export default {
  components: {
    VModal,
    VInput,
    VButton,
    VSelect
  },
  props: {
    isActive: Boolean,
    node: {
      type: Object,
      default() {
        return {
          id: "",
          shape: "rectangle",
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
      newShape: this.node.shape,
      newData: this.node.content
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        id: this.node.id,
        shape: this.newShape,
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
input {
  width: 95%;
  margin-bottom: 5px;
}
select {
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
