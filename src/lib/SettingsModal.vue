<template>
  <VModal :isActive="isActive" @clickModal="cancel">
    <h2>Settings</h2>
    <h3>Field Size</h3>
    <label>Width</label>
    <VInput type="number" v-model="newSettings.width" />
    <label>Height</label>
    <VInput type="number" v-model="newSettings.height" /><br />
    <h3>Scale</h3>
    <VSelect v-model="newSettings.scale">
      <option value="0.5">Small</option>
      <option value="1" selected>Medium</option>
      <option value="2">Large</option>
    </VSelect>
    <h3>Fluid</h3>
    <VCkbox v-model="newSettings.isFluid"> Toggle fluid </VCkbox>
    <h3>Background</h3>
    <VCkbox v-model="newSettings.showGrid"> Show grid </VCkbox><br /><br />
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
      type: Object,
      default() {
        return {
          width: 1500,
          height: 1000,
          scale: "1",
          isFluid: false,
          showGrid: false
        };
      }
    }
  },
  watch: {
    isActive(val) {
      if (val) {
        this.newSettings = Object.assign({}, this.settings);
      }
    }
  },
  data() {
    return {
      newSettings: {
        width: 0,
        height: 0,
        showGrid: false
      }
    };
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
