<template>
  <g>
    <path
      v-if="!link.pattern"
      :d="
        `M${calcSource().x} ${calcSource().y} 
        Q ${point.x} ${point.y}
        ${calcDestination().x} ${calcDestination().y}`
      "
      :stroke="link.color || '#ffeaa7'"
      stroke-width="3"
      fill="none"
      :marker-end="link.hasArrow ? 'url(#m_atr)' : ''"
    />
    <path
      v-if="link.pattern === 'solid'"
      :d="
        `M${calcSource().x} ${calcSource().y} 
        Q ${point.x} ${point.y}
        ${calcDestination().x} ${calcDestination().y}`
      "
      :stroke="link.color || '#ffeaa7'"
      stroke-width="3"
      fill="none"
      :marker-end="link.hasArrow ? 'url(#m_atr)' : ''"
    />
    <path
      v-if="link.pattern === 'dash'"
      :d="
        `M${calcSource().x} ${calcSource().y} 
        Q ${point.x} ${point.y}
        ${calcDestination().x} ${calcDestination().y}`
      "
      :stroke="link.color || '#ffeaa7'"
      stroke-width="3"
      stroke-dasharray="10"
      fill="none"
      :marker-end="link.hasArrow ? 'url(#m_atr)' : ''"
    />
    <path
      v-if="link.pattern === 'dot'"
      :d="
        `M${calcSource().x} ${calcSource().y} 
        Q ${point.x} ${point.y}
        ${calcDestination().x} ${calcDestination().y}`
      "
      :stroke="link.color || '#ffeaa7'"
      stroke-width="3"
      fill="none"
      stroke-dasharray="2"
      :marker-end="link.hasArrow ? 'url(#m_atr)' : ''"
    />
    <g v-if="editable">
      <line
        :x1="calcSource().x"
        :y1="calcSource().y"
        :x2="point.x"
        :y2="point.y"
        stroke="lightgray"
      />
      <line
        :x1="point.x"
        :y1="point.y"
        :x2="calcDestination().x"
        :y2="calcDestination().y"
        stroke="lightgray"
      />
      <ellipse
        :id="id"
        :cx="point.x"
        :cy="point.y"
        rx="10"
        ry="10"
        fill="#ff7675"
        stroke-width="2"
        class="grab"
        @click="select"
        @mousedown="mousedown"
        @touchstart="mousedown"
        @mousemove="mousemove"
        @touchmove="mousemove"
        @mouseup="mouseup"
        @touchend="mouseup"
      />
    </g>
    <g>
      <text
        :x="point.x - 15"
        :y="point.y - 20"
        fill="#00b894"
        @click="edit"
        v-if="selected"
        class="button"
      >
        {{ labels.edit || "Edit" }}
      </text>
      <text
        :x="point.x - 15"
        :y="point.y + 30"
        fill="#ff7675"
        @click="remove"
        v-if="selected"
        class="button"
      >
        {{ labels.remove || "Remove" }}
      </text>
    </g>
  </g>
</template>
<script>
import mouseLocation from "../mouseLocation";
export default {
  mixins: [mouseLocation],
  props: {
    selected: Boolean,
    editable: Boolean,
    source: {
      id: Number,
      x: Number,
      y: Number
    },
    destination: {
      id: Number,
      x: Number,
      y: Number
    },
    link: {
      id: String,
      color: String,
      pattern: {
        type: String,
        default: "solid"
      },
      point: {
        x: Number,
        y: Number
      }
    },
    labels: Object,
    scale: String
  },
  computed: {},
  data() {
    return {
      startPosition: null,
      cursorOffset: {
        x: 0,
        y: 0
      },
      id: this.link.id,
      point: this.link.point
    };
  },
  methods: {
    mousedown(e) {
      const [x, y] = this.getLocation(e);
      this.cursorOffset.x = x;
      this.cursorOffset.y = y;
      this.startPosition = { x: this.point.x, y: this.point.y };
      document.addEventListener("mousemove", this.mousemove);
      document.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      if (this.startPosition) {
        e.preventDefault();
        const [x, y] = this.getLocation(e);
        this.point.x =
          this.startPosition.x +
          (x - this.cursorOffset.x) / parseFloat(this.scale);
        this.point.y =
          this.startPosition.y +
          (y - this.cursorOffset.y) / parseFloat(this.scale);
        this.$emit("updateLocation", {
          id: this.id,
          x: this.point.x,
          y: this.point.y
        });
      }
    },
    mouseup() {
      this.startPosition = null;
      document.removeEventListener("mousemove", this.mousemove);
      document.removeEventListener("mouseup", this.mouseup);
    },
    remove() {
      this.$emit("remove", this.id);
    },
    select() {
      this.$emit("select", this.id);
    },
    edit() {
      this.$emit("editLink", {
        id: this.link.id,
        content: {
          color: this.link.color
        }
      });
    },
    calcSource() {
      let dx = this.point.x - this.source.point.x - this.source.width / 2;
      let dy = this.point.y - this.source.point.y - this.source.height / 2;
      if (dx === 0) {
        dx = 0.01;
      }
      if (Math.abs(dy / dx) <= 1) {
        if (dx >= 0) {
          return {
            x: this.source.point.x + this.source.width,
            y: this.source.point.y + this.source.height / 2
          };
        } else {
          return {
            x: this.source.point.x,
            y: this.source.point.y + this.source.height / 2
          };
        }
      } else {
        if (dy >= 0) {
          return {
            x: this.source.point.x + this.source.width / 2,
            y: this.source.point.y + this.source.height
          };
        } else {
          return {
            x: this.source.point.x + this.source.width / 2,
            y: this.source.point.y
          };
        }
      }
    },
    calcDestination() {
      let dx =
        this.point.x - this.destination.point.x - this.destination.width / 2;
      let dy =
        this.point.y - this.destination.point.y - this.destination.height / 2;
      if (dx === 0) {
        dx = 0.01;
      }
      if (Math.abs(dy / dx) <= 1) {
        if (dx >= 0) {
          return {
            x: this.destination.point.x + this.destination.width,
            y: this.destination.point.y + this.destination.height / 2
          };
        } else {
          return {
            x: this.destination.point.x,
            y: this.destination.point.y + this.destination.height / 2
          };
        }
      } else {
        if (dy >= 0) {
          return {
            x: this.destination.point.x + this.destination.width / 2,
            y: this.destination.point.y + this.destination.height
          };
        } else {
          return {
            x: this.destination.point.x + this.destination.width / 2,
            y: this.destination.point.y
          };
        }
      }
    }
  }
};
</script>
<style scoped></style>
