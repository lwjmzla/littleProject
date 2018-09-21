//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
        console.log(latitude, longitude)
      }
    })
  },
  globalData: {
    userInfo: null,
    baseUrl: 'https://easy-mock.com/mock/5a1152db868584562f60c7b5/example'
  }
})