// components/like/index.js
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
    }
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
      let count = this.properties.count
      let like = this.properties.like
      count = like ? --count : ++count
      like = !like
      this.setData({
        count,
        like
      })
    }
  }
})
