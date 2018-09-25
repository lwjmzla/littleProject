//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    this.setData({ // 这种方式 其实 跟上面data一样，html一样可以获取到，这种 更灵活 可计算
      test: '01'
    })
  }
})
