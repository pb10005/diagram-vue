export interface NodeContent {
  text: string
  url?: string
  color?: string
}

export interface DiagramNode {
  id: string
  width: number
  height: number
  shape?: 'rectangle' | 'ellipse'
  stroke?: string
  strokeWeight?: number
  content: NodeContent
  point: { x: number; y: number }
}

export interface DiagramLink {
  id: string
  source: string
  destination: string
  point: { x: number; y: number }
  color?: string
  shape?: string
  pattern?: string
  arrow?: string
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

export interface DiagramSettings {
  width: number
  height: number
  scale: string
  isFluid: boolean
  showGrid: boolean
}
