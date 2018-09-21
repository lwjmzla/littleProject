//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({ // 这种方式 其实 跟上面data一样，html一样可以获取到，这种 更灵活 可计算
      test: '01'
    })
    this._getProList()
    // console.log(wx.getSystemInfoSync())
    
  },
  toDetail: function (e) {
    // console.log(e)
    var index = e.currentTarget.dataset.index
    // console.log(index)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + index
    })
  },
  _getProList () {
    var _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5a1152db868584562f60c7b5/example/wx-proList',
      method: 'GET',
      success: function (res) {
        _this.setData({
          proList: res.data.data
        })
      }
    })
  },
  copy () {
    wx.setClipboardData({
      data: 'sadadasdasd',
      success (res) {
        wx.showToast({
          title: '已复制',
        })
      }
    })
  }
})
