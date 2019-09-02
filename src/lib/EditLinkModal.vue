<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <transition name="item">
      <div class="form" v-if="isActive">
        <label>Color</label>
        <VInput v-model="content.color" placeholder="color" /><br />
        <label>Pattern</label>
        <VSelect v-model="content.pattern" :placeholder="content.pattern">
          <option value="solid" selected>Solid</option>
          <option value="dash">Dash</option>
          <option value="dot">Dot</option> </VSelect
        ><br />
        <label>Arrow</label>
        <VSelect v-model="content.arrow">
          <option value="none">none</option>
          <option value="src">One side(source)</option>
          <option value="dest">One side(destination)</option>
          <option value="both">Both side</option> </VSelect
        ><br />
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
      arrow: this.link.arrow
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        id: this.link.id,
        content: {
          color: this.content.color,
          pattern: this.content.pattern,
          arrow: this.content.arrow
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
