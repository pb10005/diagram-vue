# diagram-vue

A Vue 3 SVG-based diagram component library.

[![npm version](https://badge.fury.io/js/diagram-vue.svg)](https://badge.fury.io/js/diagram-vue)
![npm](https://img.shields.io/npm/dt/diagram-vue.svg)

[Demo](https://diagramvue.netlify.com/) | [Data Specification](./DATA_SPECIFICATION.md)

## Installation

```sh
npm install diagram-vue
```

## Quick Start

### Ready-to-use Editor (DiagramEditor)

The simplest way to get started. Includes toolbar, modals, import/export, and SVG download.

```vue
<template>
  <DiagramEditor v-model="graph" />
</template>

<script setup>
import { ref } from 'vue'
import { DiagramEditor } from 'diagram-vue'
import 'diagram-vue/dist/diagram.css'

const graph = ref({
  width: 1200,
  height: 800,
  background: '#f8fafc',
  showGrid: false,
  nodes: [],
  links: []
})
</script>
```

#### DiagramEditor Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `GraphData` | `{ width: 2000, height: 1000, nodes: [], links: [] }` | Graph data (use with `v-model`) |

#### DiagramEditor Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `GraphData` | Emitted on any data change |
| `nodeClicked` | `string` | Clicked node ID |
| `linkClicked` | `string` | Clicked link ID |
| `nodeRemoved` | `string` | Removed node ID |
| `linkRemoved` | `string` | Removed link ID |

---

### Custom Implementation (Diagram)

Use the `Diagram` component directly for full control over editing logic.

```vue
<template>
  <Diagram
    :width="1200"
    :height="800"
    background="#f8fafc"
    :showGrid="false"
    scale="1"
    :fluid="false"
    :nodes="graph.nodes"
    :links="graph.links"
    :editable="editable"
    :labels="{
      edit: 'Edit',
      remove: 'Remove',
      link: 'Link',
      select: 'Select',
      cancel: 'Cancel',
      copy: 'Copy'
    }"
    @editNode="handleEditNode"
    @editLink="handleEditLink"
    @nodeClicked="handleNodeClicked"
    @linkClicked="handleLinkClicked"
    @nodeRemoved="handleNodeRemoved"
    @linkRemoved="handleLinkRemoved"
    @linkAdded="handleLinkAdded"
    @nodeCopied="handleNodeCopied"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Diagram } from 'diagram-vue'
import 'diagram-vue/dist/diagram.css'

const editable = ref(false)
const graph = ref({ nodes: [], links: [] })

function handleEditNode(node) { /* open your edit modal */ }
function handleEditLink(link) { /* open your edit modal */ }
function handleNodeClicked(id) { console.log('node clicked:', id) }
function handleLinkClicked(id) { console.log('link clicked:', id) }
function handleNodeRemoved(id) {
  graph.value.nodes = graph.value.nodes.filter(n => n.id !== id)
}
function handleLinkRemoved(id) {
  graph.value.links = graph.value.links.filter(l => l.id !== id)
}
function handleLinkAdded(link) { graph.value.links.push(link) }
function handleNodeCopied(node) { graph.value.nodes.push(node) }
</script>
```

#### Diagram Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | `Number` | — | Canvas width in pixels |
| `height` | `Number` | — | Canvas height in pixels |
| `scale` | `String` | `'1'` | Display scale (`'0.5'` / `'1'` / `'1.5'` / `'2'`) |
| `background` | `String` | — | Background color (hex or CSS color) |
| `showGrid` | `Boolean` | `false` | Show dot grid |
| `nodes` | `DiagramNode[]` | — | Array of node objects |
| `links` | `DiagramLink[]` | — | Array of link objects |
| `editable` | `Boolean` | `false` | Enable edit mode (drag, add links, etc.) |
| `labels` | `DiagramLabels` | — | Button label strings |
| `fluid` | `Boolean` | `false` | Stretch to fill container width |

#### Diagram Events

| Event | Payload | Description |
|---|---|---|
| `editNode` | `DiagramNode` | Edit button clicked on a node |
| `editLink` | `DiagramLink` | Edit button clicked on a link |
| `nodeClicked` | `string` | Node was clicked |
| `linkClicked` | `string` | Link was clicked |
| `nodeRemoved` | `string` | Node was deleted |
| `linkRemoved` | `string` | Link was deleted |
| `linkAdded` | `{ id, source, destination, point }` | New link created between nodes |
| `nodeCopied` | `DiagramNode` | Node was duplicated |

---

## TypeScript Support

Type definitions are included. Import from the package source:

```ts
import type { GraphData, DiagramNode, DiagramLink, DiagramLabels } from 'diagram-vue/src/types'
```

See [src/types.ts](./src/types.ts) for the full interface definitions.

---

## AI Agent Usage

AI agents can generate diagram data programmatically as JSON and pass it to `DiagramEditor` or `Diagram`.

### Minimal valid graph

```json
{
  "width": 1200,
  "height": 800,
  "background": "#f8fafc",
  "showGrid": false,
  "nodes": [
    {
      "id": "node1",
      "shape": "rectangle",
      "width": 150,
      "height": 60,
      "rx": 6,
      "ry": 6,
      "stroke": "#93c5fd",
      "strokeWeight": 1,
      "opacity": 1,
      "content": {
        "text": "Hello",
        "color": "#dbeafe",
        "fontColor": "#1e3a5f",
        "fontSize": 13,
        "fontWeight": "normal"
      },
      "point": { "x": 100, "y": 100 }
    }
  ],
  "links": []
}
```

### Generating unique IDs

Node and link IDs must be unique strings. A simple approach:

```js
const id = Date.now().toString(16) + Math.floor(Math.random() * 1e6).toString(16)
```

See [DATA_SPECIFICATION.md](./DATA_SPECIFICATION.md) for the complete JSON schema.

---

## Get SVG as String

```js
const svg = document.getElementById('svg-diagram-show-area').innerHTML
```

---

## Development

```sh
npm install
npm run dev          # Start demo app (Vite dev server)
npm run build        # Build library to dist/
npm run build:app    # Build demo app
npm run test:unit    # Run unit tests
npm run lint         # Lint source files
```
