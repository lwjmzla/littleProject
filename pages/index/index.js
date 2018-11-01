//index.js
//获取应用实例
import { getClassicLatest } from '../../api/index.js'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    index: null,
    month: null,
    year: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getClassicLatest().then((res) => {
      console.log(res)
      this.setData({
        classic: res
      })
      this._setEpisodeData(res.index)
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

  },
  _setEpisodeData: function (val) {
    const index = val < 10 ? '0' + val : val
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    this.setData({
      index,
      month,
      year
    })
  }
})