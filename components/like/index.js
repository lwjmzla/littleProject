// components/like/index.js
import { reqLike, reqLikeCancel} from '../../api/index.js'
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0
    },
    like: {
      type: Boolean,
      value: false
    },
    classic: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: './images/like.png',
    dislikeSrc: './images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike (ev) {
      const classicId = this.properties.classic.id
      const classicType = this.properties.classic.type
      let count = this.properties.count
      let like = this.properties.like
      let promise
      if (like) {
        promise = reqLikeCancel(classicId, classicType)
      } else {
        promise = reqLike(classicId, classicType)
      }
      promise.then((res) => {
        console.log(res)
        if (res.error_code === 0) {
          count = like ? --count : ++count
          like = !like
          this.setData({
            count,
            like
          })
        }
      })
    }
  }
})
