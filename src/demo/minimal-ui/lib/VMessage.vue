<template>
  <div id="message" v-if="!dismiss">
    <span class="dismiss" @click="dismiss = true">X</span>
    <div id="content">{{ content }}</div>
  </div>
</template>
<script>
export default {
  name: "VMessage",
  props: {
    content: String
  },
  data() {
    return {
      dismiss: false
    };
  }
};
</script>
<style lang="scss" scoped>
#message {
  background: #ffffff;
  border: 1px solid #eeeeee;
  margin: 0 10px;
  padding: 10px;
  #content {
    margin-right: 20px;
  }
}
.dismiss {
  position: absolute;
  right: 30px;
  cursor: pointer;
}
</style>
