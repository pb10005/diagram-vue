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
        fill="red"
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
        fill="red"
        @click="commitDest"
      >
        {{ labels.select || "Select" }}
      </text>
    </g>
    <svg :x="x" :y="y" :width="width" :height="height">
      <ellipse
        class="grab"
        cx="50%"
        cy="50%"
        width="100%"
        height="100%"
        :rx="width / 2"
        :ry="height / 2"
        :fill="content.color || '#ecf0f1'"
        @mousedown="mousedown"
        @mousemove="mousemove"
        @mouseup="mouseup"
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
export default {
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
      }
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
    mousedown(e) {
      if (!this.editable) return;
      this.$emit("select", this.id);

      this.cursorOffset.x = e.pageX;
      this.cursorOffset.y = e.pageY;
      this.startPosition = { x: this.x, y: this.y };
      //イベントを登録
      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      if (this.startPosition) {
        this.x = this.startPosition.x + (e.pageX - this.cursorOffset.x);
        this.y = this.startPosition.y + (e.pageY - this.cursorOffset.y);
        this.$emit("updateLocation", {
          id: this.id,
          x: this.x,
          y: this.y
        });
      }
    },
    mouseup() {
      this.startPosition = null;
      //イベントの後始末
      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseup", this.mouseup);
    },
    toggleSelect() {
      this.$emit("toggleSelect");
    },
    commitDest() {
      this.$emit("commitDest", this.id);
    },
    remove() {
      this.$emit("remove", this.id);
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
