import { defineComponent as R, ref as W, computed as ne, watch as q, onBeforeUnmount as de, openBlock as m, createElementBlock as x, createElementVNode as t, toDisplayString as z, createCommentVNode as j, createStaticVNode as ve, Fragment as le, renderList as ie, createBlock as X, resolveComponent as E, withCtx as p, createVNode as f, createTextVNode as O, withDirectives as fe, vModelText as ke, renderSlot as _, reactive as oe, nextTick as me, normalizeClass as ye, Transition as ge, withModifiers as pe } from "vue";
function ue() {
  function e(k) {
    return k.touches ? [k.touches[0].pageX, k.touches[0].pageY] : [k.pageX, k.pageY];
  }
  return { getLocation: e };
}
const xe = ["opacity"], be = { key: 0 }, we = ["x", "y"], $e = ["x", "y"], Ve = ["x", "y", "fill"], Ce = ["x", "y"], Se = ["x", "y"], Le = ["x", "y"], Me = ["x", "y"], We = ["x", "y"], Ne = { key: 1 }, Ae = ["x", "y"], Ie = ["x", "y"], Be = ["cx", "cy", "rx", "ry", "fill", "stroke", "stroke-width"], Oe = ["points", "fill", "stroke", "stroke-width"], Ue = ["x", "y", "width", "height", "rx", "ry", "fill", "stroke", "stroke-width"], Ee = ["href"], De = ["x", "y", "fill", "font-size", "font-weight"], ze = ["x", "y", "fill", "font-size", "font-weight"], Re = /* @__PURE__ */ R({
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
  setup(e, { expose: k, emit: o }) {
    const a = e, d = o, { getLocation: s } = ue(), y = W(null), u = W({ x: 0, y: 0 }), n = W(a.node.point.x), l = W(a.node.point.y), g = ne(() => {
      var c;
      const S = (c = a.node.content) == null ? void 0 : c.url;
      return S && /^https?:\/\//i.test(S) ? S : "";
    }), L = ne(() => {
      const S = n.value + a.node.width / 2, c = l.value + a.node.height / 2, w = a.node.width / 2, I = a.node.height / 2;
      return `${S},${c - I} ${S + w},${c} ${S},${c + I} ${S - w},${c}`;
    });
    q(() => a.node, (S) => {
      n.value = S.point.x, l.value = S.point.y;
    });
    function N() {
      d("toggleSelect");
    }
    function b() {
      d("commitDest", a.node.id);
    }
    function v() {
      d("remove", a.node.id);
    }
    function U() {
      d("copy", a.node);
    }
    function D(S) {
      if (d("click", a.node.id), !a.editable) return;
      d("select", a.node.id);
      const [c, w] = s(S);
      u.value = { x: c, y: w }, y.value = { x: n.value, y: l.value }, document.addEventListener("mousemove", A), document.addEventListener("mouseup", B);
    }
    function A(S) {
      if (!y.value) return;
      S.preventDefault();
      const [c, w] = s(S);
      n.value = y.value.x + (c - u.value.x) / a.rWidth / parseFloat(a.scale), l.value = y.value.y + (w - u.value.y) / a.rHeight / parseFloat(a.scale), d("updateLocation", { id: a.node.id, x: n.value, y: l.value });
    }
    function B() {
      y.value = null, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", B);
    }
    function J() {
      d("editNode", {
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
    return de(() => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", B);
    }), k({ safeUrl: g }), (S, c) => (m(), x("g", {
      opacity: e.node.opacity ?? 1
    }, [
      e.editable && e.selected ? (m(), x("g", be, [
        t("rect", {
          x: n.value + 2,
          y: l.value - 30,
          width: "48",
          height: "22",
          rx: "4",
          fill: "#3b82f6",
          class: "button",
          onClick: J
        }, null, 8, we),
        t("text", {
          x: n.value + 26,
          y: l.value - 15,
          class: "button btn-text",
          onClick: J
        }, z(e.labels.edit || "Edit"), 9, $e),
        t("rect", {
          x: n.value + 2,
          y: l.value + e.node.height + 6,
          width: "56",
          height: "22",
          rx: "4",
          fill: e.createLinkMode ? "#9ca3af" : "#6366f1",
          class: "button",
          onClick: N
        }, null, 8, Ve),
        t("text", {
          x: n.value + 30,
          y: l.value + e.node.height + 21,
          class: "button btn-text",
          onClick: N
        }, z(e.createLinkMode ? e.labels.cancel || "Cancel" : e.labels.link || "Link"), 9, Ce),
        t("rect", {
          x: n.value + 66,
          y: l.value - 30,
          width: "48",
          height: "22",
          rx: "4",
          fill: "#f59e0b",
          class: "button",
          onClick: U
        }, null, 8, Se),
        t("text", {
          x: n.value + 90,
          y: l.value - 15,
          class: "button btn-text",
          onClick: U
        }, z(e.labels.copy || "Copy"), 9, Le),
        t("rect", {
          x: n.value + 66,
          y: l.value + e.node.height + 6,
          width: "56",
          height: "22",
          rx: "4",
          fill: "#ef4444",
          class: "button",
          onClick: v
        }, null, 8, Me),
        t("text", {
          x: n.value + 94,
          y: l.value + e.node.height + 21,
          class: "button btn-text",
          onClick: v
        }, z(e.labels.remove || "Remove"), 9, We)
      ])) : j("", !0),
      e.editable && e.createLinkMode && !e.selected ? (m(), x("g", Ne, [
        t("rect", {
          x: n.value + 2,
          y: l.value - 30,
          width: "56",
          height: "22",
          rx: "4",
          fill: "#10b981",
          class: "button",
          onClick: b
        }, null, 8, Ae),
        t("text", {
          x: n.value + 30,
          y: l.value - 15,
          class: "button btn-text",
          onClick: b
        }, z(e.labels.select || "Select"), 9, Ie)
      ])) : j("", !0),
      e.node.shape === "ellipse" ? (m(), x("ellipse", {
        key: 2,
        class: "grab",
        cx: n.value + e.node.width / 2,
        cy: l.value + e.node.height / 2,
        rx: e.node.width / 2,
        ry: e.node.height / 2,
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: D,
        onMousedown: D,
        onMousemove: A,
        onTouchmove: A,
        onMouseup: B,
        onTouchend: B
      }, null, 40, Be)) : e.node.shape === "diamond" ? (m(), x("polygon", {
        key: 3,
        points: L.value,
        class: "grab",
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: D,
        onMousedown: D,
        onMousemove: A,
        onTouchmove: A,
        onMouseup: B,
        onTouchend: B
      }, null, 40, Oe)) : (m(), x("rect", {
        key: 4,
        class: "grab",
        x: n.value,
        y: l.value,
        width: e.node.width,
        height: e.node.height,
        rx: e.node.rx ?? 6,
        ry: e.node.ry ?? 6,
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: D,
        onMousedown: D,
        onMousemove: A,
        onTouchmove: A,
        onMouseup: B,
        onTouchend: B
      }, null, 40, Ue)),
      g.value ? (m(), x("a", {
        key: 5,
        href: g.value,
        target: "_blank"
      }, [
        t("text", {
          x: n.value + e.node.width / 2,
          y: l.value + e.node.height / 2 + (e.node.content.fontSize ?? 13) / 3,
          fill: e.node.content.fontColor || "#1e3a5f",
          "font-family": "system-ui, sans-serif",
          "font-size": e.node.content.fontSize ?? 13,
          "font-weight": e.node.content.fontWeight || "normal",
          "text-anchor": "middle",
          "text-decoration": "underline",
          style: { "pointer-events": "none" }
        }, z(e.node.content.text), 9, De)
      ], 8, Ee)) : (m(), x("text", {
        key: 6,
        x: n.value + e.node.width / 2,
        y: l.value + e.node.height / 2 + (e.node.content.fontSize ?? 13) / 3,
        fill: e.node.content.fontColor || "#1e3a5f",
        "font-family": "system-ui, sans-serif",
        "font-size": e.node.content.fontSize ?? 13,
        "font-weight": e.node.content.fontWeight || "normal",
        "text-anchor": "middle",
        style: { "pointer-events": "none" }
      }, z(e.node.content.text), 9, ze))
    ], 8, xe));
  }
}), T = (e, k) => {
  const o = e.__vccOpts || e;
  for (const [a, d] of k)
    o[a] = d;
  return o;
}, Te = /* @__PURE__ */ T(Re, [["__scopeId", "data-v-a223d318"]]), Fe = ["opacity"], Ge = ["d", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], je = ["d", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], He = ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], Pe = ["id"], Xe = ["fill"], Je = ["x", "y", "fill"], Ye = { key: 4 }, qe = ["x1", "y1", "x2", "y2"], Qe = ["x1", "y1", "x2", "y2"], Ke = ["cx", "cy"], Ze = { key: 5 }, _e = ["cx", "cy"], et = { key: 6 }, tt = ["x", "y"], ot = ["x", "y", "fill"], nt = ["x1", "y1", "x2", "y2"], lt = ["x", "y", "fill"], it = ["d"], at = ["x", "y", "fill"], st = ["d"], dt = ["x", "y"], ut = ["x", "y"], rt = ["x", "y"], ct = ["x", "y"], ht = /* @__PURE__ */ R({
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
  emits: ["click", "select", "updateLocation", "remove", "editLink", "changeShape"],
  setup(e, { emit: k }) {
    const o = e, a = k, { getLocation: d } = ue(), s = W(null), y = W({ x: 0, y: 0 }), u = W(o.link.point);
    function n(c) {
      a("click", o.link.id);
      const [w, I] = d(c);
      y.value = { x: w, y: I }, s.value = { x: u.value.x, y: u.value.y }, document.addEventListener("mousemove", l), document.addEventListener("mouseup", g);
    }
    function l(c) {
      if (!s.value) return;
      c.preventDefault();
      const [w, I] = d(c);
      u.value = {
        x: s.value.x + (w - y.value.x) / o.rWidth / parseFloat(o.scale),
        y: s.value.y + (I - y.value.y) / o.rHeight / parseFloat(o.scale)
      }, a("updateLocation", { id: o.link.id, x: u.value.x, y: u.value.y });
    }
    function g() {
      s.value = null, document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", g);
    }
    function L(c) {
      return c === "dash" ? "10,5" : c === "dot" ? "3,3" : "0";
    }
    function N() {
      a("remove", o.link.id);
    }
    function b() {
      a("select", o.link.id);
    }
    function v(c) {
      a("changeShape", { id: o.link.id, shape: c });
    }
    function U() {
      a("editLink", {
        id: o.link.id,
        content: {
          color: o.link.color || "#6366f1",
          shape: o.link.shape || "straight",
          pattern: o.link.pattern || "solid",
          arrow: o.link.arrow || "none",
          strokeWidth: o.link.strokeWidth ?? 2,
          label: o.link.label || ""
        }
      });
    }
    function D(c, w) {
      let I = w.x - c.point.x - c.width / 2, H = w.y - c.point.y - c.height / 2;
      return I === 0 && (I = 0.01), Math.abs(H / I) <= 1 ? I >= 0 ? { x: c.point.x + c.width, y: c.point.y + c.height / 2 } : { x: c.point.x, y: c.point.y + c.height / 2 } : H >= 0 ? { x: c.point.x + c.width / 2, y: c.point.y + c.height } : { x: c.point.x + c.width / 2, y: c.point.y };
    }
    function A() {
      return D(o.source, u.value);
    }
    function B() {
      return D(o.destination, u.value);
    }
    function J() {
      const c = o.source.point.x + o.source.width / 2, w = o.source.point.y + o.source.height / 2, I = o.destination.point.x + o.destination.width / 2, H = o.destination.point.y + o.destination.height / 2, Y = I - c, Q = H - w, K = Math.abs(Y), Z = Math.abs(Q), h = Y >= 0, $ = Q >= 0;
      if (Z < 10) {
        const V = { x: h ? o.source.point.x + o.source.width : o.source.point.x, y: w }, C = { x: h ? o.destination.point.x : o.destination.point.x + o.destination.width, y: H };
        if (Math.abs(V.y - C.y) < 2) return `M${V.x},${V.y} L${C.x},${C.y}`;
        const F = (V.x + C.x) / 2;
        return `M${V.x},${V.y} L${F},${V.y} L${F},${C.y} L${C.x},${C.y}`;
      }
      if (K < 10) {
        const V = { x: c, y: $ ? o.source.point.y + o.source.height : o.source.point.y }, C = { x: I, y: $ ? o.destination.point.y : o.destination.point.y + o.destination.height };
        if (Math.abs(V.x - C.x) < 2) return `M${V.x},${V.y} L${C.x},${C.y}`;
        const F = (V.y + C.y) / 2;
        return `M${V.x},${V.y} L${V.x},${F} L${C.x},${F} L${C.x},${C.y}`;
      }
      const M = Z / K;
      if (M <= 0.5) {
        const V = { x: h ? o.source.point.x + o.source.width : o.source.point.x, y: w }, C = { x: h ? o.destination.point.x : o.destination.point.x + o.destination.width, y: H }, F = (V.x + C.x) / 2;
        return `M${V.x},${V.y} L${F},${V.y} L${F},${C.y} L${C.x},${C.y}`;
      }
      if (M >= 2) {
        const V = { x: c, y: $ ? o.source.point.y + o.source.height : o.source.point.y }, C = { x: I, y: $ ? o.destination.point.y : o.destination.point.y + o.destination.height }, F = (V.y + C.y) / 2;
        return `M${V.x},${V.y} L${V.x},${F} L${C.x},${F} L${C.x},${C.y}`;
      }
      const P = { x: h ? o.source.point.x + o.source.width : o.source.point.x, y: w }, ee = { x: I, y: $ ? o.destination.point.y : o.destination.point.y + o.destination.height };
      return `M${P.x},${P.y} L${ee.x},${P.y} L${ee.x},${ee.y}`;
    }
    function S() {
      return o.link.shape === "polyline" ? {
        x: (o.source.point.x + o.source.width / 2 + o.destination.point.x + o.destination.width / 2) / 2,
        y: (o.source.point.y + o.source.height / 2 + o.destination.point.y + o.destination.height / 2) / 2
      } : u.value;
    }
    return de(() => {
      document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", g);
    }), (c, w) => (m(), x("g", {
      opacity: e.link.opacity ?? 1
    }, [
      e.link.shape === "bezier" ? (m(), x("path", {
        key: 0,
        d: `M${A().x} ${A().y} Q ${u.value.x} ${u.value.y} ${B().x} ${B().y}`,
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": L(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, Ge)) : e.link.shape === "polyline" ? (m(), x("path", {
        key: 1,
        d: J(),
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": L(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, je)) : (m(), x("line", {
        key: 2,
        x1: A().x,
        y1: A().y,
        x2: B().x,
        y2: B().y,
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": L(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, He)),
      t("defs", null, [
        t("marker", {
          id: `arrow-${e.link.id}`,
          markerUnits: "userSpaceOnUse",
          orient: "auto-start-reverse",
          markerWidth: "12",
          markerHeight: "12",
          viewBox: "0 0 10 10",
          refX: "10",
          refY: "5"
        }, [
          t("polygon", {
            points: "0,2 0,8 10,5",
            fill: e.link.color || "#6366f1"
          }, null, 8, Xe)
        ], 8, Pe)
      ]),
      e.link.label ? (m(), x("text", {
        key: 3,
        x: S().x,
        y: S().y - 14,
        "text-anchor": "middle",
        "font-family": "system-ui, sans-serif",
        "font-size": "12",
        fill: e.link.color || "#6366f1",
        style: { "pointer-events": "none", "user-select": "none" }
      }, z(e.link.label), 9, Je)) : j("", !0),
      e.editable && e.link.shape !== "polyline" ? (m(), x("g", Ye, [
        t("line", {
          x1: A().x,
          y1: A().y,
          x2: u.value.x,
          y2: u.value.y,
          stroke: "#e5e7eb",
          "stroke-dasharray": "4"
        }, null, 8, qe),
        t("line", {
          x1: u.value.x,
          y1: u.value.y,
          x2: B().x,
          y2: B().y,
          stroke: "#e5e7eb",
          "stroke-dasharray": "4"
        }, null, 8, Qe),
        t("circle", {
          cx: u.value.x,
          cy: u.value.y,
          r: "8",
          fill: "#6366f1",
          stroke: "#fff",
          "stroke-width": "2",
          class: "grab",
          onClick: b,
          onMousedown: n,
          onTouchstart: n,
          onMousemove: l,
          onTouchmove: l,
          onMouseup: g,
          onTouchend: g
        }, null, 40, Ke)
      ])) : j("", !0),
      e.editable && e.link.shape === "polyline" ? (m(), x("g", Ze, [
        t("circle", {
          cx: S().x,
          cy: S().y,
          r: "5",
          fill: "#6366f1",
          stroke: "#fff",
          "stroke-width": "2",
          class: "grab",
          onClick: b
        }, null, 8, _e)
      ])) : j("", !0),
      e.selected ? (m(), x("g", et, [
        t("rect", {
          x: u.value.x - 42,
          y: u.value.y - 70,
          width: "84",
          height: "22",
          rx: "5",
          fill: "#0f172a"
        }, null, 8, tt),
        t("rect", {
          x: u.value.x - 41,
          y: u.value.y - 69,
          width: "26",
          height: "20",
          rx: "3",
          fill: e.link.shape === "straight" || !e.link.shape ? "#3b82f6" : "#1e293b",
          class: "button",
          onClick: w[0] || (w[0] = (I) => v("straight"))
        }, null, 8, ot),
        t("line", {
          x1: u.value.x - 35,
          y1: u.value.y - 59,
          x2: u.value.x - 19,
          y2: u.value.y - 59,
          stroke: "#fff",
          "stroke-width": "2",
          style: { "pointer-events": "none" }
        }, null, 8, nt),
        t("rect", {
          x: u.value.x - 13,
          y: u.value.y - 69,
          width: "26",
          height: "20",
          rx: "3",
          fill: e.link.shape === "bezier" ? "#3b82f6" : "#1e293b",
          class: "button",
          onClick: w[1] || (w[1] = (I) => v("bezier"))
        }, null, 8, lt),
        t("path", {
          d: `M${u.value.x - 8},${u.value.y - 55} Q${u.value.x},${u.value.y - 67} ${u.value.x + 8},${u.value.y - 55}`,
          fill: "none",
          stroke: "#fff",
          "stroke-width": "2",
          style: { "pointer-events": "none" }
        }, null, 8, it),
        t("rect", {
          x: u.value.x + 15,
          y: u.value.y - 69,
          width: "26",
          height: "20",
          rx: "3",
          fill: e.link.shape === "polyline" ? "#3b82f6" : "#1e293b",
          class: "button",
          onClick: w[2] || (w[2] = (I) => v("polyline"))
        }, null, 8, at),
        t("path", {
          d: `M${u.value.x + 19},${u.value.y - 55} L${u.value.x + 19},${u.value.y - 63} L${u.value.x + 37},${u.value.y - 63}`,
          fill: "none",
          stroke: "#fff",
          "stroke-width": "2",
          style: { "pointer-events": "none" }
        }, null, 8, st),
        t("rect", {
          x: u.value.x - 20,
          y: u.value.y - 42,
          width: "40",
          height: "20",
          rx: "4",
          fill: "#3b82f6",
          class: "button",
          onClick: U
        }, null, 8, dt),
        t("text", {
          x: u.value.x,
          y: u.value.y - 28,
          "text-anchor": "middle",
          class: "button btn-text",
          onClick: U
        }, z(e.labels.edit || "Edit"), 9, ut),
        t("rect", {
          x: u.value.x - 24,
          y: u.value.y + 14,
          width: "48",
          height: "20",
          rx: "4",
          fill: "#ef4444",
          class: "button",
          onClick: N
        }, null, 8, rt),
        t("text", {
          x: u.value.x,
          y: u.value.y + 28,
          "text-anchor": "middle",
          class: "button btn-text",
          onClick: N
        }, z(e.labels.remove || "Remove"), 9, ct)
      ])) : j("", !0)
    ], 8, Fe));
  }
}), vt = /* @__PURE__ */ T(ht, [["__scopeId", "data-v-0d60f231"]]), ft = ["width", "height", "viewBox"], kt = ["transform"], mt = ["width", "height", "fill"], re = /* @__PURE__ */ R({
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
  setup(e, { expose: k, emit: o }) {
    const a = e, d = o, s = W(null), y = W(-1), u = W(-1), n = W(!1), l = ne(
      () => a.fluid ? `0 0 ${a.width / a.scale} ${a.height / a.scale}` : `0 0 ${a.width} ${a.height}`
    ), g = ne(
      () => `scale(${a.fluid ? 1 : a.scale || 1})translate(0,0)`
    );
    function L() {
      return (/* @__PURE__ */ new Date()).getTime().toString(16) + Math.floor(Math.random() * 1e6).toString(16);
    }
    function N() {
      if (a.fluid && s.value) {
        const h = s.value.getBoundingClientRect();
        return { rWidth: h.width / a.width, rHeight: h.height / a.height };
      }
      return { rWidth: 1, rHeight: 1 };
    }
    function b(h) {
      return a.nodes.find(($) => $.id === h);
    }
    function v() {
      n.value || (y.value = -1, u.value = -1);
    }
    function U(h) {
      d("editNode", h);
    }
    function D(h) {
      d("editLink", h);
    }
    function A(h) {
      const $ = a.nodes.find((M) => M.id === h.id);
      $ && ($.point.x = h.x, $.point.y = h.y);
    }
    function B(h) {
      const $ = a.links.find((M) => M.id === h.id);
      $ && ($.point.x = h.x, $.point.y = h.y);
    }
    function J(h) {
      const $ = a.links.find((M) => M.id === h.id);
      $ && ($.shape = h.shape);
    }
    function S(h) {
      d("nodeClicked", h);
    }
    function c(h) {
      d("linkClicked", h);
    }
    function w(h) {
      y.value = h;
    }
    function I(h) {
      u.value = h;
    }
    function H() {
      n.value = !n.value;
    }
    function Y(h) {
      const $ = a.nodes.find((P) => P.id === y.value), M = a.nodes.find((P) => P.id === h);
      !$ || !M || (d("linkAdded", {
        id: L(),
        source: y.value,
        destination: h,
        point: {
          x: ($.point.x + M.point.x) * 0.5,
          y: ($.point.y + M.point.y) * 0.5
        }
      }), n.value = !1, y.value = -1);
    }
    function Q(h) {
      d("linkRemoved", h);
    }
    function K(h) {
      d("nodeRemoved", h), n.value = !1;
    }
    function Z(h) {
      a.editable && d("nodeCopied", {
        id: L(),
        content: { ...h.content },
        width: h.width,
        height: h.height,
        point: { x: h.point.x + 30, y: h.point.y + 30 },
        shape: h.shape,
        stroke: h.stroke,
        strokeWeight: h.strokeWeight
      });
    }
    return k({ updateNodeLocation: A, updateLinkLocation: B, commitDest: Y }), (h, $) => (m(), x("div", {
      id: "svg-diagram-show-area",
      class: "scrollXY",
      ref_key: "field",
      ref: s
    }, [
      (m(), x("svg", {
        width: e.fluid ? "100%" : e.width,
        height: e.fluid ? "100%" : e.height,
        viewBox: l.value,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        $[0] || ($[0] = ve('<defs><pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"></path></pattern><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="url(#smallGrid)"></rect><path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"></path></pattern></defs>', 1)),
        t("g", { transform: g.value }, [
          t("rect", {
            x: "0",
            y: "0",
            width: e.width,
            height: e.height,
            fill: e.showGrid ? "url(#grid)" : e.background,
            onClick: v
          }, null, 8, mt),
          (m(!0), x(le, null, ie(e.nodes, (M) => (m(), X(Te, {
            node: M,
            selected: M.id === y.value,
            key: M.id,
            createLinkMode: n.value,
            editable: e.editable,
            labels: e.labels,
            rWidth: N().rWidth,
            rHeight: N().rHeight,
            scale: e.scale,
            onEditNode: U,
            onClick: S,
            onSelect: w,
            onCopy: Z,
            onUpdateLocation: A,
            onToggleSelect: H,
            onCommitDest: Y,
            onRemove: K
          }, null, 8, ["node", "selected", "createLinkMode", "editable", "labels", "rWidth", "rHeight", "scale"]))), 128)),
          (m(!0), x(le, null, ie(e.links, (M) => (m(), X(vt, {
            link: M,
            selected: M.id === u.value,
            key: M.id,
            source: b(M.source),
            destination: b(M.destination),
            editable: e.editable,
            labels: e.labels,
            rWidth: N().rWidth,
            rHeight: N().rHeight,
            scale: e.scale,
            onEditLink: D,
            onClick: c,
            onSelect: I,
            onUpdateLocation: B,
            onChangeShape: J,
            onRemove: Q
          }, null, 8, ["link", "selected", "source", "destination", "editable", "labels", "rWidth", "rHeight", "scale"]))), 128))
        ], 8, kt)
      ], 8, ft))
    ], 512));
  }
}), yt = { class: "form" }, gt = { class: "section" }, pt = { class: "field-row" }, xt = { class: "field-row" }, bt = { class: "section" }, wt = { class: "field-row three-col" }, $t = { class: "field-group" }, Vt = { class: "section" }, Ct = { class: "field-row three-col" }, St = {
  key: 0,
  class: "field-row two-col"
}, Lt = { class: "section" }, Mt = { class: "field-row three-col" }, Wt = { class: "field-group" }, Nt = { class: "field-group" }, At = { class: "field-row" }, It = /* @__PURE__ */ R({
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
  setup(e, { expose: k, emit: o }) {
    const a = e, d = o, s = W({ ...a.node, content: { ...a.node.content } });
    q(() => a.node, (n) => {
      s.value = { ...n, content: { ...n.content } };
    }, { deep: !0 });
    function y() {
      d("ok", s.value);
    }
    function u() {
      d("cancel");
    }
    return k({ newNode: s }), (n, l) => {
      const g = E("VInput"), L = E("VSelect"), N = E("VButton"), b = E("VModal");
      return m(), X(b, {
        isActive: e.isActive,
        title: "Node Properties",
        onClickModal: u
      }, {
        footer: p(() => [
          f(N, {
            variant: "primary",
            onClick: y
          }, {
            default: p(() => [...l[23] || (l[23] = [
              O("Save", -1)
            ])]),
            _: 1
          }),
          f(N, {
            variant: "danger",
            onClick: u
          }, {
            default: p(() => [...l[24] || (l[24] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: p(() => [
          t("div", yt, [
            t("section", gt, [
              l[14] || (l[14] = t("h3", { class: "section-title" }, "Content", -1)),
              t("div", pt, [
                f(g, {
                  modelValue: s.value.content.text,
                  "onUpdate:modelValue": l[0] || (l[0] = (v) => s.value.content.text = v),
                  label: "Label",
                  placeholder: "Node label"
                }, null, 8, ["modelValue"])
              ]),
              t("div", xt, [
                f(g, {
                  modelValue: s.value.content.url,
                  "onUpdate:modelValue": l[1] || (l[1] = (v) => s.value.content.url = v),
                  label: "URL (optional)",
                  placeholder: "https://..."
                }, null, 8, ["modelValue"])
              ])
            ]),
            t("section", bt, [
              l[17] || (l[17] = t("h3", { class: "section-title" }, "Typography", -1)),
              t("div", wt, [
                f(g, {
                  type: "number",
                  modelValue: s.value.content.fontSize,
                  "onUpdate:modelValue": l[2] || (l[2] = (v) => s.value.content.fontSize = v),
                  label: "Font size",
                  placeholder: "13"
                }, null, 8, ["modelValue"]),
                t("div", $t, [
                  l[15] || (l[15] = t("label", { class: "field-label" }, "Font color", -1)),
                  f(g, {
                    type: "color",
                    modelValue: s.value.content.fontColor,
                    "onUpdate:modelValue": l[3] || (l[3] = (v) => s.value.content.fontColor = v)
                  }, null, 8, ["modelValue"])
                ]),
                f(L, {
                  modelValue: s.value.content.fontWeight,
                  "onUpdate:modelValue": l[4] || (l[4] = (v) => s.value.content.fontWeight = v),
                  label: "Weight"
                }, {
                  default: p(() => [...l[16] || (l[16] = [
                    t("option", { value: "normal" }, "Normal", -1),
                    t("option", { value: "bold" }, "Bold", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            t("section", Vt, [
              l[19] || (l[19] = t("h3", { class: "section-title" }, "Shape & Size", -1)),
              t("div", Ct, [
                f(L, {
                  modelValue: s.value.shape,
                  "onUpdate:modelValue": l[5] || (l[5] = (v) => s.value.shape = v),
                  label: "Shape"
                }, {
                  default: p(() => [...l[18] || (l[18] = [
                    t("option", { value: "rectangle" }, "Rectangle", -1),
                    t("option", { value: "ellipse" }, "Ellipse", -1),
                    t("option", { value: "diamond" }, "Diamond", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                f(g, {
                  type: "number",
                  modelValue: s.value.width,
                  "onUpdate:modelValue": l[6] || (l[6] = (v) => s.value.width = v),
                  label: "Width",
                  placeholder: "150"
                }, null, 8, ["modelValue"]),
                f(g, {
                  type: "number",
                  modelValue: s.value.height,
                  "onUpdate:modelValue": l[7] || (l[7] = (v) => s.value.height = v),
                  label: "Height",
                  placeholder: "60"
                }, null, 8, ["modelValue"])
              ]),
              s.value.shape === "rectangle" ? (m(), x("div", St, [
                f(g, {
                  type: "number",
                  modelValue: s.value.rx,
                  "onUpdate:modelValue": l[8] || (l[8] = (v) => s.value.rx = v),
                  label: "Corner radius X",
                  placeholder: "6"
                }, null, 8, ["modelValue"]),
                f(g, {
                  type: "number",
                  modelValue: s.value.ry,
                  "onUpdate:modelValue": l[9] || (l[9] = (v) => s.value.ry = v),
                  label: "Corner radius Y",
                  placeholder: "6"
                }, null, 8, ["modelValue"])
              ])) : j("", !0)
            ]),
            t("section", Lt, [
              l[22] || (l[22] = t("h3", { class: "section-title" }, "Appearance", -1)),
              t("div", Mt, [
                t("div", Wt, [
                  l[20] || (l[20] = t("label", { class: "field-label" }, "Fill color", -1)),
                  f(g, {
                    type: "color",
                    modelValue: s.value.content.color,
                    "onUpdate:modelValue": l[10] || (l[10] = (v) => s.value.content.color = v)
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Nt, [
                  l[21] || (l[21] = t("label", { class: "field-label" }, "Stroke color", -1)),
                  f(g, {
                    type: "color",
                    modelValue: s.value.stroke,
                    "onUpdate:modelValue": l[11] || (l[11] = (v) => s.value.stroke = v)
                  }, null, 8, ["modelValue"])
                ]),
                f(g, {
                  type: "number",
                  modelValue: s.value.strokeWeight,
                  "onUpdate:modelValue": l[12] || (l[12] = (v) => s.value.strokeWeight = v),
                  label: "Stroke weight",
                  placeholder: "1"
                }, null, 8, ["modelValue"])
              ]),
              t("div", At, [
                f(g, {
                  type: "number",
                  modelValue: s.value.opacity,
                  "onUpdate:modelValue": l[13] || (l[13] = (v) => s.value.opacity = v),
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
}), ae = /* @__PURE__ */ T(It, [["__scopeId", "data-v-72b9ce2c"]]), Bt = { class: "form" }, Ot = { class: "section" }, Ut = { class: "section" }, Et = { class: "field-row two-col" }, Dt = { class: "field-row two-col" }, zt = { class: "section" }, Rt = { class: "field-row two-col" }, Tt = { class: "field-group" }, Ft = /* @__PURE__ */ R({
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
  setup(e, { emit: k }) {
    const o = e, a = k, d = W({ ...o.link.content });
    q(() => o.link, (u) => {
      d.value = { ...u.content };
    }, { deep: !0 });
    function s() {
      a("ok", { id: o.link.id, content: { ...d.value } });
    }
    function y() {
      a("cancel");
    }
    return (u, n) => {
      const l = E("VInput"), g = E("VSelect"), L = E("VButton"), N = E("VModal");
      return m(), X(N, {
        isActive: e.isActive,
        title: "Link Properties",
        onClickModal: y
      }, {
        footer: p(() => [
          f(L, {
            variant: "primary",
            onClick: s
          }, {
            default: p(() => [...n[14] || (n[14] = [
              O("Save", -1)
            ])]),
            _: 1
          }),
          f(L, {
            variant: "danger",
            onClick: y
          }, {
            default: p(() => [...n[15] || (n[15] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: p(() => [
          t("div", Bt, [
            t("section", Ot, [
              n[7] || (n[7] = t("h3", { class: "section-title" }, "Label", -1)),
              f(l, {
                modelValue: d.value.label,
                "onUpdate:modelValue": n[0] || (n[0] = (b) => d.value.label = b),
                label: "Text label (optional)",
                placeholder: "Describe this link..."
              }, null, 8, ["modelValue"])
            ]),
            t("section", Ut, [
              n[11] || (n[11] = t("h3", { class: "section-title" }, "Line Style", -1)),
              t("div", Et, [
                f(g, {
                  modelValue: d.value.shape,
                  "onUpdate:modelValue": n[1] || (n[1] = (b) => d.value.shape = b),
                  label: "Line shape"
                }, {
                  default: p(() => [...n[8] || (n[8] = [
                    t("option", { value: "straight" }, "Straight", -1),
                    t("option", { value: "bezier" }, "Bezier curve", -1),
                    t("option", { value: "polyline" }, "Polyline (折れ線)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                f(g, {
                  modelValue: d.value.pattern,
                  "onUpdate:modelValue": n[2] || (n[2] = (b) => d.value.pattern = b),
                  label: "Line pattern"
                }, {
                  default: p(() => [...n[9] || (n[9] = [
                    t("option", { value: "solid" }, "Solid", -1),
                    t("option", { value: "dash" }, "Dashed", -1),
                    t("option", { value: "dot" }, "Dotted", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              t("div", Dt, [
                f(l, {
                  type: "number",
                  modelValue: d.value.strokeWidth,
                  "onUpdate:modelValue": n[3] || (n[3] = (b) => d.value.strokeWidth = b),
                  label: "Stroke width",
                  placeholder: "2"
                }, null, 8, ["modelValue"]),
                f(g, {
                  modelValue: d.value.arrow,
                  "onUpdate:modelValue": n[4] || (n[4] = (b) => d.value.arrow = b),
                  label: "Arrow"
                }, {
                  default: p(() => [...n[10] || (n[10] = [
                    t("option", { value: "none" }, "None", -1),
                    t("option", { value: "dest" }, "→ Destination", -1),
                    t("option", { value: "src" }, "← Source", -1),
                    t("option", { value: "both" }, "↔ Both", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            t("section", zt, [
              n[13] || (n[13] = t("h3", { class: "section-title" }, "Appearance", -1)),
              t("div", Rt, [
                t("div", Tt, [
                  n[12] || (n[12] = t("label", { class: "field-label" }, "Color", -1)),
                  f(l, {
                    type: "color",
                    modelValue: d.value.color,
                    "onUpdate:modelValue": n[5] || (n[5] = (b) => d.value.color = b)
                  }, null, 8, ["modelValue"])
                ]),
                f(l, {
                  type: "number",
                  modelValue: d.value.opacity,
                  "onUpdate:modelValue": n[6] || (n[6] = (b) => d.value.opacity = b),
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
}), Gt = /* @__PURE__ */ T(Ft, [["__scopeId", "data-v-4852c42d"]]), jt = /* @__PURE__ */ R({
  __name: "InputModal",
  props: { isActive: Boolean, text: String },
  emits: ["ok", "cancel"],
  setup(e, { emit: k }) {
    const o = e, a = k, d = W("");
    q(() => o.text, (u) => {
      d.value = u ?? "";
    });
    function s() {
      a("ok", { text: d.value });
    }
    function y() {
      a("cancel");
    }
    return (u, n) => {
      const l = E("VButton"), g = E("VModal");
      return m(), X(g, {
        isActive: e.isActive,
        title: "Import / Export JSON",
        onClickModal: y
      }, {
        footer: p(() => [
          f(l, {
            variant: "primary",
            onClick: s
          }, {
            default: p(() => [...n[1] || (n[1] = [
              O("Import", -1)
            ])]),
            _: 1
          }),
          f(l, { onClick: y }, {
            default: p(() => [...n[2] || (n[2] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: p(() => [
          fe(t("textarea", {
            class: "editor",
            "onUpdate:modelValue": n[0] || (n[0] = (L) => d.value = L),
            placeholder: "Paste JSON here..."
          }, null, 512), [
            [ke, d.value]
          ])
        ]),
        _: 1
      }, 8, ["isActive"]);
    };
  }
}), Ht = /* @__PURE__ */ T(jt, [["__scopeId", "data-v-93c54f18"]]), Pt = { class: "message" }, Xt = /* @__PURE__ */ R({
  __name: "AskModal",
  props: { isActive: Boolean },
  emits: ["ok", "cancel"],
  setup(e, { emit: k }) {
    const o = k;
    function a() {
      o("ok", !0);
    }
    function d() {
      o("cancel");
    }
    return (s, y) => {
      const u = E("VButton"), n = E("VModal");
      return m(), X(n, {
        isActive: e.isActive,
        title: "Confirm",
        onClickModal: d
      }, {
        footer: p(() => [
          f(u, {
            variant: "danger",
            onClick: a
          }, {
            default: p(() => [...y[0] || (y[0] = [
              O("OK", -1)
            ])]),
            _: 1
          }),
          f(u, { onClick: d }, {
            default: p(() => [...y[1] || (y[1] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: p(() => [
          t("p", Pt, [
            _(s.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["isActive"]);
    };
  }
}), Jt = /* @__PURE__ */ T(Xt, [["__scopeId", "data-v-1e83d362"]]), Yt = { class: "form" }, qt = { class: "section" }, Qt = { class: "field-row two-col" }, Kt = { class: "section" }, Zt = { class: "field-row" }, _t = { class: "toggles" }, eo = /* @__PURE__ */ R({
  __name: "SettingsModal",
  props: {
    isActive: { type: Boolean, default: !1 },
    settings: {
      type: Object,
      default: () => ({ width: 1500, height: 1e3, scale: "1", isFluid: !1, showGrid: !1 })
    }
  },
  emits: ["ok", "cancel"],
  setup(e, { emit: k }) {
    const o = e, a = k, d = oe({ width: 0, height: 0, scale: "1", isFluid: !1, showGrid: !1 });
    q(() => o.isActive, (u) => {
      u && Object.assign(d, o.settings);
    });
    function s() {
      a("ok", { ...d });
    }
    function y() {
      a("cancel");
    }
    return (u, n) => {
      const l = E("VInput"), g = E("VSelect"), L = E("VCkbox"), N = E("VButton"), b = E("VModal");
      return m(), X(b, {
        isActive: e.isActive,
        title: "Diagram Settings",
        onClickModal: y
      }, {
        footer: p(() => [
          f(N, {
            variant: "primary",
            onClick: s
          }, {
            default: p(() => [...n[10] || (n[10] = [
              O("Save", -1)
            ])]),
            _: 1
          }),
          f(N, {
            variant: "danger",
            onClick: y
          }, {
            default: p(() => [...n[11] || (n[11] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: p(() => [
          t("div", Yt, [
            t("section", qt, [
              n[5] || (n[5] = t("h3", { class: "section-title" }, "Canvas size", -1)),
              t("div", Qt, [
                f(l, {
                  type: "number",
                  modelValue: d.width,
                  "onUpdate:modelValue": n[0] || (n[0] = (v) => d.width = v),
                  label: "Width"
                }, null, 8, ["modelValue"]),
                f(l, {
                  type: "number",
                  modelValue: d.height,
                  "onUpdate:modelValue": n[1] || (n[1] = (v) => d.height = v),
                  label: "Height"
                }, null, 8, ["modelValue"])
              ])
            ]),
            t("section", Kt, [
              n[9] || (n[9] = t("h3", { class: "section-title" }, "Display", -1)),
              t("div", Zt, [
                f(g, {
                  modelValue: d.scale,
                  "onUpdate:modelValue": n[2] || (n[2] = (v) => d.scale = v),
                  label: "Scale"
                }, {
                  default: p(() => [...n[6] || (n[6] = [
                    t("option", { value: "0.5" }, "Small (50%)", -1),
                    t("option", { value: "1" }, "Medium (100%)", -1),
                    t("option", { value: "1.5" }, "Large (150%)", -1),
                    t("option", { value: "2" }, "XLarge (200%)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              t("div", _t, [
                f(L, {
                  modelValue: d.isFluid,
                  "onUpdate:modelValue": n[3] || (n[3] = (v) => d.isFluid = v)
                }, {
                  default: p(() => [...n[7] || (n[7] = [
                    O("Fluid (fill container)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                f(L, {
                  modelValue: d.showGrid,
                  "onUpdate:modelValue": n[4] || (n[4] = (v) => d.showGrid = v)
                }, {
                  default: p(() => [...n[8] || (n[8] = [
                    O("Show grid", -1)
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
}), to = /* @__PURE__ */ T(eo, [["__scopeId", "data-v-38c2be09"]]), oo = { id: "editor" }, no = { class: "toolbar" }, lo = { class: "toolbar-group" }, io = { class: "toolbar-group" }, ao = { class: "toolbar-group" }, so = /* @__PURE__ */ R({
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
  setup(e, { emit: k }) {
    const o = e, a = k, d = (i) => ({
      width: 2e3,
      height: 1e3,
      background: "#f8fafc",
      showGrid: !1,
      nodes: [],
      links: [],
      ...JSON.parse(JSON.stringify(i || {}))
    }), s = W(d(o.modelValue));
    let y = !1;
    q(() => o.modelValue, (i) => {
      y || !i || (s.value = d(i));
    }), q(s, (i) => {
      y = !0, a("update:modelValue", i), me(() => {
        y = !1;
      });
    }, { deep: !0 });
    const u = W(""), n = W(!1), l = W(!1), g = W(!1), L = W(!1), N = W(!1), b = W(!1), v = W(!1), U = oe({
      width: 1500,
      height: 1e3,
      isFluid: !1,
      scale: "1",
      showGrid: !1
    }), D = oe({
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
    }), A = oe({
      id: "",
      content: { color: "", pattern: "solid", arrow: "none", shape: "straight", strokeWidth: 2, label: "", opacity: 1 }
    });
    function B() {
      return (/* @__PURE__ */ new Date()).getTime().toString(16) + Math.floor(Math.random() * 1e6).toString(16);
    }
    function J() {
      s.value.nodes = [], s.value.links = [], b.value = !1;
    }
    function S() {
      n.value = !0;
    }
    function c() {
      n.value = !1, l.value = !1, g.value = !1, L.value = !1, b.value = !1, N.value = !1;
    }
    function w(i) {
      s.value.nodes.push({
        id: B(),
        content: {
          text: i.content.text,
          url: i.content.url,
          color: i.content.color || "#dbeafe",
          fontColor: i.content.fontColor || "#1e3a5f",
          fontSize: parseInt(i.content.fontSize, 10) || 13,
          fontWeight: i.content.fontWeight || "normal"
        },
        width: parseInt(i.width, 10) || 150,
        height: parseInt(i.height, 10) || 60,
        stroke: i.stroke || "#93c5fd",
        strokeWeight: parseFloat(i.strokeWeight) || 1,
        shape: i.shape || "rectangle",
        rx: parseInt(i.rx, 10) || 6,
        ry: parseInt(i.ry, 10) || 6,
        opacity: parseFloat(i.opacity) || 1,
        point: { x: 10, y: 100 + Math.random() * 100 }
      }), n.value = !1;
    }
    function I(i) {
      Object.assign(D, {
        id: i.id,
        shape: i.shape,
        stroke: i.stroke,
        strokeWeight: i.strokeWeight,
        width: i.width,
        height: i.height,
        rx: i.rx ?? 6,
        ry: i.ry ?? 6,
        opacity: i.opacity ?? 1
      }), Object.assign(D.content, {
        text: i.content.text,
        url: i.content.url,
        color: i.content.color,
        fontColor: i.content.fontColor || "#1e3a5f",
        fontSize: i.content.fontSize || 13,
        fontWeight: i.content.fontWeight || "normal"
      }), l.value = !0;
    }
    function H(i) {
      l.value = !1;
      const r = s.value.nodes.find((G) => G.id === i.id);
      r && (r.content.text = i.content.text, r.content.url = i.content.url, r.content.color = i.content.color, r.content.fontColor = i.content.fontColor, r.content.fontSize = parseInt(i.content.fontSize, 10) || 13, r.content.fontWeight = i.content.fontWeight, r.shape = i.shape, r.stroke = i.stroke, r.strokeWeight = parseFloat(i.strokeWeight) || 1, r.width = parseInt(i.width, 10), r.height = parseInt(i.height, 10), r.rx = parseInt(i.rx, 10) || 6, r.ry = parseInt(i.ry, 10) || 6, r.opacity = parseFloat(i.opacity) || 1, l.value = !1);
    }
    function Y(i) {
      A.id = i.id, Object.assign(A.content, {
        color: i.content.color,
        shape: i.content.shape,
        pattern: i.content.pattern,
        arrow: i.content.arrow,
        strokeWidth: i.content.strokeWidth ?? 2,
        label: i.content.label || "",
        opacity: i.content.opacity ?? 1
      }), g.value = !0;
    }
    function Q(i) {
      g.value = !1;
      const r = s.value.links.find((G) => G.id === i.id);
      r && (r.color = i.content.color, r.shape = i.content.shape, r.pattern = i.content.pattern, r.arrow = i.content.arrow, r.strokeWidth = parseFloat(i.content.strokeWidth) || 2, r.label = i.content.label, r.opacity = parseFloat(i.content.opacity) || 1, g.value = !1);
    }
    function K() {
      v.value = !1;
    }
    function Z(i) {
      a("nodeClicked", i);
    }
    function h(i) {
      a("linkClicked", i);
    }
    function $(i) {
      s.value.nodes = s.value.nodes.filter((r) => r.id !== i), s.value.links = s.value.links.filter((r) => r.source !== i && r.destination !== i), a("nodeRemoved", i);
    }
    function M(i) {
      s.value.links = s.value.links.filter((r) => r.id !== i), a("linkRemoved", i);
    }
    function P(i) {
      s.value.links.push(i);
    }
    function ee(i) {
      s.value.nodes.push(i);
    }
    function V() {
      L.value = !0, u.value = JSON.stringify(s.value, null, 2);
    }
    function C(i) {
      try {
        const r = JSON.parse(i.text);
        r && (s.value = r, L.value = !1);
      } catch (r) {
        alert("Invalid JSON: " + r.message);
      }
    }
    function F() {
      const i = document.getElementById("svg-diagram-show-area");
      if (!i) return;
      const r = new Blob([i.innerHTML], { type: "image/svg+xml" }), G = window.URL.createObjectURL(r), te = document.createElement("a");
      te.href = G, te.download = "diagram.svg", te.click();
    }
    function ce() {
      N.value = !0, U.width = s.value.width, U.height = s.value.height, U.showGrid = s.value.showGrid;
    }
    function he(i) {
      Object.assign(U, i), s.value.width = parseInt(U.width, 10), s.value.height = parseInt(U.height, 10), s.value.showGrid = U.showGrid, N.value = !1;
    }
    return (i, r) => {
      const G = E("VButton");
      return m(), x("div", oo, [
        t("div", no, [
          t("div", lo, [
            v.value ? (m(), x(le, { key: 1 }, [
              f(G, {
                variant: "primary",
                onClick: S
              }, {
                default: p(() => [...r[3] || (r[3] = [
                  O("＋ New Node", -1)
                ])]),
                _: 1
              }),
              f(G, { onClick: K }, {
                default: p(() => [...r[4] || (r[4] = [
                  O("✓ Done", -1)
                ])]),
                _: 1
              })
            ], 64)) : (m(), X(G, {
              key: 0,
              variant: "primary",
              onClick: r[0] || (r[0] = (te) => v.value = !0)
            }, {
              default: p(() => [...r[2] || (r[2] = [
                O("✏️ Edit", -1)
              ])]),
              _: 1
            }))
          ]),
          t("div", io, [
            f(G, { onClick: V }, {
              default: p(() => [...r[5] || (r[5] = [
                O("⬆ Import / Export", -1)
              ])]),
              _: 1
            }),
            f(G, { onClick: F }, {
              default: p(() => [...r[6] || (r[6] = [
                O("⬇ Download SVG", -1)
              ])]),
              _: 1
            })
          ]),
          t("div", ao, [
            f(G, { onClick: ce }, {
              default: p(() => [...r[7] || (r[7] = [
                O("⚙ Settings", -1)
              ])]),
              _: 1
            }),
            f(G, {
              variant: "danger",
              onClick: r[1] || (r[1] = (te) => b.value = !0)
            }, {
              default: p(() => [...r[8] || (r[8] = [
                O("🗑 Clear", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        f(Jt, {
          isActive: b.value,
          onOk: J,
          onCancel: c
        }, {
          default: p(() => [...r[9] || (r[9] = [
            O(" Clear the entire diagram? This cannot be undone. ", -1)
          ])]),
          _: 1
        }, 8, ["isActive"]),
        f(ae, {
          node: { content: {} },
          isActive: n.value,
          onOk: w,
          onCancel: c
        }, null, 8, ["isActive"]),
        f(ae, {
          node: D,
          isActive: l.value,
          onOk: H,
          onCancel: c
        }, null, 8, ["node", "isActive"]),
        f(Gt, {
          link: A,
          isActive: g.value,
          onOk: Q,
          onCancel: c
        }, null, 8, ["link", "isActive"]),
        f(Ht, {
          text: u.value,
          isActive: L.value,
          onOk: C,
          onCancel: c
        }, null, 8, ["text", "isActive"]),
        f(to, {
          isActive: N.value,
          settings: U,
          onOk: he,
          onCancel: c
        }, null, 8, ["isActive", "settings"]),
        f(re, {
          width: s.value.width || 2e3,
          height: s.value.height || 1e3,
          fluid: U.isFluid,
          scale: U.scale,
          background: s.value.background || "#f8fafc",
          showGrid: s.value.showGrid,
          nodes: s.value.nodes,
          links: s.value.links,
          editable: v.value,
          labels: s.value.labels || { edit: "Edit", remove: "Remove", link: "Link", select: "Select", cancel: "Cancel", copy: "Copy" },
          onEditNode: I,
          onEditLink: Y,
          onNodeClicked: Z,
          onLinkClicked: h,
          onNodeRemoved: $,
          onLinkRemoved: M,
          onLinkAdded: P,
          onNodeCopied: ee
        }, null, 8, ["width", "height", "fluid", "scale", "background", "showGrid", "nodes", "links", "editable", "labels"])
      ]);
    };
  }
}), uo = /* @__PURE__ */ T(so, [["__scopeId", "data-v-66e2d983"]]), ro = /* @__PURE__ */ R({
  name: "VButton",
  __name: "VButton",
  props: { variant: { type: String, default: "default" } },
  emits: ["click"],
  setup(e, { emit: k }) {
    const o = k;
    return (a, d) => (m(), x("button", {
      class: ye(["btn", e.variant]),
      onClick: d[0] || (d[0] = (s) => o("click", s))
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), co = /* @__PURE__ */ T(ro, [["__scopeId", "data-v-5d1c5ded"]]), ho = { class: "toggle" }, vo = ["checked"], fo = { class: "toggle-label" };
let ko = 0;
const mo = /* @__PURE__ */ R({
  name: "VCkbox",
  __name: "VCkbox",
  props: { modelValue: Boolean },
  emits: ["update:modelValue"],
  setup(e, { emit: k }) {
    const o = `vckbox-${++ko}`, a = k;
    function d(s) {
      a("update:modelValue", s.target.checked);
    }
    return (s, y) => (m(), x("label", ho, [
      t("input", {
        class: "toggle-input",
        id: o,
        type: "checkbox",
        checked: e.modelValue,
        onChange: d
      }, null, 40, vo),
      y[0] || (y[0] = t("span", { class: "toggle-track" }, [
        t("span", { class: "toggle-thumb" })
      ], -1)),
      t("span", fo, [
        _(s.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), yo = /* @__PURE__ */ T(mo, [["__scopeId", "data-v-809530cf"]]), go = { class: "field" }, po = {
  key: 0,
  class: "field-label"
}, xo = ["type", "value", "placeholder"], bo = /* @__PURE__ */ R({
  name: "VInput",
  __name: "VInput",
  props: {
    type: String,
    modelValue: [String, Number],
    label: String,
    placeholder: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: k }) {
    const o = k;
    function a(d) {
      o("update:modelValue", d.target.value);
    }
    return (d, s) => (m(), x("div", go, [
      e.label ? (m(), x("label", po, z(e.label), 1)) : j("", !0),
      t("input", {
        type: e.type || "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: a
      }, null, 40, xo)
    ]));
  }
}), wo = /* @__PURE__ */ T(bo, [["__scopeId", "data-v-dc0bb474"]]), $o = {
  key: 0,
  id: "message"
}, Vo = { id: "content" }, Co = /* @__PURE__ */ R({
  name: "VMessage",
  __name: "VMessage",
  props: { content: String },
  setup(e) {
    const k = W(!1);
    return (o, a) => k.value ? j("", !0) : (m(), x("div", $o, [
      t("span", {
        class: "dismiss",
        onClick: a[0] || (a[0] = (d) => k.value = !0)
      }, "X"),
      t("div", Vo, z(e.content), 1)
    ]));
  }
}), So = /* @__PURE__ */ T(Co, [["__scopeId", "data-v-692a28e3"]]), Lo = { class: "card" }, Mo = { class: "card-header" }, Wo = { class: "card-title" }, No = { class: "card-body" }, Ao = {
  key: 0,
  class: "card-footer"
}, Io = /* @__PURE__ */ R({
  name: "VModal",
  __name: "VModal",
  props: { isActive: Boolean, title: { type: String, default: "" } },
  emits: ["clickModal"],
  setup(e) {
    return (k, o) => (m(), X(ge, { name: "modal" }, {
      default: p(() => [
        e.isActive ? (m(), x("div", {
          key: 0,
          class: "overlay",
          onClick: o[1] || (o[1] = pe((a) => k.$emit("clickModal"), ["self"]))
        }, [
          t("div", Lo, [
            t("div", Mo, [
              t("span", Wo, z(e.title), 1),
              t("button", {
                class: "close-btn",
                onClick: o[0] || (o[0] = (a) => k.$emit("clickModal"))
              }, "✕")
            ]),
            t("div", No, [
              _(k.$slots, "default", {}, void 0, !0)
            ]),
            k.$slots.footer ? (m(), x("div", Ao, [
              _(k.$slots, "footer", {}, void 0, !0)
            ])) : j("", !0)
          ])
        ])) : j("", !0)
      ]),
      _: 3
    }));
  }
}), Bo = /* @__PURE__ */ T(Io, [["__scopeId", "data-v-32575efa"]]), Oo = { class: "field" }, Uo = {
  key: 0,
  class: "field-label"
}, Eo = ["value", "multiple"], Do = {
  key: 0,
  value: null,
  disabled: ""
}, zo = /* @__PURE__ */ R({
  name: "VSelect",
  __name: "VSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: null },
    multiple: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: k }) {
    const o = k;
    function a(d) {
      o("update:modelValue", d.target.value);
    }
    return (d, s) => (m(), x("div", Oo, [
      e.label ? (m(), x("label", Uo, z(e.label), 1)) : j("", !0),
      t("select", {
        value: e.modelValue,
        multiple: e.multiple,
        onChange: a
      }, [
        e.placeholder ? (m(), x("option", Do, z(e.placeholder), 1)) : j("", !0),
        _(d.$slots, "default", {}, void 0, !0)
      ], 40, Eo)
    ]));
  }
}), Ro = /* @__PURE__ */ T(zo, [["__scopeId", "data-v-329e0566"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VButton: co,
  VCkbox: yo,
  VInput: wo,
  VMessage: So,
  VModal: Bo,
  VSelect: Ro
}, Symbol.toStringTag, { value: "Module" })), To = {
  install(e) {
    for (const k in se) {
      const o = se[k];
      e.component(o.name, o);
    }
  }
}, Go = {
  install(e) {
    e.use(To), e.component("Diagram", re), e.component("DiagramEditor", uo);
  }
};
export {
  re as Diagram,
  uo as DiagramEditor,
  Go as default
};
