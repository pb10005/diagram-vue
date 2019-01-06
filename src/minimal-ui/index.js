import * as components from "./lib";

const MinimalUI = {
  install(Vue) {
    for (let key in components) {
      const component = components[key];
      Vue.component(component.name, component);
    }
  }
};

export default MinimalUI;
