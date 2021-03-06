//index.js
//获取应用实例
import { getClassicLatest, getClassicPrevious, getClassicNext } from '../../api/index.js'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    episode: {},
    latest: true,
    first: false,
    latestIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getClassicLatest().then((res) => {
      console.log(res)
      this.setData({
        classic: res,
        latestIndex: res.index
      })
      this._setEpisodeData(res.index)
      wx.setStorageSync('classic_' + res.index, res)
    })
    // const res = wx.getStorageSync('classic_' + 7)
    // this._setPageData(res)
  },

  // 左上角那块 年月
  _setEpisodeData: function (val) {
    const index = val < 10 ? '0' + val : val
    const month = new Date().getMonth() + 1 + '月'
    const year = new Date().getFullYear()
    this.setData({
      episode: {
        index,
        month,
        year
      }
    })
  },
  leftClick () {
    const index = this.data.classic.index
    const res = wx.getStorageSync('classic_' + (index + 1))
    if (res) {
      this._setPageData(res)
    } else {
      getClassicNext(index).then((res) => {
        this._setPageData(res)
      })
    }
  },
  rightClick () {
    const index = this.data.classic.index
    const res = wx.getStorageSync('classic_' + (index - 1))
    if (res) {
      this._setPageData(res)
    } else {
      getClassicPrevious(index).then((res) => {
        this._setPageData(res)
      })
    }
  },
  _setPageData (res) {
    console.log(res)
    this.setData({
      classic: res
    })
    this._setEpisodeData(res.index)
    
    const firstFlag = res.index === 1 ? true : false
    const latestFlag = res.index < this.data.latestIndex ? false : true
    this.setData({
      first: firstFlag,
      latest: latestFlag
    })
    wx.setStorageSync('classic_' + res.index, res)
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