export default {
    methods: {
        getLocation(e) {
            /* マウスカーソルの位置またはタッチ位置を返す */
            let x = 0
            let y = 0
            if (e.touches) {
            /* タッチの場合 */
            x = e.touches[0].pageX
            y = e.touches[0].pageY
            } else {
            /* マウスの場合 */
            x = e.pageX
            y = e.pageY
            }
            return [x, y]
        }
    }
}