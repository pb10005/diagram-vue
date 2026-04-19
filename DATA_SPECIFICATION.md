# Data Specification

Full TypeScript types are available in [`src/types.ts`](./src/types.ts).

---

## GraphData (root)

| Field | Type | Required | Description |
|---|---|---|---|
| `width` | `number` | ✓ | Canvas width in pixels |
| `height` | `number` | ✓ | Canvas height in pixels |
| `background` | `string` | | Background color (hex / CSS). Default: `#f8fafc` |
| `showGrid` | `boolean` | | Show dot grid. Default: `false` |
| `labels` | `DiagramLabels` | | Override button label text |
| `nodes` | `DiagramNode[]` | ✓ | Array of node objects |
| `links` | `DiagramLink[]` | ✓ | Array of link objects |

---

## DiagramNode

| Field | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | — | Unique identifier |
| `width` | `number` | `150` | Width in pixels |
| `height` | `number` | `60` | Height in pixels |
| `shape` | `string` | `rectangle` | `rectangle` / `ellipse` / `diamond` |
| `stroke` | `string` | `#93c5fd` | Border color |
| `strokeWeight` | `number` | `1` | Border thickness |
| `rx` | `number` | `6` | Corner radius X (rectangle only) |
| `ry` | `number` | `6` | Corner radius Y (rectangle only) |
| `opacity` | `number` | `1` | Opacity 0–1 |
| `content` | `NodeContent` | — | See below |
| `point` | `{ x, y }` | — | Top-left position in pixels |

### NodeContent

| Field | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | `''` | Label text |
| `url` | `string` | | Clickable URL (must start with `http://` or `https://`) |
| `color` | `string` | `#dbeafe` | Fill color |
| `fontColor` | `string` | `#1e3a5f` | Text color |
| `fontSize` | `number` | `13` | Font size in px |
| `fontWeight` | `string` | `normal` | `normal` / `bold` |

---

## DiagramLink

| Field | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | — | Unique identifier |
| `source` | `string` | — | Source node ID |
| `destination` | `string` | — | Destination node ID |
| `point` | `{ x, y }` | — | Bezier control point position |
| `color` | `string` | `#6366f1` | Line color |
| `shape` | `string` | `straight` | `straight` / `bezier` |
| `pattern` | `string` | `solid` | `solid` / `dash` / `dot` |
| `arrow` | `string` | `none` | `none` / `src` / `dest` / `both` |
| `strokeWidth` | `number` | `2` | Line thickness |
| `label` | `string` | `''` | Text label shown above the midpoint |
| `opacity` | `number` | `1` | Opacity 0–1 |

---

## DiagramLabels

Override the action button labels (useful for localization):

| Field | Default |
|---|---|
| `edit` | `'Edit'` |
| `remove` | `'Remove'` |
| `link` | `'Link'` |
| `select` | `'Select'` |
| `cancel` | `'Cancel'` |
| `copy` | `'Copy'` |

---

## TypeScript Interfaces

```ts
export interface NodeContent {
  text: string
  url?: string
  color?: string
  fontColor?: string
  fontSize?: number
  fontWeight?: 'normal' | 'bold'
}

export interface DiagramNode {
  id: string
  width: number
  height: number
  shape?: 'rectangle' | 'ellipse' | 'diamond'
  stroke?: string
  strokeWeight?: number
  rx?: number
  ry?: number
  opacity?: number
  content: NodeContent
  point: { x: number; y: number }
}

export interface DiagramLink {
  id: string
  source: string
  destination: string
  point: { x: number; y: number }
  color?: string
  shape?: string       // 'straight' | 'bezier'
  pattern?: string     // 'solid' | 'dash' | 'dot'
  arrow?: string       // 'none' | 'src' | 'dest' | 'both'
  strokeWidth?: number
  label?: string
  opacity?: number
}

export interface DiagramLabels {
  edit?: string
  remove?: string
  link?: string
  select?: string
  cancel?: string
  copy?: string
}

export interface GraphData {
  width: number
  height: number
  background?: string
  showGrid?: boolean
  labels?: DiagramLabels
  nodes: DiagramNode[]
  links: DiagramLink[]
}
```

---

## Complete Example

```json
{
  "width": 1200,
  "height": 800,
  "background": "#f8fafc",
  "showGrid": true,
  "nodes": [
    {
      "id": "start",
      "shape": "ellipse",
      "width": 120,
      "height": 60,
      "stroke": "#16a34a",
      "strokeWeight": 2,
      "opacity": 1,
      "content": {
        "text": "Start",
        "color": "#22c55e",
        "fontColor": "#ffffff",
        "fontSize": 14,
        "fontWeight": "bold"
      },
      "point": { "x": 540, "y": 40 }
    },
    {
      "id": "check",
      "shape": "diamond",
      "width": 160,
      "height": 80,
      "stroke": "#f59e0b",
      "strokeWeight": 2,
      "opacity": 1,
      "content": {
        "text": "Condition?",
        "color": "#fbbf24",
        "fontColor": "#78350f"
      },
      "point": { "x": 520, "y": 180 }
    },
    {
      "id": "process",
      "shape": "rectangle",
      "width": 160,
      "height": 60,
      "rx": 8,
      "ry": 8,
      "stroke": "#2563eb",
      "strokeWeight": 1,
      "opacity": 1,
      "content": {
        "text": "Process",
        "color": "#3b82f6",
        "fontColor": "#ffffff"
      },
      "point": { "x": 520, "y": 340 }
    }
  ],
  "links": [
    {
      "id": "l1",
      "source": "start",
      "destination": "check",
      "color": "#6b7280",
      "shape": "straight",
      "pattern": "solid",
      "arrow": "dest",
      "strokeWidth": 2,
      "label": "",
      "opacity": 1,
      "point": { "x": 600, "y": 110 }
    },
    {
      "id": "l2",
      "source": "check",
      "destination": "process",
      "color": "#22c55e",
      "shape": "bezier",
      "pattern": "dash",
      "arrow": "dest",
      "strokeWidth": 2,
      "label": "Yes",
      "opacity": 1,
      "point": { "x": 600, "y": 290 }
    }
  ]
}
```
