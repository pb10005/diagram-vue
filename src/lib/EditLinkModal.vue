<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="form" v-if="isActive">
        <VInput v-model="content.color" placeholder="color" /><br />
        <VSelect v-model="content.pattern" :placeholder="content.pattern">
          <option value="solid" selected>Solid</option>
          <option value="dash">Dash</option>
          <option value="dot">Dot</option> </VSelect
        ><br />
        <input v-model="content.hasArrow" type="checkbox" id="has-arrow" />
        <label for="has-arrow">Has arrow</label><br />
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
            color: "#ecf0f1",
            pattern: "solid",
            hasArrow: false
          }
        };
      }
    }
  },
  data() {
    return {
      content: this.link.content,
      pattern: this.link.pattern || "solid",
      hasArrow: this.link.hasArrow
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        id: this.link.id,
        content: {
          color: this.content.color,
          pattern: this.content.pattern,
          hasArrow: this.content.hasArrow
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
select {
  margin-bottom: 5px;
}
</style>
