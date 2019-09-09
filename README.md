# diagram-vue
A vue component library of diagrams

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a66f2b18a900451693f7a41019abf79e)](https://app.codacy.com/app/pb10001/diagram-vue?utm_source=github.com&utm_medium=referral&utm_content=pb10001/diagram-vue&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/diagram-vue.svg)](https://badge.fury.io/js/diagram-vue)
![npm](https://img.shields.io/npm/dt/diagram-vue.svg)
![npm](https://img.shields.io/npm/dw/diagram-vue.svg)  

[Demo](https://diagram.netlify.com/)  
![Screen shot](https://raw.githubusercontent.com/pb10005/diagram-vue/master/img/screenshot.png)
## Installation
```sh
npm i diagram-vue --save
```
## Usage
[![Edit diagram-vue](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/q7wj02ny2w)
### Ready-to-use editor
#### 1. Import
```js
import { DiagramEditor } from "diagram-vue";
import "diagram-vue/dist/diagram.css";
```
#### 2. Template
```html
<DiagramEditor v-model="graph"></DiagramEditor>
```
[Sample data](https://raw.githubusercontent.com/pb10005/diagram-vue/master/src/demo/data.json) represents the data structure of v-model.
### Customization
#### 1. Import
```js
import Diagram from 'diagram-vue';
import "diagram-vue/dist/diagram.css";
```
#### 2. Template
```html
<Diagram
    :width="2000"
    :height="1000"
    scale="1"
    background="#fafafa"
    :nodes="nodes"
    :links="links"
    :editable="editable"
    :labels="{
        edit: 'Edit',
        remove: 'Remove',
        link: 'Link',
        select: 'Select'
    }"
    @editNode="editNode"
    @editLink="editLink"
    @nodeChanged="nodeChanged"
    @linkChanged="linkChanged"
    >
</Diagram>
```
#### 3. Props
```js
props: {
    width: Number,
    height: Number,
    background: String,
    nodes: Array,
    links: Array,
    editable: Boolean,
    labels: Object
}
```
[Sample data](https://raw.githubusercontent.com/pb10005/diagram-vue/master/src/demo/data.json) helps you know the data structure of nodes and links.
#### 4. Events
```js
editNode(node /* selected node */) {
    /* event handler */
},
editLink(link /* selected link */) {
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

#### 5. Get SVG as String
Use plain JavaScript.
```js
document.getElementById('svg-diagram-show-area'); // <svg ...>...</svg>
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
