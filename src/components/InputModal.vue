<template>
  <VModal :isActive="isActive">
    <div>
      <textarea v-model="tmp" required placeholder="JSON"></textarea><br />
      <VButton @click="ok">OK</VButton>
      <VButton class="danger" @click="cancel">Cancel</VButton>
    </div>
  </VModal>
</template>
<script>
import VModal from "@/components/VModal";
import VButton from "@/components/VButton";
export default {
  components: {
    VModal,
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
