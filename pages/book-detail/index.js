// pages/book-detail/index.js
import { getBookDetail, getBookFavor, getBookComment, reqAddComment } from '../../api/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    comments: [],
    classic: {
      like_status: false,
      fav_nums: 0,
      id: null,
      type: 400
    },
    posting: false,
    id: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    this.setData({
      id: options.id
    })
    const id = options.id

    Promise.all([getBookDetail(id), getBookFavor(id), getBookComment(id)]).then((res) => {
      // console.log(res)
      wx.hideLoading()
      this.setData({
        book: res[0]
      })

      const obj = {
        like_status: res[1].like_status,
        fav_nums: res[1].fav_nums,
        id: res[1].id,
        type: 400
      }
      this.setData({
        classic: obj
      })

      this.setData({
        comments: res[2].comments
      })
    })
    // ------Promise.all 代替以下-----------
    // getBookDetail(id).then((res) => {
    //   // console.log(res)
    //   this.setData({
    //     book: res
    //   })
    // })
    // getBookFavor(id).then((res) => {
    //   // console.log(res)
    //   const obj = {
    //     like_status: res.like_status,
    //     fav_nums: res.fav_nums,
    //     id: res.id,
    //     type: 400
    //   }
    //   this.setData({
    //     classic: obj
    //   })
    // })
    // getBookComment(id).then((res) => {
    //   // console.log(res)
    //   this.setData({
    //     comments: res.comments
    //   })
    // })
  },
  onFakePost () {
    this.setData({
      posting: true
    })
  },
  onCancel () {
    this.setData({
      posting: false
    })
  },
  onPost (options) {
    const content = options.detail.value
    if (content === '') {
      wx.showToast({
        title: '短评不能为空',
        icon: 'none'
      })
      return
    }
    if (content.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      })
      return
    }
    this.setData({
      posting: false
    })
    reqAddComment(this.data.id, content).then((res) => {
      if (res.error_code === 0) {
        const curComments = this.data.comments
        const needAddComment = [{
          content: content,
          nums: 1
        }]
        const newComments = needAddComment.concat(curComments)
        this.setData({
          comments: newComments
        })
        wx.showToast({
          title: '+1',
          icon: 'none'
        })
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