<template>
  <svg>
    <g v-if="selected">
      <text
        :x="x + 5"
        :y="y + height + 22"
        class="button"
        fill="#00b894"
        @click="editCandidate"
      >
        {{ labels.edit || "Edit" }}
      </text>
    </g>
    <g v-if="selected">
      <text
        :x="x + 5"
        :y="y - 10"
        class="button"
        fill="#00b894"
        stroke="none"
        @click="toggleSelect"
      >
        {{ labels.link || "Link" }}
      </text>
      <text
        :x="x + 65"
        :y="y + height + 22"
        class="button"
        fill="#ff7675"
        @click="remove"
      >
        {{ labels.remove || "Remove" }}
      </text>
    </g>
    <g v-if="createLinkMode && !selected">
      <text
        :x="x + 5"
        :y="y - 10"
        class="button"
        fill="#ff7675"
        @click="commitDest"
      >
        {{ labels.select || "Select" }}
      </text>
    </g>
    <svg :x="x" :y="y" :width="width" :height="height" class="shadow">
      <ellipse
        v-if="node.type==='ellipse'"
        class="grab"
        cx="50%"
        cy="50%"
        width="100%"
        height="100%"
        :rx="width / 2"
        :ry="height / 2"
        :fill="content.color || '#ecf0f1'"
        @touchstart="mousedown"
        @mousedown="mousedown"
        @mousemove="mousemove"
        @touchmove="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
      <rect
        v-else
        class="grab"
        x=0
        y=0
        width="100%"
        height="100%"
        rx=5
        ry=3
        :fill="content.color || '#ecf0f1'"
        @touchstart="mousedown"
        @mousedown="mousedown"
        @mousemove="mousemove"
        @touchmove="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
       />
      <a target="_blank" :href="content.url">
        <text
          x="50%"
          y="50%"
          fill="#34495e"
          font-family="Meiryo UI, sans-serif"
          font-size="20"
          text-anchor="middle"
        >
          {{ content.text }}
        </text>
      </a>
    </svg>
  </svg>
</template>
<script>
import mouseLocation from "../mouseLocation";
export default {
  mixins: [mouseLocation],
  props: {
    node: {
      width: Number,
      height: Number,
      id: String,
      point: {
        type: Object,
        default: {
          x: 0,
          y: 0
        }
      },
      content: {
        text: String,
        url: String,
        color: String
      },
      type: String
    },
    editable: Boolean,
    createLinkMode: Boolean,
    selected: Boolean,
    labels: Object
  },
  data() {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      id: this.node.id,
      x: this.node.point.x,
      y: this.node.point.y,
      width: this.node.width,
      height: this.node.height,
      content: this.node.content
    };
  },
  methods: {
    toggleSelect() {
      this.$emit("toggleSelect");
    },
    commitDest() {
      this.$emit("commitDest", this.id);
    },
    remove() {
      this.$emit("remove", this.id);
    },
    mousedown(e) {
      if (!this.editable) return;
      this.$emit("select", this.id);
      const [x, y] = this.getLocation(e);
      this.cursorOffset.x = x;
      this.cursorOffset.y = y;
      this.startPosition = { x: this.x, y: this.y };

      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      if (this.startPosition) {
        e.preventDefault();
        const [x, y] = this.getLocation(e);
        this.x = this.startPosition.x + (x - this.cursorOffset.x);
        this.y = this.startPosition.y + (y - this.cursorOffset.y);
        this.$emit("updateLocation", {
          id: this.id,
          x: this.x,
          y: this.y
        });
      }
    },
    mouseup() {
      this.startPosition = null;

      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseup", this.mouseup);
    },
    editCandidate() {
      this.$emit("editNode", {
        id: this.id,
        content: this.content
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.shadow {
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
}
.button {
  cursor: pointer;
}
</style>
