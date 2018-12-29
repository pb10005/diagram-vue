# diagram-vue
A vue component library of diagrams

[![npm version](https://badge.fury.io/js/diagram-vue.svg)](https://badge.fury.io/js/diagram-vue)
![npm](https://img.shields.io/npm/dt/:diagram-vue.svg)  

[Demo](https://diagram.netlify.com/)  

## Installaion
```sh
npm i install --save
```
## Usage
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1yzpq1y0rq)
### Template
```html
<Diagram
    :width="2000"
    :height="1000"
    :nodes="nodes"
    :links="links"
    linkColor="#ffeaa7"
    :editable="editable"
    :labels="{
        edit: 'Edit',
        remove: 'Remove',
        link: 'Link',
        select: 'Select'
    }"
    @editNode="editNode"
    @nodeChanged="nodeChanged"
    @linkChanged="linkChanged"
    >
</Diagram>
```
### Import
```js
import Diagram from 'diagram-vue'
```
### Props
```js
props: {
    width: Number,
    height: Number,
    nodes: Array,
    links: Array,
    editable: Boolean,
    linkColor: String,
    labels: Object
}
```
[Sample data](https://github.com/pb10001/diagram-vue/blob/master/src/data.js) helps you know the data structure of nodes and links.
### Events
```js
editNode(node /* selected node */) {
    /* event handler */
},
nodeChanged(obj /* array of nodes */) {
    /* event handler */
    const nodes = obj.nodes
},
linkChanged(obj /* array of links */) {
    /* event handler */
    const links = obj.links
}

```
## Development

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
