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
    likeId: {
      type: Number
    },
    likeType: {
      type: Number
    },
    index: {
      type: Number
    },
    readonlyed: Boolean
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
      if (this.properties.readonlyed) {
        return
      }
      const id = this.properties.likeId
      const likeType = this.properties.likeType
      let count = this.properties.count
      let like = this.properties.like
      let promise
      wx.setStorageSync('classic_' + this.properties.index, '')
      if (like) {
        promise = reqLikeCancel(id, likeType)
      } else {
        promise = reqLike(id, likeType)
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
