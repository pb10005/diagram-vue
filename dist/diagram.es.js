import { defineComponent as T, ref as N, computed as ie, watch as Q, onBeforeUnmount as ue, openBlock as m, createElementBlock as b, createElementVNode as o, toDisplayString as R, createCommentVNode as X, createStaticVNode as fe, Fragment as ae, renderList as se, createBlock as q, resolveComponent as E, withCtx as x, createVNode as h, createTextVNode as O, withDirectives as ve, vModelText as ke, renderSlot as _, reactive as le, nextTick as me, normalizeClass as ye, Transition as ge, withModifiers as pe } from "vue";
function ce() {
  function e(v) {
    return v.touches ? [v.touches[0].pageX, v.touches[0].pageY] : [v.pageX, v.pageY];
  }
  return { getLocation: e };
}
const xe = ["opacity"], be = { key: 0 }, we = ["x", "y"], $e = ["x", "y"], Ve = ["x", "y", "fill"], Ce = ["x", "y"], Se = ["x", "y"], Le = ["x", "y"], Me = ["x", "y"], We = ["x", "y"], Ne = { key: 1 }, Ae = ["x", "y"], Ie = ["x", "y"], Be = ["cx", "cy", "rx", "ry", "fill", "stroke", "stroke-width"], Oe = ["points", "fill", "stroke", "stroke-width"], Ue = ["x", "y", "width", "height", "rx", "ry", "fill", "stroke", "stroke-width"], Ee = ["href"], De = ["x", "y", "fill", "font-size", "font-weight"], ze = ["x", "y", "fill", "font-size", "font-weight"], Re = /* @__PURE__ */ T({
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
  setup(e, { expose: v, emit: t }) {
    const a = e, d = t, { getLocation: s } = ce(), g = N(null), k = N({ x: 0, y: 0 }), n = N(a.node.point.x), l = N(a.node.point.y), p = ie(() => {
      var M;
      const $ = (M = a.node.content) == null ? void 0 : M.url;
      return $ && /^https?:\/\//i.test($) ? $ : "";
    }), L = ie(() => {
      const $ = n.value + a.node.width / 2, M = l.value + a.node.height / 2, F = a.node.width / 2, y = a.node.height / 2;
      return `${$},${M - y} ${$ + F},${M} ${$},${M + y} ${$ - F},${M}`;
    });
    Q(() => a.node, ($) => {
      n.value = $.point.x, l.value = $.point.y;
    });
    function A() {
      d("toggleSelect");
    }
    function w() {
      d("commitDest", a.node.id);
    }
    function u() {
      d("remove", a.node.id);
    }
    function D() {
      d("copy", a.node);
    }
    function f($) {
      if (d("click", a.node.id), !a.editable) return;
      d("select", a.node.id);
      const [M, F] = s($);
      k.value = { x: M, y: F }, g.value = { x: n.value, y: l.value }, document.addEventListener("mousemove", U), document.addEventListener("mouseup", z);
    }
    function U($) {
      if (!g.value) return;
      $.preventDefault();
      const [M, F] = s($);
      n.value = g.value.x + (M - k.value.x) / a.rWidth / parseFloat(a.scale), l.value = g.value.y + (F - k.value.y) / a.rHeight / parseFloat(a.scale), d("updateLocation", { id: a.node.id, x: n.value, y: l.value });
    }
    function z() {
      g.value = null, document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", z);
    }
    function j() {
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
    return ue(() => {
      document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", z);
    }), v({ safeUrl: p }), ($, M) => (m(), b("g", {
      opacity: e.node.opacity ?? 1
    }, [
      e.editable && e.selected ? (m(), b("g", be, [
        o("rect", {
          x: n.value + 2,
          y: l.value - 30,
          width: "48",
          height: "22",
          rx: "4",
          fill: "#3b82f6",
          class: "button",
          onClick: j
        }, null, 8, we),
        o("text", {
          x: n.value + 26,
          y: l.value - 15,
          class: "button btn-text",
          onClick: j
        }, R(e.labels.edit || "Edit"), 9, $e),
        o("rect", {
          x: n.value + 2,
          y: l.value + e.node.height + 6,
          width: "56",
          height: "22",
          rx: "4",
          fill: e.createLinkMode ? "#9ca3af" : "#6366f1",
          class: "button",
          onClick: A
        }, null, 8, Ve),
        o("text", {
          x: n.value + 30,
          y: l.value + e.node.height + 21,
          class: "button btn-text",
          onClick: A
        }, R(e.createLinkMode ? e.labels.cancel || "Cancel" : e.labels.link || "Link"), 9, Ce),
        o("rect", {
          x: n.value + 66,
          y: l.value - 30,
          width: "48",
          height: "22",
          rx: "4",
          fill: "#f59e0b",
          class: "button",
          onClick: D
        }, null, 8, Se),
        o("text", {
          x: n.value + 90,
          y: l.value - 15,
          class: "button btn-text",
          onClick: D
        }, R(e.labels.copy || "Copy"), 9, Le),
        o("rect", {
          x: n.value + 66,
          y: l.value + e.node.height + 6,
          width: "56",
          height: "22",
          rx: "4",
          fill: "#ef4444",
          class: "button",
          onClick: u
        }, null, 8, Me),
        o("text", {
          x: n.value + 94,
          y: l.value + e.node.height + 21,
          class: "button btn-text",
          onClick: u
        }, R(e.labels.remove || "Remove"), 9, We)
      ])) : X("", !0),
      e.editable && e.createLinkMode && !e.selected ? (m(), b("g", Ne, [
        o("rect", {
          x: n.value + 2,
          y: l.value - 30,
          width: "56",
          height: "22",
          rx: "4",
          fill: "#10b981",
          class: "button",
          onClick: w
        }, null, 8, Ae),
        o("text", {
          x: n.value + 30,
          y: l.value - 15,
          class: "button btn-text",
          onClick: w
        }, R(e.labels.select || "Select"), 9, Ie)
      ])) : X("", !0),
      e.node.shape === "ellipse" ? (m(), b("ellipse", {
        key: 2,
        class: "grab",
        cx: n.value + e.node.width / 2,
        cy: l.value + e.node.height / 2,
        rx: e.node.width / 2,
        ry: e.node.height / 2,
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: f,
        onMousedown: f,
        onMousemove: U,
        onTouchmove: U,
        onMouseup: z,
        onTouchend: z
      }, null, 40, Be)) : e.node.shape === "diamond" ? (m(), b("polygon", {
        key: 3,
        points: L.value,
        class: "grab",
        fill: e.node.content.color || "#dbeafe",
        stroke: e.node.stroke || "#93c5fd",
        "stroke-width": e.node.strokeWeight ?? 1,
        onTouchstart: f,
        onMousedown: f,
        onMousemove: U,
        onTouchmove: U,
        onMouseup: z,
        onTouchend: z
      }, null, 40, Oe)) : (m(), b("rect", {
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
        onTouchstart: f,
        onMousedown: f,
        onMousemove: U,
        onTouchmove: U,
        onMouseup: z,
        onTouchend: z
      }, null, 40, Ue)),
      p.value ? (m(), b("a", {
        key: 5,
        href: p.value,
        target: "_blank"
      }, [
        o("text", {
          x: n.value + e.node.width / 2,
          y: l.value + e.node.height / 2 + (e.node.content.fontSize ?? 13) / 3,
          fill: e.node.content.fontColor || "#1e3a5f",
          "font-family": "system-ui, sans-serif",
          "font-size": e.node.content.fontSize ?? 13,
          "font-weight": e.node.content.fontWeight || "normal",
          "text-anchor": "middle",
          "text-decoration": "underline",
          style: { "pointer-events": "none" }
        }, R(e.node.content.text), 9, De)
      ], 8, Ee)) : (m(), b("text", {
        key: 6,
        x: n.value + e.node.width / 2,
        y: l.value + e.node.height / 2 + (e.node.content.fontSize ?? 13) / 3,
        fill: e.node.content.fontColor || "#1e3a5f",
        "font-family": "system-ui, sans-serif",
        "font-size": e.node.content.fontSize ?? 13,
        "font-weight": e.node.content.fontWeight || "normal",
        "text-anchor": "middle",
        style: { "pointer-events": "none" }
      }, R(e.node.content.text), 9, ze))
    ], 8, xe));
  }
}), G = (e, v) => {
  const t = e.__vccOpts || e;
  for (const [a, d] of v)
    t[a] = d;
  return t;
}, Te = /* @__PURE__ */ G(Re, [["__scopeId", "data-v-a223d318"]]), Fe = ["opacity"], Ge = ["d", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], je = ["d", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], He = ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "stroke-dasharray", "marker-start", "marker-end"], Pe = ["id"], Xe = ["fill"], Je = ["x", "y", "fill"], Ye = { key: 4 }, qe = ["x1", "y1", "x2", "y2"], Qe = ["x1", "y1", "x2", "y2"], Ke = ["cx", "cy"], Ze = ["d"], _e = { key: 6 }, et = ["x", "y"], tt = ["x", "y", "fill"], ot = ["x1", "y1", "x2", "y2"], nt = ["x", "y", "fill"], lt = ["d"], it = ["x", "y", "fill"], at = ["d"], st = ["x", "y"], dt = ["x", "y"], rt = ["x", "y"], ut = ["x", "y"], ct = /* @__PURE__ */ T({
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
  setup(e, { emit: v }) {
    const t = e, a = v, { getLocation: d } = ce(), s = N(null), g = N({ x: 0, y: 0 }), k = N(t.link.point);
    function n(y) {
      a("click", t.link.id);
      const [I, B] = d(y);
      g.value = { x: I, y: B }, s.value = { x: k.value.x, y: k.value.y }, document.addEventListener("mousemove", l), document.addEventListener("mouseup", p);
    }
    function l(y) {
      if (!s.value) return;
      y.preventDefault();
      const [I, B] = d(y);
      k.value = {
        x: s.value.x + (I - g.value.x) / t.rWidth / parseFloat(t.scale),
        y: s.value.y + (B - g.value.y) / t.rHeight / parseFloat(t.scale)
      }, a("updateLocation", { id: t.link.id, x: k.value.x, y: k.value.y });
    }
    function p() {
      s.value = null, document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", p);
    }
    function L(y) {
      return y === "dash" ? "10,5" : y === "dot" ? "3,3" : "0";
    }
    function A() {
      a("remove", t.link.id);
    }
    function w() {
      a("select", t.link.id);
    }
    function u(y) {
      a("changeShape", { id: t.link.id, shape: y });
    }
    function D(y) {
      a("click", t.link.id), w();
    }
    function f() {
      return t.link.shape === "polyline" ? F() : k.value;
    }
    function U() {
      a("editLink", {
        id: t.link.id,
        content: {
          color: t.link.color || "#6366f1",
          shape: t.link.shape || "straight",
          pattern: t.link.pattern || "solid",
          arrow: t.link.arrow || "none",
          strokeWidth: t.link.strokeWidth ?? 2,
          label: t.link.label || ""
        }
      });
    }
    function z(y, I) {
      let B = I.x - y.point.x - y.width / 2, Y = I.y - y.point.y - y.height / 2;
      return B === 0 && (B = 0.01), Math.abs(Y / B) <= 1 ? B >= 0 ? { x: y.point.x + y.width, y: y.point.y + y.height / 2 } : { x: y.point.x, y: y.point.y + y.height / 2 } : Y >= 0 ? { x: y.point.x + y.width / 2, y: y.point.y + y.height } : { x: y.point.x + y.width / 2, y: y.point.y };
    }
    function j() {
      return z(t.source, k.value);
    }
    function $() {
      return z(t.destination, k.value);
    }
    function M() {
      const y = t.source.point.x + t.source.width / 2, I = t.source.point.y + t.source.height / 2, B = t.destination.point.x + t.destination.width / 2, Y = t.destination.point.y + t.destination.height / 2, K = B - y, Z = Y - I, c = Math.abs(K), W = Math.abs(Z), V = K >= 0, J = Z >= 0;
      if (W < 10) {
        const C = { x: V ? t.source.point.x + t.source.width : t.source.point.x, y: I }, S = { x: V ? t.destination.point.x : t.destination.point.x + t.destination.width, y: Y };
        if (Math.abs(C.y - S.y) < 2) return `M${C.x},${C.y} L${S.x},${S.y}`;
        const H = (C.x + S.x) / 2;
        return `M${C.x},${C.y} L${H},${C.y} L${H},${S.y} L${S.x},${S.y}`;
      }
      if (c < 10) {
        const C = { x: y, y: J ? t.source.point.y + t.source.height : t.source.point.y }, S = { x: B, y: J ? t.destination.point.y : t.destination.point.y + t.destination.height };
        if (Math.abs(C.x - S.x) < 2) return `M${C.x},${C.y} L${S.x},${S.y}`;
        const H = (C.y + S.y) / 2;
        return `M${C.x},${C.y} L${C.x},${H} L${S.x},${H} L${S.x},${S.y}`;
      }
      const ne = W / c;
      if (ne <= 0.5) {
        const C = { x: V ? t.source.point.x + t.source.width : t.source.point.x, y: I }, S = { x: V ? t.destination.point.x : t.destination.point.x + t.destination.width, y: Y }, H = (C.x + S.x) / 2;
        return `M${C.x},${C.y} L${H},${C.y} L${H},${S.y} L${S.x},${S.y}`;
      }
      if (ne >= 2) {
        const C = { x: y, y: J ? t.source.point.y + t.source.height : t.source.point.y }, S = { x: B, y: J ? t.destination.point.y : t.destination.point.y + t.destination.height }, H = (C.y + S.y) / 2;
        return `M${C.x},${C.y} L${C.x},${H} L${S.x},${H} L${S.x},${S.y}`;
      }
      const ee = { x: V ? t.source.point.x + t.source.width : t.source.point.x, y: I }, te = { x: B, y: J ? t.destination.point.y : t.destination.point.y + t.destination.height };
      return `M${ee.x},${ee.y} L${te.x},${ee.y} L${te.x},${te.y}`;
    }
    function F() {
      return t.link.shape === "polyline" ? {
        x: (t.source.point.x + t.source.width / 2 + t.destination.point.x + t.destination.width / 2) / 2,
        y: (t.source.point.y + t.source.height / 2 + t.destination.point.y + t.destination.height / 2) / 2
      } : k.value;
    }
    return ue(() => {
      document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", p);
    }), (y, I) => (m(), b("g", {
      opacity: e.link.opacity ?? 1
    }, [
      e.link.shape === "bezier" ? (m(), b("path", {
        key: 0,
        d: `M${j().x} ${j().y} Q ${k.value.x} ${k.value.y} ${$().x} ${$().y}`,
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": L(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, Ge)) : e.link.shape === "polyline" ? (m(), b("path", {
        key: 1,
        d: M(),
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": L(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, je)) : (m(), b("line", {
        key: 2,
        x1: j().x,
        y1: j().y,
        x2: $().x,
        y2: $().y,
        stroke: e.link.color || "#6366f1",
        "stroke-width": e.link.strokeWidth ?? 2,
        fill: "none",
        "stroke-dasharray": L(e.link.pattern),
        "marker-start": e.link.arrow === "src" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : "",
        "marker-end": e.link.arrow === "dest" || e.link.arrow === "both" ? `url(#arrow-${e.link.id})` : ""
      }, null, 8, He)),
      o("defs", null, [
        o("marker", {
          id: `arrow-${e.link.id}`,
          markerUnits: "userSpaceOnUse",
          orient: "auto-start-reverse",
          markerWidth: "12",
          markerHeight: "12",
          viewBox: "0 0 10 10",
          refX: "10",
          refY: "5"
        }, [
          o("polygon", {
            points: "0,2 0,8 10,5",
            fill: e.link.color || "#6366f1"
          }, null, 8, Xe)
        ], 8, Pe)
      ]),
      e.link.label ? (m(), b("text", {
        key: 3,
        x: F().x,
        y: F().y - 14,
        "text-anchor": "middle",
        "font-family": "system-ui, sans-serif",
        "font-size": "12",
        fill: e.link.color || "#6366f1",
        style: { "pointer-events": "none", "user-select": "none" }
      }, R(e.link.label), 9, Je)) : X("", !0),
      e.editable && e.link.shape !== "polyline" ? (m(), b("g", Ye, [
        o("line", {
          x1: j().x,
          y1: j().y,
          x2: k.value.x,
          y2: k.value.y,
          stroke: "#e5e7eb",
          "stroke-dasharray": "4"
        }, null, 8, qe),
        o("line", {
          x1: k.value.x,
          y1: k.value.y,
          x2: $().x,
          y2: $().y,
          stroke: "#e5e7eb",
          "stroke-dasharray": "4"
        }, null, 8, Qe),
        o("circle", {
          cx: k.value.x,
          cy: k.value.y,
          r: "8",
          fill: "#6366f1",
          stroke: "#fff",
          "stroke-width": "2",
          class: "grab",
          onClick: w,
          onMousedown: n,
          onTouchstart: n,
          onMousemove: l,
          onTouchmove: l,
          onMouseup: p,
          onTouchend: p
        }, null, 40, Ke)
      ])) : X("", !0),
      e.editable && e.link.shape === "polyline" ? (m(), b("path", {
        key: 5,
        d: M(),
        stroke: "transparent",
        "stroke-width": "12",
        fill: "none",
        style: { cursor: "pointer" },
        onMousedown: D
      }, null, 40, Ze)) : X("", !0),
      e.selected ? (m(), b("g", _e, [
        o("rect", {
          x: f().x - 42,
          y: f().y - 70,
          width: "84",
          height: "22",
          rx: "5",
          fill: "#0f172a"
        }, null, 8, et),
        o("rect", {
          x: f().x - 41,
          y: f().y - 69,
          width: "26",
          height: "20",
          rx: "3",
          fill: e.link.shape === "straight" || !e.link.shape ? "#3b82f6" : "#1e293b",
          class: "button",
          onClick: I[0] || (I[0] = (B) => u("straight"))
        }, null, 8, tt),
        o("line", {
          x1: f().x - 35,
          y1: f().y - 59,
          x2: f().x - 19,
          y2: f().y - 59,
          stroke: "#fff",
          "stroke-width": "2",
          style: { "pointer-events": "none" }
        }, null, 8, ot),
        o("rect", {
          x: f().x - 13,
          y: f().y - 69,
          width: "26",
          height: "20",
          rx: "3",
          fill: e.link.shape === "bezier" ? "#3b82f6" : "#1e293b",
          class: "button",
          onClick: I[1] || (I[1] = (B) => u("bezier"))
        }, null, 8, nt),
        o("path", {
          d: `M${f().x - 8},${f().y - 55} Q${f().x},${f().y - 67} ${f().x + 8},${f().y - 55}`,
          fill: "none",
          stroke: "#fff",
          "stroke-width": "2",
          style: { "pointer-events": "none" }
        }, null, 8, lt),
        o("rect", {
          x: f().x + 15,
          y: f().y - 69,
          width: "26",
          height: "20",
          rx: "3",
          fill: e.link.shape === "polyline" ? "#3b82f6" : "#1e293b",
          class: "button",
          onClick: I[2] || (I[2] = (B) => u("polyline"))
        }, null, 8, it),
        o("path", {
          d: `M${f().x + 19},${f().y - 55} L${f().x + 19},${f().y - 63} L${f().x + 37},${f().y - 63}`,
          fill: "none",
          stroke: "#fff",
          "stroke-width": "2",
          style: { "pointer-events": "none" }
        }, null, 8, at),
        o("rect", {
          x: f().x - 20,
          y: f().y - 42,
          width: "40",
          height: "20",
          rx: "4",
          fill: "#3b82f6",
          class: "button",
          onClick: U
        }, null, 8, st),
        o("text", {
          x: f().x,
          y: f().y - 28,
          "text-anchor": "middle",
          class: "button btn-text",
          onClick: U
        }, R(e.labels.edit || "Edit"), 9, dt),
        o("rect", {
          x: f().x - 24,
          y: f().y + 14,
          width: "48",
          height: "20",
          rx: "4",
          fill: "#ef4444",
          class: "button",
          onClick: A
        }, null, 8, rt),
        o("text", {
          x: f().x,
          y: f().y + 28,
          "text-anchor": "middle",
          class: "button btn-text",
          onClick: A
        }, R(e.labels.remove || "Remove"), 9, ut)
      ])) : X("", !0)
    ], 8, Fe));
  }
}), ht = /* @__PURE__ */ G(ct, [["__scopeId", "data-v-d9c0c250"]]), ft = ["width", "height", "viewBox"], vt = ["transform"], kt = ["width", "height", "fill"], he = /* @__PURE__ */ T({
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
  setup(e, { expose: v, emit: t }) {
    const a = e, d = t, s = N(null), g = N(-1), k = N(-1), n = N(!1), l = ie(
      () => a.fluid ? `0 0 ${a.width / a.scale} ${a.height / a.scale}` : `0 0 ${a.width} ${a.height}`
    ), p = ie(
      () => `scale(${a.fluid ? 1 : a.scale || 1})translate(0,0)`
    );
    function L() {
      return (/* @__PURE__ */ new Date()).getTime().toString(16) + Math.floor(Math.random() * 1e6).toString(16);
    }
    function A() {
      if (a.fluid && s.value) {
        const c = s.value.getBoundingClientRect();
        return { rWidth: c.width / a.width, rHeight: c.height / a.height };
      }
      return { rWidth: 1, rHeight: 1 };
    }
    function w(c) {
      return a.nodes.find((W) => W.id === c);
    }
    function u() {
      n.value || (g.value = -1, k.value = -1);
    }
    function D(c) {
      d("editNode", c);
    }
    function f(c) {
      d("editLink", c);
    }
    function U(c) {
      const W = a.nodes.find((V) => V.id === c.id);
      W && (W.point.x = c.x, W.point.y = c.y);
    }
    function z(c) {
      const W = a.links.find((V) => V.id === c.id);
      W && (W.point.x = c.x, W.point.y = c.y);
    }
    function j(c) {
      const W = a.links.find((V) => V.id === c.id);
      W && (W.shape = c.shape);
    }
    function $(c) {
      d("nodeClicked", c);
    }
    function M(c) {
      d("linkClicked", c);
    }
    function F(c) {
      g.value = c;
    }
    function y(c) {
      k.value = c;
    }
    function I() {
      n.value = !n.value;
    }
    function B(c) {
      const W = a.nodes.find((J) => J.id === g.value), V = a.nodes.find((J) => J.id === c);
      !W || !V || (d("linkAdded", {
        id: L(),
        source: g.value,
        destination: c,
        point: {
          x: (W.point.x + V.point.x) * 0.5,
          y: (W.point.y + V.point.y) * 0.5
        }
      }), n.value = !1, g.value = -1);
    }
    function Y(c) {
      d("linkRemoved", c);
    }
    function K(c) {
      d("nodeRemoved", c), n.value = !1;
    }
    function Z(c) {
      a.editable && d("nodeCopied", {
        id: L(),
        content: { ...c.content },
        width: c.width,
        height: c.height,
        point: { x: c.point.x + 30, y: c.point.y + 30 },
        shape: c.shape,
        stroke: c.stroke,
        strokeWeight: c.strokeWeight
      });
    }
    return v({ updateNodeLocation: U, updateLinkLocation: z, commitDest: B }), (c, W) => (m(), b("div", {
      id: "svg-diagram-show-area",
      class: "scrollXY",
      ref_key: "field",
      ref: s
    }, [
      (m(), b("svg", {
        width: e.fluid ? "100%" : e.width,
        height: e.fluid ? "100%" : e.height,
        viewBox: l.value,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        W[0] || (W[0] = fe('<defs><pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"></path></pattern><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="url(#smallGrid)"></rect><path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"></path></pattern></defs>', 1)),
        o("g", { transform: p.value }, [
          o("rect", {
            x: "0",
            y: "0",
            width: e.width,
            height: e.height,
            fill: e.showGrid ? "url(#grid)" : e.background,
            onClick: u
          }, null, 8, kt),
          (m(!0), b(ae, null, se(e.nodes, (V) => (m(), q(Te, {
            node: V,
            selected: V.id === g.value,
            key: V.id,
            createLinkMode: n.value,
            editable: e.editable,
            labels: e.labels,
            rWidth: A().rWidth,
            rHeight: A().rHeight,
            scale: e.scale,
            onEditNode: D,
            onClick: $,
            onSelect: F,
            onCopy: Z,
            onUpdateLocation: U,
            onToggleSelect: I,
            onCommitDest: B,
            onRemove: K
          }, null, 8, ["node", "selected", "createLinkMode", "editable", "labels", "rWidth", "rHeight", "scale"]))), 128)),
          (m(!0), b(ae, null, se(e.links, (V) => (m(), q(ht, {
            link: V,
            selected: V.id === k.value,
            key: V.id,
            source: w(V.source),
            destination: w(V.destination),
            editable: e.editable,
            labels: e.labels,
            rWidth: A().rWidth,
            rHeight: A().rHeight,
            scale: e.scale,
            onEditLink: f,
            onClick: M,
            onSelect: y,
            onUpdateLocation: z,
            onChangeShape: j,
            onRemove: Y
          }, null, 8, ["link", "selected", "source", "destination", "editable", "labels", "rWidth", "rHeight", "scale"]))), 128))
        ], 8, vt)
      ], 8, ft))
    ], 512));
  }
}), mt = { class: "form" }, yt = { class: "section" }, gt = { class: "field-row" }, pt = { class: "field-row" }, xt = { class: "section" }, bt = { class: "field-row three-col" }, wt = { class: "field-group" }, $t = { class: "section" }, Vt = { class: "field-row three-col" }, Ct = {
  key: 0,
  class: "field-row two-col"
}, St = { class: "section" }, Lt = { class: "field-row three-col" }, Mt = { class: "field-group" }, Wt = { class: "field-group" }, Nt = { class: "field-row" }, At = /* @__PURE__ */ T({
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
  setup(e, { expose: v, emit: t }) {
    const a = e, d = t, s = N({ ...a.node, content: { ...a.node.content } });
    Q(() => a.node, (n) => {
      s.value = { ...n, content: { ...n.content } };
    }, { deep: !0 });
    function g() {
      d("ok", s.value);
    }
    function k() {
      d("cancel");
    }
    return v({ newNode: s }), (n, l) => {
      const p = E("VInput"), L = E("VSelect"), A = E("VButton"), w = E("VModal");
      return m(), q(w, {
        isActive: e.isActive,
        title: "Node Properties",
        onClickModal: k
      }, {
        footer: x(() => [
          h(A, {
            variant: "primary",
            onClick: g
          }, {
            default: x(() => [...l[23] || (l[23] = [
              O("Save", -1)
            ])]),
            _: 1
          }),
          h(A, {
            variant: "danger",
            onClick: k
          }, {
            default: x(() => [...l[24] || (l[24] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: x(() => [
          o("div", mt, [
            o("section", yt, [
              l[14] || (l[14] = o("h3", { class: "section-title" }, "Content", -1)),
              o("div", gt, [
                h(p, {
                  modelValue: s.value.content.text,
                  "onUpdate:modelValue": l[0] || (l[0] = (u) => s.value.content.text = u),
                  label: "Label",
                  placeholder: "Node label"
                }, null, 8, ["modelValue"])
              ]),
              o("div", pt, [
                h(p, {
                  modelValue: s.value.content.url,
                  "onUpdate:modelValue": l[1] || (l[1] = (u) => s.value.content.url = u),
                  label: "URL (optional)",
                  placeholder: "https://..."
                }, null, 8, ["modelValue"])
              ])
            ]),
            o("section", xt, [
              l[17] || (l[17] = o("h3", { class: "section-title" }, "Typography", -1)),
              o("div", bt, [
                h(p, {
                  type: "number",
                  modelValue: s.value.content.fontSize,
                  "onUpdate:modelValue": l[2] || (l[2] = (u) => s.value.content.fontSize = u),
                  label: "Font size",
                  placeholder: "13"
                }, null, 8, ["modelValue"]),
                o("div", wt, [
                  l[15] || (l[15] = o("label", { class: "field-label" }, "Font color", -1)),
                  h(p, {
                    type: "color",
                    modelValue: s.value.content.fontColor,
                    "onUpdate:modelValue": l[3] || (l[3] = (u) => s.value.content.fontColor = u)
                  }, null, 8, ["modelValue"])
                ]),
                h(L, {
                  modelValue: s.value.content.fontWeight,
                  "onUpdate:modelValue": l[4] || (l[4] = (u) => s.value.content.fontWeight = u),
                  label: "Weight"
                }, {
                  default: x(() => [...l[16] || (l[16] = [
                    o("option", { value: "normal" }, "Normal", -1),
                    o("option", { value: "bold" }, "Bold", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            o("section", $t, [
              l[19] || (l[19] = o("h3", { class: "section-title" }, "Shape & Size", -1)),
              o("div", Vt, [
                h(L, {
                  modelValue: s.value.shape,
                  "onUpdate:modelValue": l[5] || (l[5] = (u) => s.value.shape = u),
                  label: "Shape"
                }, {
                  default: x(() => [...l[18] || (l[18] = [
                    o("option", { value: "rectangle" }, "Rectangle", -1),
                    o("option", { value: "ellipse" }, "Ellipse", -1),
                    o("option", { value: "diamond" }, "Diamond", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                h(p, {
                  type: "number",
                  modelValue: s.value.width,
                  "onUpdate:modelValue": l[6] || (l[6] = (u) => s.value.width = u),
                  label: "Width",
                  placeholder: "150"
                }, null, 8, ["modelValue"]),
                h(p, {
                  type: "number",
                  modelValue: s.value.height,
                  "onUpdate:modelValue": l[7] || (l[7] = (u) => s.value.height = u),
                  label: "Height",
                  placeholder: "60"
                }, null, 8, ["modelValue"])
              ]),
              s.value.shape === "rectangle" ? (m(), b("div", Ct, [
                h(p, {
                  type: "number",
                  modelValue: s.value.rx,
                  "onUpdate:modelValue": l[8] || (l[8] = (u) => s.value.rx = u),
                  label: "Corner radius X",
                  placeholder: "6"
                }, null, 8, ["modelValue"]),
                h(p, {
                  type: "number",
                  modelValue: s.value.ry,
                  "onUpdate:modelValue": l[9] || (l[9] = (u) => s.value.ry = u),
                  label: "Corner radius Y",
                  placeholder: "6"
                }, null, 8, ["modelValue"])
              ])) : X("", !0)
            ]),
            o("section", St, [
              l[22] || (l[22] = o("h3", { class: "section-title" }, "Appearance", -1)),
              o("div", Lt, [
                o("div", Mt, [
                  l[20] || (l[20] = o("label", { class: "field-label" }, "Fill color", -1)),
                  h(p, {
                    type: "color",
                    modelValue: s.value.content.color,
                    "onUpdate:modelValue": l[10] || (l[10] = (u) => s.value.content.color = u)
                  }, null, 8, ["modelValue"])
                ]),
                o("div", Wt, [
                  l[21] || (l[21] = o("label", { class: "field-label" }, "Stroke color", -1)),
                  h(p, {
                    type: "color",
                    modelValue: s.value.stroke,
                    "onUpdate:modelValue": l[11] || (l[11] = (u) => s.value.stroke = u)
                  }, null, 8, ["modelValue"])
                ]),
                h(p, {
                  type: "number",
                  modelValue: s.value.strokeWeight,
                  "onUpdate:modelValue": l[12] || (l[12] = (u) => s.value.strokeWeight = u),
                  label: "Stroke weight",
                  placeholder: "1"
                }, null, 8, ["modelValue"])
              ]),
              o("div", Nt, [
                h(p, {
                  type: "number",
                  modelValue: s.value.opacity,
                  "onUpdate:modelValue": l[13] || (l[13] = (u) => s.value.opacity = u),
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
}), de = /* @__PURE__ */ G(At, [["__scopeId", "data-v-72b9ce2c"]]), It = { class: "form" }, Bt = { class: "section" }, Ot = { class: "section" }, Ut = { class: "field-row two-col" }, Et = { class: "field-row two-col" }, Dt = { class: "section" }, zt = { class: "field-row two-col" }, Rt = { class: "field-group" }, Tt = /* @__PURE__ */ T({
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
  setup(e, { emit: v }) {
    const t = e, a = v, d = N({ ...t.link.content });
    Q(() => t.link, (k) => {
      d.value = { ...k.content };
    }, { deep: !0 });
    function s() {
      a("ok", { id: t.link.id, content: { ...d.value } });
    }
    function g() {
      a("cancel");
    }
    return (k, n) => {
      const l = E("VInput"), p = E("VSelect"), L = E("VButton"), A = E("VModal");
      return m(), q(A, {
        isActive: e.isActive,
        title: "Link Properties",
        onClickModal: g
      }, {
        footer: x(() => [
          h(L, {
            variant: "primary",
            onClick: s
          }, {
            default: x(() => [...n[14] || (n[14] = [
              O("Save", -1)
            ])]),
            _: 1
          }),
          h(L, {
            variant: "danger",
            onClick: g
          }, {
            default: x(() => [...n[15] || (n[15] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: x(() => [
          o("div", It, [
            o("section", Bt, [
              n[7] || (n[7] = o("h3", { class: "section-title" }, "Label", -1)),
              h(l, {
                modelValue: d.value.label,
                "onUpdate:modelValue": n[0] || (n[0] = (w) => d.value.label = w),
                label: "Text label (optional)",
                placeholder: "Describe this link..."
              }, null, 8, ["modelValue"])
            ]),
            o("section", Ot, [
              n[11] || (n[11] = o("h3", { class: "section-title" }, "Line Style", -1)),
              o("div", Ut, [
                h(p, {
                  modelValue: d.value.shape,
                  "onUpdate:modelValue": n[1] || (n[1] = (w) => d.value.shape = w),
                  label: "Line shape"
                }, {
                  default: x(() => [...n[8] || (n[8] = [
                    o("option", { value: "straight" }, "Straight", -1),
                    o("option", { value: "bezier" }, "Bezier curve", -1),
                    o("option", { value: "polyline" }, "Polyline (折れ線)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                h(p, {
                  modelValue: d.value.pattern,
                  "onUpdate:modelValue": n[2] || (n[2] = (w) => d.value.pattern = w),
                  label: "Line pattern"
                }, {
                  default: x(() => [...n[9] || (n[9] = [
                    o("option", { value: "solid" }, "Solid", -1),
                    o("option", { value: "dash" }, "Dashed", -1),
                    o("option", { value: "dot" }, "Dotted", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              o("div", Et, [
                h(l, {
                  type: "number",
                  modelValue: d.value.strokeWidth,
                  "onUpdate:modelValue": n[3] || (n[3] = (w) => d.value.strokeWidth = w),
                  label: "Stroke width",
                  placeholder: "2"
                }, null, 8, ["modelValue"]),
                h(p, {
                  modelValue: d.value.arrow,
                  "onUpdate:modelValue": n[4] || (n[4] = (w) => d.value.arrow = w),
                  label: "Arrow"
                }, {
                  default: x(() => [...n[10] || (n[10] = [
                    o("option", { value: "none" }, "None", -1),
                    o("option", { value: "dest" }, "→ Destination", -1),
                    o("option", { value: "src" }, "← Source", -1),
                    o("option", { value: "both" }, "↔ Both", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            o("section", Dt, [
              n[13] || (n[13] = o("h3", { class: "section-title" }, "Appearance", -1)),
              o("div", zt, [
                o("div", Rt, [
                  n[12] || (n[12] = o("label", { class: "field-label" }, "Color", -1)),
                  h(l, {
                    type: "color",
                    modelValue: d.value.color,
                    "onUpdate:modelValue": n[5] || (n[5] = (w) => d.value.color = w)
                  }, null, 8, ["modelValue"])
                ]),
                h(l, {
                  type: "number",
                  modelValue: d.value.opacity,
                  "onUpdate:modelValue": n[6] || (n[6] = (w) => d.value.opacity = w),
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
}), Ft = /* @__PURE__ */ G(Tt, [["__scopeId", "data-v-4852c42d"]]), Gt = /* @__PURE__ */ T({
  __name: "InputModal",
  props: { isActive: Boolean, text: String },
  emits: ["ok", "cancel"],
  setup(e, { emit: v }) {
    const t = e, a = v, d = N("");
    Q(() => t.text, (k) => {
      d.value = k ?? "";
    });
    function s() {
      a("ok", { text: d.value });
    }
    function g() {
      a("cancel");
    }
    return (k, n) => {
      const l = E("VButton"), p = E("VModal");
      return m(), q(p, {
        isActive: e.isActive,
        title: "Import / Export JSON",
        onClickModal: g
      }, {
        footer: x(() => [
          h(l, {
            variant: "primary",
            onClick: s
          }, {
            default: x(() => [...n[1] || (n[1] = [
              O("Import", -1)
            ])]),
            _: 1
          }),
          h(l, { onClick: g }, {
            default: x(() => [...n[2] || (n[2] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: x(() => [
          ve(o("textarea", {
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
}), jt = /* @__PURE__ */ G(Gt, [["__scopeId", "data-v-93c54f18"]]), Ht = { class: "message" }, Pt = /* @__PURE__ */ T({
  __name: "AskModal",
  props: { isActive: Boolean },
  emits: ["ok", "cancel"],
  setup(e, { emit: v }) {
    const t = v;
    function a() {
      t("ok", !0);
    }
    function d() {
      t("cancel");
    }
    return (s, g) => {
      const k = E("VButton"), n = E("VModal");
      return m(), q(n, {
        isActive: e.isActive,
        title: "Confirm",
        onClickModal: d
      }, {
        footer: x(() => [
          h(k, {
            variant: "danger",
            onClick: a
          }, {
            default: x(() => [...g[0] || (g[0] = [
              O("OK", -1)
            ])]),
            _: 1
          }),
          h(k, { onClick: d }, {
            default: x(() => [...g[1] || (g[1] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: x(() => [
          o("p", Ht, [
            _(s.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["isActive"]);
    };
  }
}), Xt = /* @__PURE__ */ G(Pt, [["__scopeId", "data-v-1e83d362"]]), Jt = { class: "form" }, Yt = { class: "section" }, qt = { class: "field-row two-col" }, Qt = { class: "section" }, Kt = { class: "field-row" }, Zt = { class: "toggles" }, _t = /* @__PURE__ */ T({
  __name: "SettingsModal",
  props: {
    isActive: { type: Boolean, default: !1 },
    settings: {
      type: Object,
      default: () => ({ width: 1500, height: 1e3, scale: "1", isFluid: !1, showGrid: !1 })
    }
  },
  emits: ["ok", "cancel"],
  setup(e, { emit: v }) {
    const t = e, a = v, d = le({ width: 0, height: 0, scale: "1", isFluid: !1, showGrid: !1 });
    Q(() => t.isActive, (k) => {
      k && Object.assign(d, t.settings);
    });
    function s() {
      a("ok", { ...d });
    }
    function g() {
      a("cancel");
    }
    return (k, n) => {
      const l = E("VInput"), p = E("VSelect"), L = E("VCkbox"), A = E("VButton"), w = E("VModal");
      return m(), q(w, {
        isActive: e.isActive,
        title: "Diagram Settings",
        onClickModal: g
      }, {
        footer: x(() => [
          h(A, {
            variant: "primary",
            onClick: s
          }, {
            default: x(() => [...n[10] || (n[10] = [
              O("Save", -1)
            ])]),
            _: 1
          }),
          h(A, {
            variant: "danger",
            onClick: g
          }, {
            default: x(() => [...n[11] || (n[11] = [
              O("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: x(() => [
          o("div", Jt, [
            o("section", Yt, [
              n[5] || (n[5] = o("h3", { class: "section-title" }, "Canvas size", -1)),
              o("div", qt, [
                h(l, {
                  type: "number",
                  modelValue: d.width,
                  "onUpdate:modelValue": n[0] || (n[0] = (u) => d.width = u),
                  label: "Width"
                }, null, 8, ["modelValue"]),
                h(l, {
                  type: "number",
                  modelValue: d.height,
                  "onUpdate:modelValue": n[1] || (n[1] = (u) => d.height = u),
                  label: "Height"
                }, null, 8, ["modelValue"])
              ])
            ]),
            o("section", Qt, [
              n[9] || (n[9] = o("h3", { class: "section-title" }, "Display", -1)),
              o("div", Kt, [
                h(p, {
                  modelValue: d.scale,
                  "onUpdate:modelValue": n[2] || (n[2] = (u) => d.scale = u),
                  label: "Scale"
                }, {
                  default: x(() => [...n[6] || (n[6] = [
                    o("option", { value: "0.5" }, "Small (50%)", -1),
                    o("option", { value: "1" }, "Medium (100%)", -1),
                    o("option", { value: "1.5" }, "Large (150%)", -1),
                    o("option", { value: "2" }, "XLarge (200%)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              o("div", Zt, [
                h(L, {
                  modelValue: d.isFluid,
                  "onUpdate:modelValue": n[3] || (n[3] = (u) => d.isFluid = u)
                }, {
                  default: x(() => [...n[7] || (n[7] = [
                    O("Fluid (fill container)", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"]),
                h(L, {
                  modelValue: d.showGrid,
                  "onUpdate:modelValue": n[4] || (n[4] = (u) => d.showGrid = u)
                }, {
                  default: x(() => [...n[8] || (n[8] = [
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
}), eo = /* @__PURE__ */ G(_t, [["__scopeId", "data-v-38c2be09"]]), to = { id: "editor" }, oo = { class: "toolbar" }, no = { class: "toolbar-group" }, lo = { class: "toolbar-group" }, io = { class: "toolbar-group" }, ao = /* @__PURE__ */ T({
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
  setup(e, { emit: v }) {
    const t = e, a = v, d = (i) => ({
      width: 2e3,
      height: 1e3,
      background: "#f8fafc",
      showGrid: !1,
      nodes: [],
      links: [],
      ...JSON.parse(JSON.stringify(i || {}))
    }), s = N(d(t.modelValue));
    let g = !1;
    Q(() => t.modelValue, (i) => {
      g || !i || (s.value = d(i));
    }), Q(s, (i) => {
      g = !0, a("update:modelValue", i), me(() => {
        g = !1;
      });
    }, { deep: !0 });
    const k = N(""), n = N(!1), l = N(!1), p = N(!1), L = N(!1), A = N(!1), w = N(!1), u = N(!1), D = le({
      width: 1500,
      height: 1e3,
      isFluid: !1,
      scale: "1",
      showGrid: !1
    }), f = le({
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
    }), U = le({
      id: "",
      content: { color: "", pattern: "solid", arrow: "none", shape: "straight", strokeWidth: 2, label: "", opacity: 1 }
    });
    function z() {
      return (/* @__PURE__ */ new Date()).getTime().toString(16) + Math.floor(Math.random() * 1e6).toString(16);
    }
    function j() {
      s.value.nodes = [], s.value.links = [], w.value = !1;
    }
    function $() {
      n.value = !0;
    }
    function M() {
      n.value = !1, l.value = !1, p.value = !1, L.value = !1, w.value = !1, A.value = !1;
    }
    function F(i) {
      s.value.nodes.push({
        id: z(),
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
    function y(i) {
      Object.assign(f, {
        id: i.id,
        shape: i.shape,
        stroke: i.stroke,
        strokeWeight: i.strokeWeight,
        width: i.width,
        height: i.height,
        rx: i.rx ?? 6,
        ry: i.ry ?? 6,
        opacity: i.opacity ?? 1
      }), Object.assign(f.content, {
        text: i.content.text,
        url: i.content.url,
        color: i.content.color,
        fontColor: i.content.fontColor || "#1e3a5f",
        fontSize: i.content.fontSize || 13,
        fontWeight: i.content.fontWeight || "normal"
      }), l.value = !0;
    }
    function I(i) {
      l.value = !1;
      const r = s.value.nodes.find((P) => P.id === i.id);
      r && (r.content.text = i.content.text, r.content.url = i.content.url, r.content.color = i.content.color, r.content.fontColor = i.content.fontColor, r.content.fontSize = parseInt(i.content.fontSize, 10) || 13, r.content.fontWeight = i.content.fontWeight, r.shape = i.shape, r.stroke = i.stroke, r.strokeWeight = parseFloat(i.strokeWeight) || 1, r.width = parseInt(i.width, 10), r.height = parseInt(i.height, 10), r.rx = parseInt(i.rx, 10) || 6, r.ry = parseInt(i.ry, 10) || 6, r.opacity = parseFloat(i.opacity) || 1, l.value = !1);
    }
    function B(i) {
      U.id = i.id, Object.assign(U.content, {
        color: i.content.color,
        shape: i.content.shape,
        pattern: i.content.pattern,
        arrow: i.content.arrow,
        strokeWidth: i.content.strokeWidth ?? 2,
        label: i.content.label || "",
        opacity: i.content.opacity ?? 1
      }), p.value = !0;
    }
    function Y(i) {
      p.value = !1;
      const r = s.value.links.find((P) => P.id === i.id);
      r && (r.color = i.content.color, r.shape = i.content.shape, r.pattern = i.content.pattern, r.arrow = i.content.arrow, r.strokeWidth = parseFloat(i.content.strokeWidth) || 2, r.label = i.content.label, r.opacity = parseFloat(i.content.opacity) || 1, p.value = !1);
    }
    function K() {
      u.value = !1;
    }
    function Z(i) {
      a("nodeClicked", i);
    }
    function c(i) {
      a("linkClicked", i);
    }
    function W(i) {
      s.value.nodes = s.value.nodes.filter((r) => r.id !== i), s.value.links = s.value.links.filter((r) => r.source !== i && r.destination !== i), a("nodeRemoved", i);
    }
    function V(i) {
      s.value.links = s.value.links.filter((r) => r.id !== i), a("linkRemoved", i);
    }
    function J(i) {
      s.value.links.push(i);
    }
    function ne(i) {
      s.value.nodes.push(i);
    }
    function ee() {
      L.value = !0, k.value = JSON.stringify(s.value, null, 2);
    }
    function te(i) {
      try {
        const r = JSON.parse(i.text);
        r && (s.value = r, L.value = !1);
      } catch (r) {
        alert("Invalid JSON: " + r.message);
      }
    }
    function C() {
      const i = document.getElementById("svg-diagram-show-area");
      if (!i) return;
      const r = new Blob([i.innerHTML], { type: "image/svg+xml" }), P = window.URL.createObjectURL(r), oe = document.createElement("a");
      oe.href = P, oe.download = "diagram.svg", oe.click();
    }
    function S() {
      A.value = !0, D.width = s.value.width, D.height = s.value.height, D.showGrid = s.value.showGrid;
    }
    function H(i) {
      Object.assign(D, i), s.value.width = parseInt(D.width, 10), s.value.height = parseInt(D.height, 10), s.value.showGrid = D.showGrid, A.value = !1;
    }
    return (i, r) => {
      const P = E("VButton");
      return m(), b("div", to, [
        o("div", oo, [
          o("div", no, [
            u.value ? (m(), b(ae, { key: 1 }, [
              h(P, {
                variant: "primary",
                onClick: $
              }, {
                default: x(() => [...r[3] || (r[3] = [
                  O("＋ New Node", -1)
                ])]),
                _: 1
              }),
              h(P, { onClick: K }, {
                default: x(() => [...r[4] || (r[4] = [
                  O("✓ Done", -1)
                ])]),
                _: 1
              })
            ], 64)) : (m(), q(P, {
              key: 0,
              variant: "primary",
              onClick: r[0] || (r[0] = (oe) => u.value = !0)
            }, {
              default: x(() => [...r[2] || (r[2] = [
                O("✏️ Edit", -1)
              ])]),
              _: 1
            }))
          ]),
          o("div", lo, [
            h(P, { onClick: ee }, {
              default: x(() => [...r[5] || (r[5] = [
                O("⬆ Import / Export", -1)
              ])]),
              _: 1
            }),
            h(P, { onClick: C }, {
              default: x(() => [...r[6] || (r[6] = [
                O("⬇ Download SVG", -1)
              ])]),
              _: 1
            })
          ]),
          o("div", io, [
            h(P, { onClick: S }, {
              default: x(() => [...r[7] || (r[7] = [
                O("⚙ Settings", -1)
              ])]),
              _: 1
            }),
            h(P, {
              variant: "danger",
              onClick: r[1] || (r[1] = (oe) => w.value = !0)
            }, {
              default: x(() => [...r[8] || (r[8] = [
                O("🗑 Clear", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        h(Xt, {
          isActive: w.value,
          onOk: j,
          onCancel: M
        }, {
          default: x(() => [...r[9] || (r[9] = [
            O(" Clear the entire diagram? This cannot be undone. ", -1)
          ])]),
          _: 1
        }, 8, ["isActive"]),
        h(de, {
          node: { content: {} },
          isActive: n.value,
          onOk: F,
          onCancel: M
        }, null, 8, ["isActive"]),
        h(de, {
          node: f,
          isActive: l.value,
          onOk: I,
          onCancel: M
        }, null, 8, ["node", "isActive"]),
        h(Ft, {
          link: U,
          isActive: p.value,
          onOk: Y,
          onCancel: M
        }, null, 8, ["link", "isActive"]),
        h(jt, {
          text: k.value,
          isActive: L.value,
          onOk: te,
          onCancel: M
        }, null, 8, ["text", "isActive"]),
        h(eo, {
          isActive: A.value,
          settings: D,
          onOk: H,
          onCancel: M
        }, null, 8, ["isActive", "settings"]),
        h(he, {
          width: s.value.width || 2e3,
          height: s.value.height || 1e3,
          fluid: D.isFluid,
          scale: D.scale,
          background: s.value.background || "#f8fafc",
          showGrid: s.value.showGrid,
          nodes: s.value.nodes,
          links: s.value.links,
          editable: u.value,
          labels: s.value.labels || { edit: "Edit", remove: "Remove", link: "Link", select: "Select", cancel: "Cancel", copy: "Copy" },
          onEditNode: y,
          onEditLink: B,
          onNodeClicked: Z,
          onLinkClicked: c,
          onNodeRemoved: W,
          onLinkRemoved: V,
          onLinkAdded: J,
          onNodeCopied: ne
        }, null, 8, ["width", "height", "fluid", "scale", "background", "showGrid", "nodes", "links", "editable", "labels"])
      ]);
    };
  }
}), so = /* @__PURE__ */ G(ao, [["__scopeId", "data-v-66e2d983"]]), ro = /* @__PURE__ */ T({
  name: "VButton",
  __name: "VButton",
  props: { variant: { type: String, default: "default" } },
  emits: ["click"],
  setup(e, { emit: v }) {
    const t = v;
    return (a, d) => (m(), b("button", {
      class: ye(["btn", e.variant]),
      onClick: d[0] || (d[0] = (s) => t("click", s))
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), uo = /* @__PURE__ */ G(ro, [["__scopeId", "data-v-5d1c5ded"]]), co = { class: "toggle" }, ho = ["checked"], fo = { class: "toggle-label" };
let vo = 0;
const ko = /* @__PURE__ */ T({
  name: "VCkbox",
  __name: "VCkbox",
  props: { modelValue: Boolean },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const t = `vckbox-${++vo}`, a = v;
    function d(s) {
      a("update:modelValue", s.target.checked);
    }
    return (s, g) => (m(), b("label", co, [
      o("input", {
        class: "toggle-input",
        id: t,
        type: "checkbox",
        checked: e.modelValue,
        onChange: d
      }, null, 40, ho),
      g[0] || (g[0] = o("span", { class: "toggle-track" }, [
        o("span", { class: "toggle-thumb" })
      ], -1)),
      o("span", fo, [
        _(s.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), mo = /* @__PURE__ */ G(ko, [["__scopeId", "data-v-809530cf"]]), yo = { class: "field" }, go = {
  key: 0,
  class: "field-label"
}, po = ["type", "value", "placeholder"], xo = /* @__PURE__ */ T({
  name: "VInput",
  __name: "VInput",
  props: {
    type: String,
    modelValue: [String, Number],
    label: String,
    placeholder: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const t = v;
    function a(d) {
      t("update:modelValue", d.target.value);
    }
    return (d, s) => (m(), b("div", yo, [
      e.label ? (m(), b("label", go, R(e.label), 1)) : X("", !0),
      o("input", {
        type: e.type || "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        onInput: a
      }, null, 40, po)
    ]));
  }
}), bo = /* @__PURE__ */ G(xo, [["__scopeId", "data-v-dc0bb474"]]), wo = {
  key: 0,
  id: "message"
}, $o = { id: "content" }, Vo = /* @__PURE__ */ T({
  name: "VMessage",
  __name: "VMessage",
  props: { content: String },
  setup(e) {
    const v = N(!1);
    return (t, a) => v.value ? X("", !0) : (m(), b("div", wo, [
      o("span", {
        class: "dismiss",
        onClick: a[0] || (a[0] = (d) => v.value = !0)
      }, "X"),
      o("div", $o, R(e.content), 1)
    ]));
  }
}), Co = /* @__PURE__ */ G(Vo, [["__scopeId", "data-v-692a28e3"]]), So = { class: "card" }, Lo = { class: "card-header" }, Mo = { class: "card-title" }, Wo = { class: "card-body" }, No = {
  key: 0,
  class: "card-footer"
}, Ao = /* @__PURE__ */ T({
  name: "VModal",
  __name: "VModal",
  props: { isActive: Boolean, title: { type: String, default: "" } },
  emits: ["clickModal"],
  setup(e) {
    return (v, t) => (m(), q(ge, { name: "modal" }, {
      default: x(() => [
        e.isActive ? (m(), b("div", {
          key: 0,
          class: "overlay",
          onClick: t[1] || (t[1] = pe((a) => v.$emit("clickModal"), ["self"]))
        }, [
          o("div", So, [
            o("div", Lo, [
              o("span", Mo, R(e.title), 1),
              o("button", {
                class: "close-btn",
                onClick: t[0] || (t[0] = (a) => v.$emit("clickModal"))
              }, "✕")
            ]),
            o("div", Wo, [
              _(v.$slots, "default", {}, void 0, !0)
            ]),
            v.$slots.footer ? (m(), b("div", No, [
              _(v.$slots, "footer", {}, void 0, !0)
            ])) : X("", !0)
          ])
        ])) : X("", !0)
      ]),
      _: 3
    }));
  }
}), Io = /* @__PURE__ */ G(Ao, [["__scopeId", "data-v-32575efa"]]), Bo = { class: "field" }, Oo = {
  key: 0,
  class: "field-label"
}, Uo = ["value", "multiple"], Eo = {
  key: 0,
  value: null,
  disabled: ""
}, Do = /* @__PURE__ */ T({
  name: "VSelect",
  __name: "VSelect",
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: null },
    multiple: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: v }) {
    const t = v;
    function a(d) {
      t("update:modelValue", d.target.value);
    }
    return (d, s) => (m(), b("div", Bo, [
      e.label ? (m(), b("label", Oo, R(e.label), 1)) : X("", !0),
      o("select", {
        value: e.modelValue,
        multiple: e.multiple,
        onChange: a
      }, [
        e.placeholder ? (m(), b("option", Eo, R(e.placeholder), 1)) : X("", !0),
        _(d.$slots, "default", {}, void 0, !0)
      ], 40, Uo)
    ]));
  }
}), zo = /* @__PURE__ */ G(Do, [["__scopeId", "data-v-329e0566"]]), re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VButton: uo,
  VCkbox: mo,
  VInput: bo,
  VMessage: Co,
  VModal: Io,
  VSelect: zo
}, Symbol.toStringTag, { value: "Module" })), Ro = {
  install(e) {
    for (const v in re) {
      const t = re[v];
      e.component(t.name, t);
    }
  }
}, Fo = {
  install(e) {
    e.use(Ro), e.component("Diagram", he), e.component("DiagramEditor", so);
  }
};
export {
  he as Diagram,
  so as DiagramEditor,
  Fo as default
};
