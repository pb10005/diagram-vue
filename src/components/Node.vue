<template>
    <svg>
        <g v-if="selected">
            <text :x="x+5" :y="y+ height + 22" font-size="20" class="button" fill="#00b894" @click="editCandidate">編集</text>
        </g>
        <g v-if="selected">
            <text :x="x+5" :y="y-13" font-size="20" class="button" fill="#00b894" stroke="none" @click="toggleSelect">リンク</text>
            <text :x="x+65" :y="y+ height + 22" font-size="20" class="button" fill="red" @click="remove">削除</text>
        </g>
        <g v-if="createLinkMode && !selected">
            <text :x="x+5" :y="y-13" font-size="20" class="button" fill="red" @click="commitDest">選択</text>
        </g>
        <g>
            <rect
                class="grab"
                :x="x"
                :y="y"
                :width ="width"
                :height="height"
                rx="10"
                ry="6"
                :fill="content.color || '#dfe6e9'"
                @mousedown="mousedown"
                @mousemove="mousemove"
                @mouseup="mouseup"/>
            <a target="_blank" :href="content.url">
                <text :x="x+5" :y="y+height/2" fill="#2d3436">{{content.text}}</text>
            </a>
        </g>
    </svg>
</template>
<script>
export default {
    props: {
        node: {
            width: Number,
            height: Number,
            id: String,
            point: {
                type: Object,
                default: {
                    x: 0,
                    y: 0
                }
            },
            content: {
                text: String,
                url: String,
                color: String
            }
        },
        editable: Boolean,
        createLinkMode: Boolean,
        selected: Boolean
    },
    data() {
        return {
            startPosition: null,
            cursorOffset: {
                x: 0,
                y: 0
            },
            id: this.node.id,
            x: this.node.point.x,
            y: this.node.point.y,
            width: this.node.width,
            height: this.node.height,
            content: this.node.content
        }
    },
    methods: {
        mousedown(e) {
            if (!this.editable) return;
            this.$emit("select", this.id)

            this.cursorOffset.x = e.pageX;
            this.cursorOffset.y = e.pageY;
            this.startPosition = {x: this.x, y: this.y}
            //イベントを登録
            document.addEventListener("mousemove", this.mousemove)
            document.addEventListener("mouseup", this.mouseup)
        },
        mousemove(e) {
            if(this.startPosition){
                this.x = this.startPosition.x + (e.pageX - this.cursorOffset.x);
                this.y = this.startPosition.y + (e.pageY - this.cursorOffset.y);
                this.$emit('updateLocation', {
                    id: this.id, 
                    x: this.x,
                    y: this.y
                })
            }
        },
        mouseup(e) {
            this.startPosition = null
            //イベントの後始末
            document.removeEventListener("mousemove", this.mousemove)
            document.removeEventListener("mouseup", this.mouseup)
        },
        toggleSelect(e) {
            this.$emit('toggleSelect')
        },
        commitDest(e) {
            this.$emit('commitDest', this.id)
        },
        remove(e) {
            this.$emit('remove', this.id)
        },
        editCandidate(e) {
            this.$emit('editNode', {
                id: this.id,
                content: this.content
            })
        }
    }
}
</script>