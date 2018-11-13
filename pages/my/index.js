// pages/favour/index.js
import { getBookFavorCount, getClassicFavor } from '../../api/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: {},
    bookCount: 0,
    classics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._userAuthorized()
    getBookFavorCount().then((res) => {
      this.setData({
        bookCount: res.count
      })
    })
    getClassicFavor().then((res) => {
      console.log(res)
      this.setData({
        classics: res
      })
    })
  },
  getUserInfo(ev) {
    // console.log(ev)
    const userInfo = ev.detail.userInfo
    if (userInfo) {
      this.setData({
        authorized: true,
        userInfo
      })
    }
  },
  onJumpToAbout (ev) {
    wx.navigateTo({
      url: '/pages/about/index'
    })
  },
  onStudy (ev) {
    wx.navigateTo({
      url: '/pages/course/index'
    })
  },
  _userAuthorized() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              const userInfo = res.userInfo
              this.setData({
                authorized: true,
                userInfo
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})