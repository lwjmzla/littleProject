// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '...',
    },
    latest: {
      type: Boolean
    },
    first: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft (ev) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
    },
    onRight(ev) {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
