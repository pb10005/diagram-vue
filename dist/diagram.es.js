import { defineComponent as U, ref as $, computed as q, watch as G, onBeforeUnmount as ne, openBlock as k, createElementBlock as b, createElementVNode as o, toDisplayString as O, createCommentVNode as T, createStaticVNode as fe, Fragment as _, renderList as ee, createBlock as F, resolveComponent as B, withCtx as y, createVNode as v, createTextVNode as L, withDirectives as he, vModelText as me, renderSlot as H, reactive as Y, nextTick as ke, normalizeClass as ge, Transition as pe, withModifiers as ye } from "vue";
function le() {
  function e(f) {
    return f.touches ? [f.touches[0].pageX, f.touches[0].pageY] : [f.pageX, f.pageY];
  }
  return { getLocation: e };
}
const be = ["opacity"], xe = { key: 0 }, we = ["x", "y"], Ve = ["x", "y"], $e = ["x", "y", "fill"], Ce = ["x", "y"], Se = ["x", "y"], Me = ["x", "y"], Le = ["x", "y"], We = ["x", "y"], Ne = { key: 1 }, Ae = ["x", "y"], Ie = ["x", "y"], Be = ["cx", "cy", "rx", "ry", "fill", "stroke", "stroke-width"], Oe = ["points", "fill", "stroke", "stroke-width"], Ue = ["x", "y", "width", "height", "rx", "ry", "fill", "stroke", "stroke-width"], Ee = ["href"], De = ["x", "y", "fill", "font-size", "font-weight"], ze = ["x", "y", "fill", "font-size", "font-weight"], Te = /* @__PURE__ */ U({
  __name: "Node",
  props: {
    node: { type: Object, required: !0 },
    editable: Boolean,
    createLinkMode: Boolean,
    selected: Boolean,
    labels: Object,
    scale: String,
    rWidth: Number,
    rHeight: Number
  },
  emits: [
    "toggleSelect",
    "commitDest",
    "remove",
    "copy",
    "click",
    "select",
    "updateLocation",
    "editNode"
  ],
  setup(e, { expose: f, emit: d }) {
    const a = e, s = d, { getLocation: i } = le(), g = $(null), r = $({ x: 0, y: 0 }), t = $(a.node.point.x), n = $(a.node.point.y), p = q(() => {
      var V;
      const w = (V = a.node.content) == null ? void 0 : V.url;
      return w && /^https?:\/\//i.test(w) ? w : "";
    }), C = q(() => {
      const w = t.value + a.node.width / 2, V = n.value + a.node.height / 2, R = a.node.width / 2, j = a.node.height / 2;
      return `${w},${V - j} ${w + R},${V} ${w},${V + j} ${w - R},${V}`;
    });
    G(() => a.node, (w) => {
      t.value = w.point.x, n.value = w.point.y;
    });
    function S() {
      s("toggleSelect");
    }
    function x() {
      s("commitDest", a.node.id);
    }
    function c() {
      s("remove", a.node.id);
    }
    function A() {
      s("copy", a.node);
    }
    function W(w) {
      if (s("click", a.node.id), !a.editable) return;
      s("select", a.node.id);
      const [V, R] = i(w);
      r.value = { x: V, y: R }, g.value = { x: t.value, y: n.value }, document.addEventListener("mousemove", M), document.addEventListener("mouseup", m);
    }
    function M(w) {
      if (!g.value) return;
      w.preventDefault();
      const [V, R] = i(w);
      t.value = g.value.x + (V - r.value.x) / a.rWidth / parseFloat(a.scale), n.value = g.value.y + (R - r.value.y) / a.rHeight / parseFloat(a.scale), s("updateLocation", { id: a.node.id, x: t.value, y: n.value });
    }
    function m() {
      g.value = null, document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", m);
    }
    function E() {
      s("editNode", {
        id: a.node.id,
        shape: a.node.shape,
        width: a.node.width,
        height: a.node.height,
        rx: a.node.rx,
        ry: a.node.ry,
        opacity: a.node.opacity,
        content: { ...a.node.content },
        stroke: a.node.stroke,
        strokeWeight: a.node.strokeWeight
      });
    }
    return ne(() => {
      document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", m);
    }), f({ safeUrl: p }), (w, V) => (k(), b("g", {
      opacity: e.node.opacity ?? 1
    }, [
      e.editable && e.selected ? (k(), b("g", xe, [
        o("rect", {
          x: t.value + 2,
          y: n.value - 30,
          width: "48",
          height: "22",
          rx: "4",
          fill: "#3b82f6",
          class: "button",
          onClick: E
        }, null, 8, we),
        o("text", {
          x: t.value + 26,
          y: n.value - 15,
          class: "button btn-text",
          onClick: E
        }, O(e.labels.edit || "Edit"), 9, Ve),
        o("rect", {
          x: t.value + 2,
          y: n.value + e.node.height + 6,
          width: "56",
          height: "22",
          rx: "4",
          fill: e.createLinkMode ? "#9ca3af" : "#6366f1",
          class: "button",
          onClick: S
        }, null, 8, $e),
        o("text", {
          x: t.value + 30,
          y: n.value + e.node.height + 21,
          class: "button btn-text",
          onClick: S
        }, O(e.createLinkMode ? e.labels.cancel || "Cancel" : e.labels.link || "Link"), 9, Ce),
        o("rect", {
          x: t.value + 66,
          y: n.value - 30,
          width: "48",
          height: "22",
          rx: "4",
          fill: "#f59e0b",
          class: "button",
          onClick: A
        }, null, 8, Se),
        o("text", {
          x: t.value + 90,
          y: n.value - 15,
          class: "button btn-text",
          onClick: A
        }, O(e.labels.copy || "Copy"), 9, Me),
        o("rect", {
          x: t.value + 66,
          y: n.value + e.node.height + 6,
          width: "56",
          height: "22",
          rx: "4",
          fill: "#ef4444",
          class: "button",
          onClick: c
        }, null, 8, Le),
        o("text", {
          x: t.value + 94,
          y: n.value + e.node.height + 21,
          class: "button btn-text",
          onClick: c
        }, O(e.labels.remove || "Remove"), 9, We)
      ])) : T("", !0),
      e.editable && e.createLinkMode && !e.selected ? (k(), b("g", Ne, [
        o("rect", {
          x: t.value + 2,
          y: n.value - 30,
          width: "56",
          height: "22",
          rx: "4",
          fill: "#10b981",
          class: "button",
          onClick: x
        }, null, 8, Ae),
        o("text", {
          x: t.value + 30,
          y: n.value - 15,
          class: "button btn-text",
          onClick: x
        }, O(e.labels.select || "Select"), 9, Ie)
      ])) : T("", !0),
      e.node.shape === "ellipse" ? (k(), b("ellipse", {
        key: 2,
        class: "grab",
        cx: t.value + e.node.width / 2,
        cy: n.value + e.node.height / 2,
        rx: e.node.width / 2,
        ry: e.node.height / 2,
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: W,
        onMousedown: W,
        onMousemove: M,
        onTouchmove: M,
        onMouseup: m,
        onTouchend: m
      }, null, 40, Be)) : e.node.shape === "diamond" ? (k(), b("polygon", {
        key: 3,
        points: C.value,
        class: "grab",
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: W,
        onMousedown: W,
        onMousemove: M,
        onTouchmove: M,
        onMouseup: m,
        onTouchend: m
      }, null, 40, Oe)) : (k(), b("rect", {
        key: 4,
        class: "grab",
        x: t.value,
        y: n.value,
        width: e.node.width,
        height: e.node.height,
        rx: e.node.rx ?? 6,
        ry: e.node.ry ?? 6,
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: W,
        onMousedown: W,
        onMousemove: M,
        onTouchmove: M,
        onMouseup: m,
        onTouchend: m
      }, null, 40, Ue)),
      p.value ? (k(), b("a", {
        key: 5,
        href: p.value,
        target: "_blank"
      }, [
        o("text", {
          x: t.value + e.node.width / 2,
          y: n.value + e.node.height / 2 + (e.node.content.fontSize ?? 13) / 3,
          fill: e.node.content.fontColor || "#1e3a5f",
          "font-family": "system-ui, sans-serif",
          "font-size": e.node.content.fontSize ?? 13,
          "font-weight": e.node.content.fontWeight || "normal",
          "text-anchor": "middle",
          "text-decoration": "underline",
          style: { "pointer-events": "none" }
        }, O(e.node.content.text), 9, De)
      ], 8, Ee)) : (k(), b("text", {
        key: 6,
        x: t.value + e.node.width / 2,
        y: n.value + e.node.height / 2 + (e.node.content.fontSize ?? 13) / 3,
        fill: e.node.content.fontColor || "#1e3a5f",
        "font-family": "system-ui, sans-serif",
        "font-size": e.node.content.fontSize ?? 13,
        "font-weight": e.node.content.fontWeight || "normal",
        "text-anchor": "middle",
        style: { "pointer-events": "none" }
      }, O(e.node.content.text), 9, ze))
    ], 8, be));
  }
}), D = (e, f) => {
  const d = e.__vccOpts || e;
  for (const [a, s] of f)
    d[a] = s;
  return d;
}, Re = /* @__PURE__ */ D(Te, [["__scopeId", "data-v-a223d318"]]), Fe = ["opacity"], Ge = ["d", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], je = ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], He = ["id"], Je = ["fill"], Pe = ["x", "y", "fill"], Xe = { key: 3 }, Ye = ["x1", "y1", "x2", "y2"], qe = ["x1", "y1", "x2", "y2"], Ke = ["cx", "cy"], Qe = { key: 4 }, Ze = ["x", "y"], _e = ["x", "y"], et = ["x", "y"], tt = ["x", "y"], ot = /* @__PURE__ */ U({
  __name: "Link",
  props: {
    selected: Boolean,
    editable: Boolean,
    source: { type: Object, required: !0 },
    destination: { type: Object, required: !0 },
    link: { type: Object, required: !0 },
    labels: Object,
    scale: String,
    rWidth: Number,
    rHeight: Number
  },
  emits: ["click", "select", "updateLocation", "remove", "editLink"],
  setup(e, { emit: f }) {
    const d = e, a = f, { getLocation: s } = le(), i = $(null), g = $({ x: 0, y: 0 }), r = $(d.link.point);
    function t(m) {
      a("click", d.link.id);
      const [E, w] = s(m);
      g.value = { x: E, y: w }, i.value = { x: r.value.x, y: r.value.y }, document.addEventListener("mousemove", n), document.addEventListener("mouseup", p);
    }
    function n(m) {
      if (!i.value) return;
      m.preventDefault();
      const [E, w] = s(m);
      r.value = {
        x: i.value.x + (E - g.value.x) / d.rWidth / parseFloat(d.scale),
        y: i.value.y + (w - g.value.y) / d.rHeight / parseFloat(d.scale)
      }, a("updateLocation", { id: d.link.id, x: r.value.x, y: r.value.y });
    }
    function p() {
      i.value = null, document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", p);
    }
    function C(m) {
      return m === "dash" ? "10,5" : m === "dot" ? "3,3" : "0";
    }
    function S() {
      a("remove", d.link.id);
    }
    function x() {
      a("select", d.link.id);
    }
    function c() {
      a("editLink", {
        id: d.link.id,
        content: {
          color: d.link.color || "#6366f1",
          shape: d.link.shape || "straight",
          pattern: d.link.pattern || "solid",
          arrow: d.link.arrow || "none",
          strokeWidth: d.link.strokeWidth ?? 2,
          label: d.link.label || ""
        }
      });
    }
    function A(m, E) {
      let w = E.x - m.point.x - m.width / 2, V = E.y - m.point.y - m.height / 2;
      return w === 0 && (w = 0.01), Math.abs(V / w) <= 1 ? w >= 0 ? { x: m.point.x + m.width, y: m.point.y + m.height / 2 } : { x: m.point.x, y: m.point.y + m.height / 2 } : V >= 0 ? { x: m.point.x + m.width / 2, y: m.point.y + m.height } : { x: m.point.x + m.width / 2, y: m.point.y };
    }
    function W() {
      return A(d.source, r.value);
    }
    function M() {
      return A(d.destination, r.value);
    }
    return ne(() => {
      document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", p);
    }), (m, E) => (k(), b("g", {
      opacity: e.link.opacity ?? 1
    }, [
      e.link.shape === "bezier" ? (k(), b("path", {
        key: 0,
        d: `M${W().x} ${W().y} Q ${r.value.x} ${r.value.y} ${M().x} ${M().y}`,
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": C(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, Ge)) : (k(), b("line", {
        key: 1,
        x1: W().x,
        y1: W().y,
        x2: M().x,
        y2: M().y,
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": C(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, je)),
      o("defs", null, [
        o("marker", {
          id: `arrow-${e.link.id}`,
          markerUnits: "userSpaceOnUse",
          orient: "auto-start-reverse",
          markerWidth: "12",
          markerHeight: "12",
          viewBox: "0 0 10 10",
          refX: "5",
          refY: "5"
        }, [
          o("polygon", {
            points: "0,2 0,8 10,5",
            fill: e.link.color || "#6366f1"
          }, null, 8, Je)
        ], 8, He)
      ]),
      e.link.label ? (k(), b("text", {
        key: 2,
        x: r.value.x,
        y: r.value.y - 14,
        "text-anchor": "middle",
        "font-family": "system-ui, sans-serif",
        "font-size": "12",
        fill: e.link.color || "#6366f1",
        style: { "pointer-events": "none", "user-select": "none" }
      }, O(e.link.label), 9, Pe)) : T("", !0),
      e.editable ? (k(), b("g", Xe, [
        o("line", {
          x1: W().x,
          y1: W().y,
          x2: r.value.x,
          y2: r.value.y,
          stroke: "#e5e7eb",
          "stroke-dasharray": "4"
        }, null, 8, Ye),
        o("line", {
          x1: r.value.x,
          y1: r.value.y,
          x2: M().x,
          y2: M().y,
          stroke: "#e5e7eb",
          "stroke-dasharray": "4"
        }, null, 8, qe),
        o("circle", {
          cx: r.value.x,
          cy: r.value.y,
          r: "8",
          fill: "#6366f1",
          stroke: "#fff",
          "stroke-width": "2",
          class: "grab",
          onClick: x,
          onMousedown: t,
          onTouchstart: t,
          onMousemove: n,
          onTouchmove: n,
          onMouseup: p,
          onTouchend: p
        }, null, 40, Ke)
      ])) : T("", !0),
      e.selected ? (k(), b("g", Qe, [
        o("rect", {
          x: r.value.x - 20,
          y: r.value.y - 42,
          width: "40",
          height: "20",
          rx: "4",
          fill: "#3b82f6",
          class: "button",
          onClick: c
        }, null, 8, Ze),
        o("text", {
          x: r.value.x,
          y: r.value.y - 28,
          "text-anchor": "middle",
          class: "button btn-text",
          onClick: c
        }, O(e.labels.edit || "Edit"), 9, _e),
        o("rect", {
          x: r.value.x - 24,
          y: r.value.y + 14,
          width: "48",
          height: "20",
          rx: "4",
          fill: "#ef4444",
          class: "button",
          onClick: S
        }, null, 8, et),
        o("text", {
          x: r.value.x,
          y: r.value.y + 28,
          "text-anchor": "middle",
          class: "button btn-text",
          onClick: S
        }, O(e.labels.remove || "Remove"), 9, tt)
      ])) : T("", !0)
    ], 8, Fe));
  }
}), nt = /* @__PURE__ */ D(ot, [["__scopeId", "data-v-c797d647"]]), lt = ["width", "height", "viewBox"], it = ["transform"], at = ["width", "height", "fill"], ie = /* @__PURE__ */ U({
  __name: "Diagram",
  props: {
    width: Number,
    height: Number,
    scale: { type: String, default: "1" },
    background: String,
    showGrid: Boolean,
    nodes: Array,
    links: Array,
    editable: Boolean,
    labels: Object,
    fluid: { type: Boolean, default: !1 }
  },
  emits: [
    "editNode",
    "editLink",
    "nodeClicked",
    "linkClicked",
    "nodeRemoved",
    "linkRemoved",
    "linkAdded",
    "nodeCopied"
  ],
  setup(e, { expose: f, emit: d }) {
    const a = e, s = d, i = $(null), g = $(-1), r = $(-1), t = $(!1), n = q(
      () => a.fluid ? `0 0 ${a.width / a.scale} ${a.height / a.scale}` : `0 0 ${a.width} ${a.height}`
    ), p = q(
      () => `scale(${a.fluid ? 1 : a.scale || 1})translate(0,0)`
    );
    function C() {
      return (/* @__PURE__ */ new Date()).getTime().toString(16) + Math.floor(Math.random() * 1e6).toString(16);
    }
    function S() {
      if (a.fluid && i.value) {
        const h = i.value.getBoundingClientRect();
        return { rWidth: h.width / a.width, rHeight: h.height / a.height };
      }
      return { rWidth: 1, rHeight: 1 };
    }
    function x(h) {
      return a.nodes.find((I) => I.id === h);
    }
    function c() {
      t.value || (g.value = -1, r.value = -1);
    }
    function A(h) {
      s("editNode", h);
    }
    function W(h) {
      s("editLink", h);
    }
    function M(h) {
      const I = a.nodes.find((N) => N.id === h.id);
      I && (I.point.x = h.x, I.point.y = h.y);
    }
    function m(h) {
      const I = a.links.find((N) => N.id === h.id);
      I && (I.point.x = h.x, I.point.y = h.y);
    }
    function E(h) {
      s("nodeClicked", h);
    }
    function w(h) {
      s("linkClicked", h);
    }
    function V(h) {
      g.value = h;
    }
    function R(h) {
      r.value = h;
    }
    function j() {
      t.value = !t.value;
    }
    function X(h) {
      const I = a.nodes.find((J) => J.id === g.value), N = a.nodes.find((J) => J.id === h);
      !I || !N || (s("linkAdded", {
        id: C(),
        source: g.value,
        destination: h,
        point: {
          x: (I.point.x + N.point.x) * 0.5,
          y: (I.point.y + N.point.y) * 0.5
        }
      }), t.value = !1, g.value = -1);
    }
    function K(h) {
      s("linkRemoved", h);
    }
    function Q(h) {
      s("nodeRemoved", h), t.value = !1;
    }
    function Z(h) {
      a.editable && s("nodeCopied", {
        id: C(),
        content: { ...h.content },
        width: h.width,
        height: h.height,
        point: { x: h.point.x + 30, y: h.point.y + 30 },
        shape: h.shape,
        stroke: h.stroke,
        strokeWeight: h.strokeWeight
      });
    }
    return f({ updateNodeLocation: M, updateLinkLocation: m, commitDest: X }), (h, I) => (k(), b("div", {
      id: "svg-diagram-show-area",
      class: "scrollXY",
      ref_key: "field",
      ref: i
    }, [
      (k(), b("svg", {
        width: e.fluid ? "100%" : e.width,
        height: e.fluid ? "100%" : e.height,
        viewBox: n.value,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        I[0] || (I[0] = fe('<defs><pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"></path></pattern><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="url(#smallGrid)"></rect><path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"></path></pattern></defs>', 1)),
        o("g", { transform: p.value }, [
          o("rect", {
            x: "0",
            y: "0",
            width: e.width,
            height: e.height,
            fill: e.showGrid ? "url(#grid)" : e.background,
            onClick: c
          }, null, 8, at),
          (k(!0), b(_, null, ee(e.nodes, (N) => (k(), F(Re, {
            node: N,
            selected: N.id === g.value,
            key: N.id,
            createLinkMode: t.value,
            editable: e.editable,
            labels: e.labels,
            rWidth: S().rWidth,
            rHeight: S().rHeight,
            scale: e.scale,
            onEditNode: A,
            onClick: E,
            onSelect: V,
            onCopy: Z,
            onUpdateLocation: M,
            onToggleSelect: j,
            onCommitDest: X,
            onRemove: Q
          }, null, 8, ["node", "selected", "createLinkMode", "editable", "labels", "rWidth", "rHeight", "scale"]))), 128)),
          (k(!0), b(_, null, ee(e.links, (N) => (k(), F(nt, {
            link: N,
            selected: N.id === r.value,
            key: N.id,
            source: x(N.source),
            destination: x(N.destination),
            editable: e.editable,
            labels: e.labels,
            rWidth: S().rWidth,
            rHeight: S().rHeight,
            scale: e.scale,
            onEditLink: W,
            onClick: w,
            onSelect: R,
            onUpdateLocation: m,
            onRemove: K
          }, null, 8, ["link", "selected", "source", "destination", "editable", "labels", "rWidth", "rHeight", "scale"]))), 128))
        ], 8, it)
      ], 8, lt))
    ], 512));
  }
}), st = { class: "form" }, dt = { class: "section" }, ut = { class: "field-row" }, rt = { class: "field-row" }, ct = { class: "section" }, vt = { class: "field-row three-col" }, ft = { class: "field-group" }, ht = { class: "section" }, mt = { class: "field-row three-col" }, kt = {
  key: 0,
  class: "field-row two-col"
}, gt = { class: "section" }, pt = { class: "field-row three-col" }, yt = { class: "field-group" }, bt = { class: "field-group" }, xt = { class: "field-row" }, wt = /* @__PURE__ */ U({
  __name: "EditNodeModal",
  props: {
    isActive: Boolean,
    node: {
      type: Object,
      default: () => ({
        id: "",
        shape: "rectangle",
        width: 150,
        height: 60,
        stroke: "#93c5fd",
        strokeWeight: 1,
        rx: 6,
        ry: 6,
        opacity: 1,
        content: { text: "", url: "", color: "#dbeafe", fontColor: "#1e3a5f", fontSize: 13, fontWeight: "normal" }
      })
    }
  },
  emits: ["ok", "cancel"],
  setup(e, { expose: f, emit: d }) {
    const a = e, s = d, i = $({ ...a.node, content: { ...a.node.content } });
    G(() => a.node, (t) => {
      i.value = { ...t, content: { ...t.content } };
    }, { deep: !0 });
    function g() {
      s("ok", i.value);
    }
    function r() {
      s("cancel");
    }
    return f({ newNode: i }), (t, n) => {
      const p = B("VInput"), C = B("VSelect"), S = B("VButton"), x = B("VModal");
      return k(), F(x, {
        isActive: e.isActive,
        title: "Node Properties",
        onClickModal: r
      }, {
        footer: y(() => [
          v(S, {
            variant: "primary",
            onClick: g
          }, {
            default: y(() => [...n[23] || (n[23] = [
              L("Save", -1)
            ])]),
            _: 1
          }),
          v(S, {
            variant: "danger",
            onClick: r
          }, {
            default: y(() => [...n[24] || (n[24] = [
              L("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: y(() => [
          o("div", st, [
            o("section", dt, [
              n[14] || (n[14] = o("h3", { class: "section-title" }, "Content", -1)),
              o("div", ut, [
                v(p, {
                  modelValue: i.value.content.text,
                  "onUpdate:modelValue": n[0] || (n[0] = (c) => i.value.content.text = c),
                  label: "Label",
                  placeholder: "Node label"
                }, null, 8, ["modelValue"])
              ]),
              o("div", rt, [
                v(p, {
                  modelValue: i.value.content.url,
                  "onUpdate:modelValue": n[1] || (n[1] = (c) => i.value.content.url = c),
                  label: "URL (optional)",
                  placeholder: "https://..."
                }, null, 8, ["modelValue"])
              ])
            ]),
            o("section", ct, [
              n[17] || (n[17] = o("h3", { class: "section-title" }, "Typography", -1)),
              o("div", vt, [
                v(p, {
                  type: "number",
                  modelValue: i.value.content.fontSize,
                  "onUpdate:modelValue": n[2] || (n[2] = (c) => i.value.content.fontSize = c),
                  label: "Font size",
                  placeholder: "13"
                }, null, 8, ["modelValue"]),
                o("div", ft, [
                  n[15] || (n[15] = o("label", { class: "field-label" }, "Font color", -1)),
                  v(p, {
                    type: "color",
                    modelValue: i.value.content.fontColor,
                    "onUpdate:modelValue": n[3] || (n[3] = (c) => i.value.content.fontColor = c)
                  }, null, 8, ["modelValue"])
                ]),
                v(C, {
                  modelValue: i.value.content.fontWeight,
                  "onUpdate:modelValue": n[4] || (n[4] = (c) => i.value.content.fontWeight = c),
                  label: "Weight"
                }, {
                  default: y(() => [...n[16] || (n[16] = [
                    o("option", { value: "normal" }, "Normal", -1),
                    o("option", { value: "bold" }, "Bold", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            o("section", ht, [
              n[19] || (n[19] = o("h3", { class: "section-title" }, "Shape & Size", -1)),
              o("div", mt, [
                v(C, {
                  modelValue: i.value.shape,
                  "onUpdate:modelValue": n[5] || (n[5] = (c) => i.value.shape = c),
                  label: "Shape"
                }, {
                  default: y(() => [...n[18] || (n[18] = [
                    o("option", { value: "rectangle" }, "Rectangle", -1),
                    o("option", { value: "ellipse" }, "Ellipse", -1),
                    o("option", { value: "diamond" }, "Diamond", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                v(p, {
                  type: "number",
                  modelValue: i.value.width,
                  "onUpdate:modelValue": n[6] || (n[6] = (c) => i.value.width = c),
                  label: "Width",
                  placeholder: "150"
                }, null, 8, ["modelValue"]),
                v(p, {
                  type: "number",
                  modelValue: i.value.height,
                  "onUpdate:modelValue": n[7] || (n[7] = (c) => i.value.height = c),
                  label: "Height",
                  placeholder: "60"
                }, null, 8, ["modelValue"])
              ]),
              i.value.shape === "rectangle" ? (k(), b("div", kt, [
                v(p, {
                  type: "number",
                  modelValue: i.value.rx,
                  "onUpdate:modelValue": n[8] || (n[8] = (c) => i.value.rx = c),
                  label: "Corner radius X",
                  placeholder: "6"
                }, null, 8, ["modelValue"]),
                v(p, {
                  type: "number",
                  modelValue: i.value.ry,
                  "onUpdate:modelValue": n[9] || (n[9] = (c) => i.value.ry = c),
                  label: "Corner radius Y",
                  placeholder: "6"
                }, null, 8, ["modelValue"])
              ])) : T("", !0)
            ]),
            o("section", gt, [
              n[22] || (n[22] = o("h3", { class: "section-title" }, "Appearance", -1)),
              o("div", pt, [
                o("div", yt, [
                  n[20] || (n[20] = o("label", { class: "field-label" }, "Fill color", -1)),
                  v(p, {
                    type: "color",
                    modelValue: i.value.content.color,
                    "onUpdate:modelValue": n[10] || (n[10] = (c) => i.value.content.color = c)
                  }, null, 8, ["modelValue"])
                ]),
                o("div", bt, [
                  n[21] || (n[21] = o("label", { class: "field-label" }, "Stroke color", -1)),
                  v(p, {
                    type: "color",
                    modelValue: i.value.stroke,
                    "onUpdate:modelValue": n[11] || (n[11] = (c) => i.value.stroke = c)
                  }, null, 8, ["modelValue"])
                ]),
                v(p, {
                  type: "number",
                  modelValue: i.value.strokeWeight,
                  "onUpdate:modelValue": n[12] || (n[12] = (c) => i.value.strokeWeight = c),
                  label: "Stroke weight",
                  placeholder: "1"
                }, null, 8, ["modelValue"])
              ]),
              o("div", xt, [
                v(p, {
                  type: "number",
                  modelValue: i.value.opacity,
                  "onUpdate:modelValue": n[13] || (n[13] = (c) => i.value.opacity = c),
                  label: "Opacity (0–1)",
                  placeholder: "1"
                }, null, 8, ["modelValue"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["isActive"]);
    };
  }
}), te = /* @__PURE__ */ D(wt, [["__scopeId", "data-v-72b9ce2c"]]), Vt = { class: "form" }, $t = { class: "section" }, Ct = { class: "section" }, St = { class: "field-row two-col" }, Mt = { class: "field-row two-col" }, Lt = { class: "section" }, Wt = { class: "field-row two-col" }, Nt = { class: "field-group" }, At = /* @__PURE__ */ U({
  __name: "EditLinkModal",
  props: {
    isActive: Boolean,
    link: {
      type: Object,
      default: () => ({
        id: "0",
        content: { color: "#6366f1", shape: "straight", pattern: "solid", arrow: "none", strokeWidth: 2, label: "", opacity: 1 }
      })
    }
  },
  emits: ["ok", "cancel"],
  setup(e, { emit: f }) {
    const d = e, a = f, s = $({ ...d.link.content });
    G(() => d.link, (r) => {
      s.value = { ...r.content };
    }, { deep: !0 });
    function i() {
      a("ok", { id: d.link.id, content: { ...s.value } });
    }
    function g() {
      a("cancel");
    }
    return (r, t) => {
      const n = B("VInput"), p = B("VSelect"), C = B("VButton"), S = B("VModal");
      return k(), F(S, {
        isActive: e.isActive,
        title: "Link Properties",
        onClickModal: g
      }, {
        footer: y(() => [
          v(C, {
            variant: "primary",
            onClick: i
          }, {
            default: y(() => [...t[14] || (t[14] = [
              L("Save", -1)
            ])]),
            _: 1
          }),
          v(C, {
            variant: "danger",
            onClick: g
          }, {
            default: y(() => [...t[15] || (t[15] = [
              L("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: y(() => [
          o("div", Vt, [
            o("section", $t, [
              t[7] || (t[7] = o("h3", { class: "section-title" }, "Label", -1)),
              v(n, {
                modelValue: s.value.label,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => s.value.label = x),
                label: "Text label (optional)",
                placeholder: "Describe this link..."
              }, null, 8, ["modelValue"])
            ]),
            o("section", Ct, [
              t[11] || (t[11] = o("h3", { class: "section-title" }, "Line Style", -1)),
              o("div", St, [
                v(p, {
                  modelValue: s.value.shape,
                  "onUpdate:modelValue": t[1] || (t[1] = (x) => s.value.shape = x),
                  label: "Line shape"
                }, {
                  default: y(() => [...t[8] || (t[8] = [
                    o("option", { value: "straight" }, "Straight", -1),
                    o("option", { value: "bezier" }, "Bezier curve", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                v(p, {
                  modelValue: s.value.pattern,
                  "onUpdate:modelValue": t[2] || (t[2] = (x) => s.value.pattern = x),
                  label: "Line pattern"
                }, {
                  default: y(() => [...t[9] || (t[9] = [
                    o("option", { value: "solid" }, "Solid", -1),
                    o("option", { value: "dash" }, "Dashed", -1),
                    o("option", { value: "dot" }, "Dotted", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              o("div", Mt, [
                v(n, {
                  type: "number",
                  modelValue: s.value.strokeWidth,
                  "onUpdate:modelValue": t[3] || (t[3] = (x) => s.value.strokeWidth = x),
                  label: "Stroke width",
                  placeholder: "2"
                }, null, 8, ["modelValue"]),
                v(p, {
                  modelValue: s.value.arrow,
                  "onUpdate:modelValue": t[4] || (t[4] = (x) => s.value.arrow = x),
                  label: "Arrow"
                }, {
                  default: y(() => [...t[10] || (t[10] = [
                    o("option", { value: "none" }, "None", -1),
                    o("option", { value: "dest" }, "→ Destination", -1),
                    o("option", { value: "src" }, "← Source", -1),
                    o("option", { value: "both" }, "↔ Both", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            o("section", Lt, [
              t[13] || (t[13] = o("h3", { class: "section-title" }, "Appearance", -1)),
              o("div", Wt, [
                o("div", Nt, [
                  t[12] || (t[12] = o("label", { class: "field-label" }, "Color", -1)),
                  v(n, {
                    type: "color",
                    modelValue: s.value.color,
                    "onUpdate:modelValue": t[5] || (t[5] = (x) => s.value.color = x)
                  }, null, 8, ["modelValue"])
                ]),
                v(n, {
                  type: "number",
                  modelValue: s.value.opacity,
                  "onUpdate:modelValue": t[6] || (t[6] = (x) => s.value.opacity = x),
                  label: "Opacity (0–1)",
                  placeholder: "1"
                }, null, 8, ["modelValue"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["isActive"]);
    };
  }
}), It = /* @__PURE__ */ D(At, [["__scopeId", "data-v-320c1a92"]]), Bt = /* @__PURE__ */ U({
  __name: "InputModal",
  props: { isActive: Boolean, text: String },
  emits: ["ok", "cancel"],
  setup(e, { emit: f }) {
    const d = e, a = f, s = $("");
    G(() => d.text, (r) => {
      s.value = r ?? "";
    });
    function i() {
      a("ok", { text: s.value });
    }
    function g() {
      a("cancel");
    }
    return (r, t) => {
      const n = B("VButton"), p = B("VModal");
      return k(), F(p, {
        isActive: e.isActive,
        title: "Import / Export JSON",
        onClickModal: g
      }, {
        footer: y(() => [
          v(n, {
            variant: "primary",
            onClick: i
          }, {
            default: y(() => [...t[1] || (t[1] = [
              L("Import", -1)
            ])]),
            _: 1
          }),
          v(n, { onClick: g }, {
            default: y(() => [...t[2] || (t[2] = [
              L("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: y(() => [
          he(o("textarea", {
            class: "editor",
            "onUpdate:modelValue": t[0] || (t[0] = (C) => s.value = C),
            placeholder: "Paste JSON here..."
          }, null, 512), [
            [me, s.value]
          ])
        ]),
        _: 1
      }, 8, ["isActive"]);
    };
  }
}), Ot = /* @__PURE__ */ D(Bt, [["__scopeId", "data-v-93c54f18"]]), Ut = { class: "message" }, Et = /* @__PURE__ */ U({
  __name: "AskModal",
  props: { isActive: Boolean },
  emits: ["ok", "cancel"],
  setup(e, { emit: f }) {
    const d = f;
    function a() {
      d("ok", !0);
    }
    function s() {
      d("cancel");
    }
    return (i, g) => {
      const r = B("VButton"), t = B("VModal");
      return k(), F(t, {
        isActive: e.isActive,
        title: "Confirm",
        onClickModal: s
      }, {
        footer: y(() => [
          v(r, {
            variant: "danger",
            onClick: a
          }, {
            default: y(() => [...g[0] || (g[0] = [
              L("OK", -1)
            ])]),
            _: 1
          }),
          v(r, { onClick: s }, {
            default: y(() => [...g[1] || (g[1] = [
              L("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: y(() => [
          o("p", Ut, [
            H(i.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["isActive"]);
    };
  }
}), Dt = /* @__PURE__ */ D(Et, [["__scopeId", "data-v-1e83d362"]]), zt = { class: "form" }, Tt = { class: "section" }, Rt = { class: "field-row two-col" }, Ft = { class: "section" }, Gt = { class: "field-row" }, jt = { class: "toggles" }, Ht = /* @__PURE__ */ U({
  __name: "SettingsModal",
  props: {
    isActive: { type: Boolean, default: !1 },
    settings: {
      type: Object,
      default: () => ({ width: 1500, height: 1e3, scale: "1", isFluid: !1, showGrid: !1 })
    }
  },
  emits: ["ok", "cancel"],
  setup(e, { emit: f }) {
    const d = e, a = f, s = Y({ width: 0, height: 0, scale: "1", isFluid: !1, showGrid: !1 });
    G(() => d.isActive, (r) => {
      r && Object.assign(s, d.settings);
    });
    function i() {
      a("ok", { ...s });
    }
    function g() {
      a("cancel");
    }
    return (r, t) => {
      const n = B("VInput"), p = B("VSelect"), C = B("VCkbox"), S = B("VButton"), x = B("VModal");
      return k(), F(x, {
        isActive: e.isActive,
        title: "Diagram Settings",
        onClickModal: g
      }, {
        footer: y(() => [
          v(S, {
            variant: "primary",
            onClick: i
          }, {
            default: y(() => [...t[10] || (t[10] = [
              L("Save", -1)
            ])]),
            _: 1
          }),
          v(S, {
            variant: "danger",
            onClick: g
          }, {
            default: y(() => [...t[11] || (t[11] = [
              L("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: y(() => [
          o("div", zt, [
            o("section", Tt, [
              t[5] || (t[5] = o("h3", { class: "section-title" }, "Canvas size", -1)),
              o("div", Rt, [
                v(n, {
                  type: "number",
                  modelValue: s.width,
                  "onUpdate:modelValue": t[0] || (t[0] = (c) => s.width = c),
                  label: "Width"
                }, null, 8, ["modelValue"]),
                v(n, {
                  type: "number",
                  modelValue: s.height,
                  "onUpdate:modelValue": t[1] || (t[1] = (c) => s.height = c),
                  label: "Height"
                }, null, 8, ["modelValue"])
              ])
            ]),
            o("section", Ft, [
              t[9] || (t[9] = o("h3", { class: "section-title" }, "Display", -1)),
              o("div", Gt, [
                v(p, {
                  modelValue: s.scale,
                  "onUpdate:modelValue": t[2] || (t[2] = (c) => s.scale = c),
                  label: "Scale"
                }, {
                  default: y(() => [...t[6] || (t[6] = [
                    o("option", { value: "0.5" }, "Small (50%)", -1),
                    o("option", { value: "1" }, "Medium (100%)", -1),
                    o("option", { value: "1.5" }, "Large (150%)", -1),
                    o("option", { value: "2" }, "XLarge (200%)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              o("div", jt, [
                v(C, {
                  modelValue: s.isFluid,
                  "onUpdate:modelValue": t[3] || (t[3] = (c) => s.isFluid = c)
                }, {
                  default: y(() => [...t[7] || (t[7] = [
                    L("Fluid (fill container)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                v(C, {
                  modelValue: s.showGrid,
                  "onUpdate:modelValue": t[4] || (t[4] = (c) => s.showGrid = c)
                }, {
                  default: y(() => [...t[8] || (t[8] = [
                    L("Show grid", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["isActive"]);
    };
  }
}), Jt = /* @__PURE__ */ D(Ht, [["__scopeId", "data-v-38c2be09"]]), Pt = { id: "editor" }, Xt = { class: "toolbar" }, Yt = { class: "toolbar-group" }, qt = { class: "toolbar-group" }, Kt = { class: "toolbar-group" }, Qt = /* @__PURE__ */ U({
  __name: "DiagramEditor",
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        width: 2e3,
        height: 1e3,
        background: "#f8fafc",
        showGrid: !1,
        labels: { edit: "Edit", remove: "Remove", link: "Link", select: "Select", copy: "Copy" },
        nodes: [],
        links: []
      })
    }
  },
  emits: [
    "update:modelValue",
    "nodeClicked",
    "linkClicked",
    "nodeRemoved",
    "linkRemoved"
  ],
  setup(e, { emit: f }) {
    const d = e, a = f, s = (l) => ({
      width: 2e3,
      height: 1e3,
      background: "#f8fafc",
      showGrid: !1,
      nodes: [],
      links: [],
      ...JSON.parse(JSON.stringify(l || {}))
    }), i = $(s(d.modelValue));
    let g = !1;
    G(() => d.modelValue, (l) => {
      g || !l || (i.value = s(l));
    }), G(i, (l) => {
      g = !0, a("update:modelValue", l), ke(() => {
        g = !1;
      });
    }, { deep: !0 });
    const r = $(""), t = $(!1), n = $(!1), p = $(!1), C = $(!1), S = $(!1), x = $(!1), c = $(!1), A = Y({
      width: 1500,
      height: 1e3,
      isFluid: !1,
      scale: "1",
      showGrid: !1
    }), W = Y({
      id: "",
      shape: "rectangle",
      width: 0,
      height: 0,
      stroke: "",
      strokeWeight: 0,
      rx: 6,
      ry: 6,
      opacity: 1,
      content: { text: "", url: "", color: "", fontColor: "", fontSize: 13, fontWeight: "normal" }
    }), M = Y({
      id: "",
      content: { color: "", pattern: "solid", arrow: "none", shape: "straight", strokeWidth: 2, label: "", opacity: 1 }
    });
    function m() {
      return (/* @__PURE__ */ new Date()).getTime().toString(16) + Math.floor(Math.random() * 1e6).toString(16);
    }
    function E() {
      i.value.nodes = [], i.value.links = [], x.value = !1;
    }
    function w() {
      t.value = !0;
    }
    function V() {
      t.value = !1, n.value = !1, p.value = !1, C.value = !1, x.value = !1, S.value = !1;
    }
    function R(l) {
      i.value.nodes.push({
        id: m(),
        content: {
          text: l.content.text,
          url: l.content.url,
          color: l.content.color || "#dbeafe",
          fontColor: l.content.fontColor || "#1e3a5f",
          fontSize: parseInt(l.content.fontSize, 10) || 13,
          fontWeight: l.content.fontWeight || "normal"
        },
        width: parseInt(l.width, 10) || 150,
        height: parseInt(l.height, 10) || 60,
        stroke: l.stroke || "#93c5fd",
        strokeWeight: parseFloat(l.strokeWeight) || 1,
        shape: l.shape || "rectangle",
        rx: parseInt(l.rx, 10) || 6,
        ry: parseInt(l.ry, 10) || 6,
        opacity: parseFloat(l.opacity) || 1,
        point: { x: 10, y: 100 + Math.random() * 100 }
      }), t.value = !1;
    }
    function j(l) {
      Object.assign(W, {
        id: l.id,
        shape: l.shape,
        stroke: l.stroke,
        strokeWeight: l.strokeWeight,
        width: l.width,
        height: l.height,
        rx: l.rx ?? 6,
        ry: l.ry ?? 6,
        opacity: l.opacity ?? 1
      }), Object.assign(W.content, {
        text: l.content.text,
        url: l.content.url,
        color: l.content.color,
        fontColor: l.content.fontColor || "#1e3a5f",
        fontSize: l.content.fontSize || 13,
        fontWeight: l.content.fontWeight || "normal"
      }), n.value = !0;
    }
    function X(l) {
      n.value = !1;
      const u = i.value.nodes.find((z) => z.id === l.id);
      u && (u.content.text = l.content.text, u.content.url = l.content.url, u.content.color = l.content.color, u.content.fontColor = l.content.fontColor, u.content.fontSize = parseInt(l.content.fontSize, 10) || 13, u.content.fontWeight = l.content.fontWeight, u.shape = l.shape, u.stroke = l.stroke, u.strokeWeight = parseFloat(l.strokeWeight) || 1, u.width = parseInt(l.width, 10), u.height = parseInt(l.height, 10), u.rx = parseInt(l.rx, 10) || 6, u.ry = parseInt(l.ry, 10) || 6, u.opacity = parseFloat(l.opacity) || 1, n.value = !1);
    }
    function K(l) {
      M.id = l.id, Object.assign(M.content, {
        color: l.content.color,
        shape: l.content.shape,
        pattern: l.content.pattern,
        arrow: l.content.arrow,
        strokeWidth: l.content.strokeWidth ?? 2,
        label: l.content.label || "",
        opacity: l.content.opacity ?? 1
      }), p.value = !0;
    }
    function Q(l) {
      p.value = !1;
      const u = i.value.links.find((z) => z.id === l.id);
      u && (u.color = l.content.color, u.shape = l.content.shape, u.pattern = l.content.pattern, u.arrow = l.content.arrow, u.strokeWidth = parseFloat(l.content.strokeWidth) || 2, u.label = l.content.label, u.opacity = parseFloat(l.content.opacity) || 1, p.value = !1);
    }
    function Z() {
      c.value = !1;
    }
    function h(l) {
      a("nodeClicked", l);
    }
    function I(l) {
      a("linkClicked", l);
    }
    function N(l) {
      i.value.nodes = i.value.nodes.filter((u) => u.id !== l), i.value.links = i.value.links.filter((u) => u.source !== l && u.destination !== l), a("nodeRemoved", l);
    }
    function J(l) {
      i.value.links = i.value.links.filter((u) => u.id !== l), a("linkRemoved", l);
    }
    function ae(l) {
      i.value.links.push(l);
    }
    function se(l) {
      i.value.nodes.push(l);
    }
    function de() {
      C.value = !0, r.value = JSON.stringify(i.value, null, 2);
    }
    function ue(l) {
      try {
        const u = JSON.parse(l.text);
        u && (i.value = u, C.value = !1);
      } catch (u) {
        alert("Invalid JSON: " + u.message);
      }
    }
    function re() {
      const l = document.getElementById("svg-diagram-show-area");
      if (!l) return;
      const u = new Blob([l.innerHTML], { type: "image/svg+xml" }), z = window.URL.createObjectURL(u), P = document.createElement("a");
      P.href = z, P.download = "diagram.svg", P.click();
    }
    function ce() {
      S.value = !0, A.width = i.value.width, A.height = i.value.height, A.showGrid = i.value.showGrid;
    }
    function ve(l) {
      Object.assign(A, l), i.value.width = parseInt(A.width, 10), i.value.height = parseInt(A.height, 10), i.value.showGrid = A.showGrid, S.value = !1;
    }
    return (l, u) => {
      const z = B("VButton");
      return k(), b("div", Pt, [
        o("div", Xt, [
          o("div", Yt, [
            c.value ? (k(), b(_, { key: 1 }, [
              v(z, {
                variant: "primary",
                onClick: w
              }, {
                default: y(() => [...u[3] || (u[3] = [
                  L("＋ New Node", -1)
                ])]),
                _: 1
              }),
              v(z, { onClick: Z }, {
                default: y(() => [...u[4] || (u[4] = [
                  L("✓ Done", -1)
                ])]),
                _: 1
              })
            ], 64)) : (k(), F(z, {
              key: 0,
              variant: "primary",
              onClick: u[0] || (u[0] = (P) => c.value = !0)
            }, {
              default: y(() => [...u[2] || (u[2] = [
                L("✏️ Edit", -1)
              ])]),
              _: 1
            }))
          ]),
          o("div", qt, [
            v(z, { onClick: de }, {
              default: y(() => [...u[5] || (u[5] = [
                L("⬆ Import / Export", -1)
              ])]),
              _: 1
            }),
            v(z, { onClick: re }, {
              default: y(() => [...u[6] || (u[6] = [
                L("⬇ Download SVG", -1)
              ])]),
              _: 1
            })
          ]),
          o("div", Kt, [
            v(z, { onClick: ce }, {
              default: y(() => [...u[7] || (u[7] = [
                L("⚙ Settings", -1)
              ])]),
              _: 1
            }),
            v(z, {
              variant: "danger",
              onClick: u[1] || (u[1] = (P) => x.value = !0)
            }, {
              default: y(() => [...u[8] || (u[8] = [
                L("🗑 Clear", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        v(Dt, {
          isActive: x.value,
          onOk: E,
          onCancel: V
        }, {
          default: y(() => [...u[9] || (u[9] = [
            L(" Clear the entire diagram? This cannot be undone. ", -1)
          ])]),
          _: 1
        }, 8, ["isActive"]),
        v(te, {
          node: { content: {} },
          isActive: t.value,
          onOk: R,
          onCancel: V
        }, null, 8, ["isActive"]),
        v(te, {
          node: W,
          isActive: n.value,
          onOk: X,
          onCancel: V
        }, null, 8, ["node", "isActive"]),
        v(It, {
          link: M,
          isActive: p.value,
          onOk: Q,
          onCancel: V
        }, null, 8, ["link", "isActive"]),
        v(Ot, {
          text: r.value,
          isActive: C.value,
          onOk: ue,
          onCancel: V
        }, null, 8, ["text", "isActive"]),
        v(Jt, {
          isActive: S.value,
          settings: A,
          onOk: ve,
          onCancel: V
        }, null, 8, ["isActive", "settings"]),
        v(ie, {
          width: i.value.width || 2e3,
          height: i.value.height || 1e3,
          fluid: A.isFluid,
          scale: A.scale,
          background: i.value.background || "#f8fafc",
          showGrid: i.value.showGrid,
          nodes: i.value.nodes,
          links: i.value.links,
          editable: c.value,
          labels: i.value.labels || { edit: "Edit", remove: "Remove", link: "Link", select: "Select", cancel: "Cancel", copy: "Copy" },
          onEditNode: j,
          onEditLink: K,
          onNodeClicked: h,
          onLinkClicked: I,
          onNodeRemoved: N,
          onLinkRemoved: J,
          onLinkAdded: ae,
          onNodeCopied: se
        }, null, 8, ["width", "height", "fluid", "scale", "background", "showGrid", "nodes", "links", "editable", "labels"])
      ]);
    };
  }
}), Zt = /* @__PURE__ */ D(Qt, [["__scopeId", "data-v-66e2d983"]]), _t = /* @__PURE__ */ U({
  name: "VButton",
  __name: "VButton",
  props: { variant: { type: String, default: "default" } },
  emits: ["click"],
  setup(e, { emit: f }) {
    const d = f;
    return (a, s) => (k(), b("button", {
      class: ge(["btn", e.variant]),
      onClick: s[0] || (s[0] = (i) => d("click", i))
    }, [
      H(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), eo = /* @__PURE__ */ D(_t, [["__scopeId", "data-v-5d1c5ded"]]), to = { class: "toggle" }, oo = ["checked"], no = { class: "toggle-label" };
let lo = 0;
const io = /* @__PURE__ */ U({
  name: "VCkbox",
  __name: "VCkbox",
  props: { modelValue: Boolean },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const d = `vckbox-${++lo}`, a = f;
    function s(i) {
      a("update:modelValue", i.target.checked);
    }
    return (i, g) => (k(), b("label", to, [
      o("input", {
        class: "toggle-input",
        id: d,
        type: "checkbox",
        checked: e.modelValue,
        onChange: s
      }, null, 40, oo),
      g[0] || (g[0] = o("span", { class: "toggle-track" }, [
        o("span", { class: "toggle-thumb" })
      ], -1)),
      o("span", no, [
        H(i.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ao = /* @__PURE__ */ D(io, [["__scopeId", "data-v-809530cf"]]), so = { class: "field" }, uo = {
  key: 0,
  class: "field-label"
}, ro = ["type", "value", "placeholder"], co = /* @__PURE__ */ U({
  name: "VInput",
  __name: "VInput",
  props: {
    type: String,
    modelValue: [String, Number],
    label: String,
    placeholder: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const d = f;
    function a(s) {
      d("update:modelValue", s.target.value);
    }
    return (s, i) => (k(), b("div", so, [
      e.label ? (k(), b("label", uo, O(e.label), 1)) : T("", !0),
      o("input", {
        type: e.type || "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: a
      }, null, 40, ro)
    ]));
  }
}), vo = /* @__PURE__ */ D(co, [["__scopeId", "data-v-dc0bb474"]]), fo = {
  key: 0,
  id: "message"
}, ho = { id: "content" }, mo = /* @__PURE__ */ U({
  name: "VMessage",
  __name: "VMessage",
  props: { content: String },
  setup(e) {
    const f = $(!1);
    return (d, a) => f.value ? T("", !0) : (k(), b("div", fo, [
      o("span", {
        class: "dismiss",
        onClick: a[0] || (a[0] = (s) => f.value = !0)
      }, "X"),
      o("div", ho, O(e.content), 1)
    ]));
  }
}), ko = /* @__PURE__ */ D(mo, [["__scopeId", "data-v-692a28e3"]]), go = { class: "card" }, po = { class: "card-header" }, yo = { class: "card-title" }, bo = { class: "card-body" }, xo = {
  key: 0,
  class: "card-footer"
}, wo = /* @__PURE__ */ U({
  name: "VModal",
  __name: "VModal",
  props: { isActive: Boolean, title: { type: String, default: "" } },
  emits: ["clickModal"],
  setup(e) {
    return (f, d) => (k(), F(pe, { name: "modal" }, {
      default: y(() => [
        e.isActive ? (k(), b("div", {
          key: 0,
          class: "overlay",
          onClick: d[1] || (d[1] = ye((a) => f.$emit("clickModal"), ["self"]))
        }, [
          o("div", go, [
            o("div", po, [
              o("span", yo, O(e.title), 1),
              o("button", {
                class: "close-btn",
                onClick: d[0] || (d[0] = (a) => f.$emit("clickModal"))
              }, "✕")
            ]),
            o("div", bo, [
              H(f.$slots, "default", {}, void 0, !0)
            ]),
            f.$slots.footer ? (k(), b("div", xo, [
              H(f.$slots, "footer", {}, void 0, !0)
            ])) : T("", !0)
          ])
        ])) : T("", !0)
      ]),
      _: 3
    }));
  }
}), Vo = /* @__PURE__ */ D(wo, [["__scopeId", "data-v-32575efa"]]), $o = { class: "field" }, Co = {
  key: 0,
  class: "field-label"
}, So = ["value", "multiple"], Mo = {
  key: 0,
  value: null,
  disabled: ""
}, Lo = /* @__PURE__ */ U({
  name: "VSelect",
  __name: "VSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: null },
    multiple: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: f }) {
    const d = f;
    function a(s) {
      d("update:modelValue", s.target.value);
    }
    return (s, i) => (k(), b("div", $o, [
      e.label ? (k(), b("label", Co, O(e.label), 1)) : T("", !0),
      o("select", {
        value: e.modelValue,
        multiple: e.multiple,
        onChange: a
      }, [
        e.placeholder ? (k(), b("option", Mo, O(e.placeholder), 1)) : T("", !0),
        H(s.$slots, "default", {}, void 0, !0)
      ], 40, So)
    ]));
  }
}), Wo = /* @__PURE__ */ D(Lo, [["__scopeId", "data-v-329e0566"]]), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VButton: eo,
  VCkbox: ao,
  VInput: vo,
  VMessage: ko,
  VModal: Vo,
  VSelect: Wo
}, Symbol.toStringTag, { value: "Module" })), No = {
  install(e) {
    for (const f in oe) {
      const d = oe[f];
      e.component(d.name, d);
    }
  }
}, Io = {
  install(e) {
    e.use(No), e.component("Diagram", ie), e.component("DiagramEditor", Zt);
  }
};
export {
  ie as Diagram,
  Zt as DiagramEditor,
  Io as default
};
