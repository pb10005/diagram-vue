import * as components from './lib'

export default {
  install(app) {
    for (const key in components) {
      const component = components[key]
      app.component(component.name, component)
    }
  }
}
