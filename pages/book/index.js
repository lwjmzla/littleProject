// pages/book/index.js
import { getBookHotList } from '../../api/index.js'
import { random } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: true,
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getBookHotList().then((res) => {
      console.log(res)
      this.setData({
        books: res
      })
    })
    // wx.navigateTo({
    //   url: '/pages/book-detail/index?id=1&name=lwj'
    // })
  },
  onSearching () {
    this.setData({
      searching: true
    })
  },
  onCancel () {
    this.setData({
      searching: false
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (ev) {
    // this.setData({
    //   more: random(16)
    // })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})