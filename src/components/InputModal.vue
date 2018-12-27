<template>
  <Modal :isActive="isActive">
    <div>
      <textarea v-model="tmp" required placeholder="JSON"></textarea><br />
      <VButton @click="ok">OK</VButton>
      <VButton class="danger" @click="cancel">Cancel</VButton>
    </div>
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
    text: String
  },
  watch: {
    text(val) {
      this.tmp = val;
    }
  },
  data() {
    return {
      tmp: ""
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        text: this.tmp
      });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
