<template>
  <section>
    <VSelect v-model="tmp.operandType" placeholder="Operand type">
      <option value="constant">Constant</option>
      <option value="variable">Variable</option>
    </VSelect>
    <VInput v-model="tmp.operandName" placeholder="name" />
    <VInput v-model="tmp.operandValue" placeholder="value" />
    <VButton @click="addOperand">Add operand</VButton><br />

    <VSelect v-model="tmp.operatorType" placeholder="Operand type">
      <option value="add">Add</option> <option value="sub">Sub</option>
      <option value="mul">Mul</option> <option value="div">Div</option>
    </VSelect>
    <VButton @click="addOperator">Add operator</VButton>
    <Diagram
      :width="500"
      :height="500"
      background="#FF0"
      :nodes="nodes"
      :links="links"
      :editable="true"
      :labels="{
        edit: 'Edit',
        remove: 'Remove',
        link: 'New Link',
        select: 'Select',
        cancel: 'Cancel',
        copy: '_'
      }"
      @editNode="onEditNode"
      @editLink="onEditLink"
      @nodeChanged="nodeChanged"
      @linkChanged="linkChanged"
    >
    </Diagram>
  </section>
</template>
<script>
import Diagram from "../index.js";
export default {
  components: {
    Diagram
  },
  data() {
    return {
      tmp: {
        operandType: "constant",
        operandName: "x",
        operandValue: 0,
        operatorType: "add"
      },
      maxID: 0,
      nodes: [],
      links: [],
      operators: [],
      operands: []
    };
  },
  methods: {
    addOperand() {
      this.maxID++;
      this.operands.push({
        id: this.maxID,
        type: this.tmp.operandType,
        value: this.tmp.operandValue
      });
      this.nodes.push({
        id: this.maxID,
        width: 100,
        height: 50,
        shape: "rectangle",
        content: {
          text: this.tmp.operandName
        },
        point: {
          x: 10,
          y: 10
        }
      });
    },
    addOperator() {
      const resultID = ++this.maxID;
      this.operands.push({
        id: resultID
      });
      this.nodes.push({
        id: resultID,
        width: 100,
        height: 50,
        shape: "rectangle",
        content: {
        color: "#F00",
          text: "result"
        },
        point: {
          x: 20,
          y: 50
        }
      });
      const operatorID = ++this.maxID;
      this.nodes.push({
        id: this.maxID,
        width: 100,
        height: 50,
        shape: "ellipse",
        content: {
          text: this.tmp.operatorType
        },
        point: {
          x: 20,
          y: 10
        }
      });
      this.links.push({
        id: ++this.maxID,
        source: operatorID,
        destination: resultID,
        arrow: "dest",
        point: {
          x: 20,
          y: 10
        }
      });
    },
    onEditNode() {},
    onEditLink() {},
    nodeChanged() {},
    linkChanged() {}
  }
};
</script>
