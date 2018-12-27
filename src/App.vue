<template>
  <div id="app">
    <VButton v-if="!editable" @click="editable = true" class="button"
      >編集を開始</VButton
    >
    <span v-else>
      <VButton @click="openModal">追加</VButton>
      <VButton @click="endEdit" class="button">編集を終了</VButton>
    </span>
    <VButton @click="openInputModal" class="button"
      >インポート/エクスポート</VButton
    >
    <EditNodeModal
      :node="{ content: {} }"
      :isActive="isModalActive"
      @ok="addNode"
      @cancel="cancel"
    />
    <EditNodeModal
      :node="tmpNode"
      :isActive="isEditModalActive"
      @ok="editNode"
      @cancel="cancel"
    />
    <InputModal
      :text="json"
      :isActive="isInputModalActive"
      @ok="importData"
      @cancel="cancel"
    />
    <Diagram
      :width="2000"
      :height="1000"
      :nodes="nodes"
      :links="links"
      linkColor="#ffeaa7"
      :editable="editable"
      :labels="{
        edit: '編集',
        remove: '削除',
        link: 'リンク',
        select: '選択'
      }"
      @editNode="openEdit"
      @nodeChanged="nodeChanged"
      @linkChanged="linkChanged"
    >
    </Diagram>
  </div>
</template>

<script>
import data from "./data";
import Diagram from "./Diagram";
import EditNodeModal from "@/components/EditNodeModal";
import InputModal from "@/components/InputModal";
import VButton from "@/components/VButton";
export default {
  name: "app",
  components: {
    Diagram,
    EditNodeModal,
    InputModal,
    VButton
  },
  data() {
    return {
      name: "",
      url: "",
      color: "",
      json: "",
      nodes: [],
      links: [],
      isModalActive: false,
      isEditModalActive: false,
      isInputModalActive: false,
      editable: false,
      tmpNode: {
        id: "",
        content: {
          text: "",
          url: "",
          color: ""
        }
      }
    };
  },
  mounted() {
    this.nodes = data.nodes;
    this.links = data.links;
  },
  methods: {
    generateID() {
      return (
        new Date().getTime().toString(16) +
        Math.floor(Math.random() * 1000000).toString(16)
      );
    },
    openModal() {
      this.isModalActive = true;
    },
    cancel() {
      this.isModalActive = false;
      this.isEditModalActive = false;
      this.isInputModalActive = false;
    },
    addNode(item) {
      this.nodes.push({
        id: this.generateID(),
        content: {
          text: item.content.text,
          url: item.content.url,
          color: item.content.color
        },
        width: 150,
        height: 60,
        point: {
          x: 10,
          y: 100 + Math.random() * 100
        }
      });
      this.isModalActive = false;
    },
    openEdit(item) {
      this.tmpNode.id = item.id;
      this.tmpNode.content.text = item.content.text;
      this.tmpNode.content.url = item.content.url;
      this.tmpNode.content.color = item.content.color;
      this.isModalActive = false;
      this.isEditModalActive = true;
    },
    editNode(item) {
      let tmp = this.nodes.find(x => x.id === item.id);
      tmp.content.text = item.content.text;
      tmp.content.url = item.content.url;
      tmp.content.color = item.content.color;
      this.isEditModalActive = false;
    },
    endEdit() {
      this.editable = false;
    },
    nodeChanged(obj) {
      this.nodes = obj.nodes;
    },
    linkChanged(obj) {
      this.links = obj.links;
    },
    openInputModal() {
      this.isInputModalActive = true;
      this.json = JSON.stringify({
        nodes: this.nodes,
        links: this.links
      });
    },
    importData(value) {
      const obj = JSON.parse(value.text);
      if (obj) {
        this.nodes = obj.nodes;
        this.links = obj.links;
        this.isInputModalActive = false;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }
}
</style>
