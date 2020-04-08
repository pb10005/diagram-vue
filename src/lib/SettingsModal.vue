<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <h2>Settings</h2>
    <label>Size</label><br>
    <VSelect v-model="newSettings.scale">
      <option value="0.5">Small</option>
      <option value="1" selected>Medium</option>
      <option value="2">Large</option> </VSelect
    ><br />
    <VCkbox v-model="newSettings.isFluid"> Toggle fluid </VCkbox><br />
    <VCkbox v-model="newSettings.showGrid">
      Show grid
    </VCkbox><br>
    <VButton @click="ok">OK</VButton>
    <VButton class="danger" @click="cancel">Cancel</VButton>
  </VModal>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    settings: {
      scale: "1",
      isFluid: false,
      showGrid: false
    }
  },
  data() {
      return {
          newSettings: {}
      }
  },
  computed: {
      value: {
          get() {
            return this.settings;
          },
          set(val) {
              this.newSettings = val;
          }
      }
  },
  methods: {
    changeGrid() {
      this.$emit("changeGrid");
    },
    ok() {
        this.$emit("ok", this.newSettings);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
