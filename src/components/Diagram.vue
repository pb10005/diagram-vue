<template>
  <div>
    <div class="scrollX">
      <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0"
          y="0"
          width="2000"
          height="1000"
          fill="white"
          @click="reset"
        />
        <Link
          :link="item"
          v-for="item in linkList"
          :selected="item.id === selectedLink"
          :key="item.id"
          :color="linkColor"
          :source="findNode(item.source)"
          :destination="findNode(item.destination)"
          :editable="editable"
          @select="selectLink"
          @updateLocation="updateLinkLocation"
          @remove="removeLink"
        />
        <Node
          :node="item"
          :selected="item.id === selectedNode"
          v-for="item in nodeList"
          :key="item.id"
          :createLinkMode="createLinkMode"
          :editable="editable"
          @editNode="editNode"
          @select="selectNode"
          @updateLocation="updateNodeLocation"
          @toggleSelect="toggleSrcSelect"
          @commitDest="commitDest"
          @remove="removeNode"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import Node from "@/components/Node";
import Link from "@/components/Link";
import VInput from "@/components/VInput";
export default {
  props: {
    width: Number,
    height: Number,
    nodes: Array,
    links: Array,
    editable: Boolean,
    linkColor: String
  },
  components: {
    Node,
    Link,
    VInput
  },
  computed: {
    nodeList: {
      get() {
        return this.nodes;
      },
      set(val) {
        this.$emit("nodeChanged", {
          nodes: val
        });
      }
    },
    linkList: {
      get() {
        return this.links;
      },
      set(val) {
        this.$emit("linkChanged", {
          links: val
        });
      }
    }
  },
  data() {
    return {
      name: "",
      url: "",
      color: "",
      selectedNode: -1,
      selectedLink: -1,
      createLinkMode: false
    };
  },
  methods: {
    generateID() {
      return (
        new Date().getTime().toString(16) +
        Math.floor(Math.random() * 1000000).toString(16)
      );
    },
    editNode(item) {
      this.$emit("editNode", item);
    },
    addNode() {
      if (!this.editable) return;
      this.nodeList.push({
        id: this.generateID(),
        content: {
          text: this.name,
          color: this.color,
          url: this.url
        },
        width: 200,
        height: 60,
        point: {
          x: 10,
          y: 100 + Math.random() * 100
        }
      });
    },
    reset(item) {
      if (!this.createLinkMode) {
        this.selectedNode = -1;
        this.selectedLink = -1;
      }
    },
    updateLinkLocation(obj) {
      let item = this.linkList.find(x => x.id === obj.id);
      item.point.x = obj.x;
      item.point.y = obj.y;
    },
    findNode(id) {
      return this.nodes.find(x => x.id === id);
    },
    removeLink(id) {
      this.linkList = this.linkList.filter(x => x.id !== id);
    },
    updateNodeLocation(obj) {
      let item = this.nodeList.find(x => x.id === obj.id);
      item.point.x = obj.x;
      item.point.y = obj.y;
    },
    selectNode(id) {
      this.selectedNode = id;
    },
    selectLink(id) {
      this.selectedLink = id;
    },
    toggleSrcSelect() {
      this.createLinkMode = !this.createLinkMode;
    },
    commitDest(id) {
      let src = this.nodeList.find(x => x.id === this.selectedNode);
      let dest = this.nodeList.find(x => x.id === id);
      this.linkList.push({
        id: this.generateID(),
        source: this.selectedNode,
        destination: id,
        point: {
          x: (src.point.x + dest.point.x) * 0.5,
          y: (src.point.y + dest.point.y) * 0.5
        }
      });
      this.createLinkMode = false;
      this.selectedNode = -1;
    },
    removeNode(id) {
      const nodes = this.nodeList.filter(x => x.id !== id);
      this.nodeList = nodes;
      const links = this.linkList.filter(x => {
        return x.source !== id && x.destination !== id;
      });
      this.linkList = links;
    }
  }
};
</script>
<style>
.button {
  cursor: pointer;
}
.grab {
  cursor: grab;
}
</style>
