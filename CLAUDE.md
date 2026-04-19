# CLAUDE.md — diagram-vue Developer Guide

This file is for AI agents and developers working on the diagram-vue codebase.

## Project Overview

`diagram-vue` is a Vue 3 + TypeScript + Vite SVG diagram component library. It provides:
- `DiagramEditor` — full editor with toolbar, modals, import/export
- `Diagram` — core SVG renderer (use when you need custom editing logic)

## Directory Structure

```
src/
├── Diagram.vue           # Core SVG rendering: iterates nodes + links
├── DiagramEditor.vue     # Full editor: toolbar + Diagram + all modals
├── index.js              # Package entry: exports Diagram, DiagramEditor, plugin
├── types.ts              # All TypeScript interfaces (GraphData, DiagramNode, etc.)
├── lib/
│   ├── Node.vue          # SVG node (rectangle/ellipse/diamond + drag + action buttons)
│   ├── Link.vue          # SVG link (straight/bezier + drag control point)
│   ├── EditNodeModal.vue # Node property editor modal
│   ├── EditLinkModal.vue # Link property editor modal
│   ├── InputModal.vue    # JSON import/export modal
│   ├── AskModal.vue      # Confirmation modal
│   └── SettingsModal.vue # Canvas settings modal
├── minimal-ui/lib/
│   ├── VButton.vue       # Button (variants: primary, danger, default)
│   ├── VInput.vue        # Input (type: text, number, color)
│   ├── VSelect.vue       # Select dropdown
│   ├── VModal.vue        # Modal container (fixed header/footer, scrollable body)
│   └── VCkbox.vue        # Toggle switch checkbox
├── composables/
│   └── useMouseLocation.js  # Mouse tracking composable
└── demo/
    ├── App.vue           # Demo application
    ├── main.js           # Demo entry point
    ├── data.json         # Default sample data (daily routine)
    ├── flowchart.json    # Flowchart sample (all shapes/styles)
    └── ai_workflow.json  # AI agent workflow sample
```

## Data Model

```
GraphData
├── width, height, background, showGrid
├── labels: DiagramLabels (button text overrides)
├── nodes: DiagramNode[]
│   ├── id, shape, width, height, rx, ry, stroke, strokeWeight, opacity
│   ├── content: { text, url, color, fontColor, fontSize, fontWeight }
│   └── point: { x, y }  ← top-left position
└── links: DiagramLink[]
    ├── id, source (nodeId), destination (nodeId)
    ├── color, shape, pattern, arrow, strokeWidth, label, opacity
    └── point: { x, y }  ← bezier control point
```

## Key Patterns

### v-model with echo-loop prevention (DiagramEditor.vue)

```js
const graphData = ref(initGraph(props.modelValue))
let internalUpdate = false

watch(() => props.modelValue, (val) => {
  if (internalUpdate || !val) return
  graphData.value = initGraph(val)
})

watch(graphData, val => {
  internalUpdate = true
  emit('update:modelValue', val)
  nextTick(() => { internalUpdate = false })
}, { deep: true })
```

### Reactive prop mutation requires `{ deep: true }` watch

`tmpNode` in DiagramEditor is a `reactive` object mutated via `Object.assign`.
Modal components watching it must use `{ deep: true }`:

```js
// EditNodeModal.vue, EditLinkModal.vue
watch(() => props.node, val => {
  newNode.value = { ...val, content: { ...val.content } }
}, { deep: true })
```

### Drag handling (Node.vue, Link.vue)

Drag attaches `mousemove`/`mouseup` to `document` on `mousedown`, then removes them on `mouseup`. This global approach handles cases where the cursor leaves the element during fast drags.

### VButton click forwarding

VButton explicitly re-emits native click because Vue 3 fallthrough is unreliable in named slots:

```vue
<button @click="emit('click', $event)">
```

### Modal footer slot

All modal footer buttons use the `#footer` named slot in `VModal`:

```vue
<template #footer>
  <VButton variant="primary" @click="ok">Save</VButton>
  <VButton variant="danger" @click="cancel">Cancel</VButton>
</template>
```

## Build Commands

```sh
npm run dev          # Vite dev server for demo app (port 5173)
npm run build        # Build library → dist/ (CJS + ES + UMD)
npm run build:app    # Build demo app → dist/
npm run test:unit    # Vitest unit tests
npm run lint         # ESLint
```

## Adding a New Node Shape

1. Add the shape name to `DiagramNode.shape` union in `src/types.ts`
2. Add a rendering branch in `src/lib/Node.vue` (SVG element inside the `<g>`)
3. Add the option to `<VSelect>` in `src/lib/EditNodeModal.vue`

## Adding a New Link Property

1. Add the field to `DiagramLink` in `src/types.ts`
2. Apply it in `src/lib/Link.vue` (SVG stroke attributes)
3. Add form control in `src/lib/EditLinkModal.vue`
4. Initialize in `addNode`/`editNode` in `src/DiagramEditor.vue`
