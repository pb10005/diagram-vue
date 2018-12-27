<template>
  <div id="app">
    <div>
        <div>
          <VButton v-if="!editable" @click="editable=true" class="button">編集モード</VButton>
          <span v-else>
            <VButton @click="openModal">追加</VButton>
            <VButton @click="endEdit" class="button">編集を終了</VButton>
          </span>
        </div>
        <EditNodeModal 
          :node="{content: {}}"
          :isActive="isModalActive"
          @ok="addNode"
          @cancel="cancel" />
        <EditNodeModal 
          :node="tmpNode"
          :isActive="isEditModalActive"
          @ok="editNode"
          @cancel="cancel" />
        <Diagram
            :width="2000"
            :height="1000"
            :nodes="nodes" 
            :links="links"
            linkColor="#ffeaa7"
            :editable="editable"
            @editNode="openEdit"
            @nodeChanged="nodeChanged"
            @linkChanged="linkChanged">
        </Diagram>
    </div>
  </div>
</template>

<script>
import Diagram from '@/components/Diagram'
import EditNodeModal from '@/components/EditNodeModal'
import VInput from '@/components/VInput'
import VButton from '@/components/VButton'
export default {
    name: "app",
    components: {
      Diagram,
      EditNodeModal,
      VInput,
      VButton
    },
    data() {
        return {
          name: '',
          url: '',
          color: '',
          nodes: [],
          links: [],
          isModalActive: false,
          isEditModalActive: false,
          editable: false,
          tmpNode: {
            id: '',
            content: {
              text: '',
              url: '',
              color: ''
            }
          }
        }
    },
    methods: {
      generateID() {
          return new Date().getTime().toString(16)
              + Math.floor(Math.random() * 1000000).toString(16)
      },
      openModal() {
        this.isModalActive = true
      },
      cancel() {
        this.isModalActive = false
        this.isEditModalActive = false
      },
      addNode(item) {
        this.nodes.push({
          id: this.generateID(),
          content: {
              text: item.content.text,
              url: item.content.url,
              color: item.content.color
          },
          width: 200,
          height: 60,
          point: {
              x: 10,
              y: 100 + Math.random() * 100
          }
        })
        this.isModalActive = false
      },
      openEdit(item) {
        this.tmpNode.id = item.id
        this.tmpNode.content.text = item.content.text
        this.tmpNode.content.url = item.content.url
        this.tmpNode.content.color = item.content.color
        this.isModalActive = false
        this.isEditModalActive = true
      },
      editNode(item) {
        let tmp = this.nodes.find(x => x.id === item.id)
        tmp.content.text = item.content.text
        tmp.content.url = item.content.url
        tmp.content.color = item.content.color
        this.isEditModalActive = false
      },
      endEdit(obj) {
        this.editable = false
      },
      nodeChanged(obj) {
        this.nodes = obj.nodes
      },
      linkChanged(obj) {
        this.links = obj.links
      }
    }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
