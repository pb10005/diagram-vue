import Diagram from './Diagram.vue'
import DiagramEditor from './DiagramEditor.vue'
import MinimalUI from './minimal-ui'

const DiagramVue = {
  install(app) {
    app.use(MinimalUI)
    app.component('Diagram', Diagram)
    app.component('DiagramEditor', DiagramEditor)
  }
}

export { Diagram, DiagramEditor }
export default DiagramVue
