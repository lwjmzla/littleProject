// components/search/index.js
import { getBookSearch, getBookHotKeyword } from '../../api/index.js'
import { countNum } from '../../config.js'
import { trim } from '../../utils/util.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // more: {
    //   type: String,
    //   // observer: '_loadMore'
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchVal: '',
    hotKeys: [],
    historyKeys: [],
    searchFinished: false,
    books: [],
    moreBooks: [],
    start: 0,
    total: null,
    loadingMore: false,
    loadingFirst: false,
    empty: false
  },
  attached () {
    this._getBookHistory()
    getBookHotKeyword().then((res) => {
      // console.log(res)
      this.setData({
        hotKeys: res.hot
      })
    })
    var that = this;
    //获取系统的参数，scrollHeight数值,微信必须要设置style:height才能监听滚动事件
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          scrollWrapHeight: parseInt(res.windowHeight)
        })
      }
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel () {
      this.triggerEvent('onCancel')
    },
    onDelete () {
      // console.log(this.data.searchVal) 这个获取不了输入了的值
      this.setData({
        searchVal: '',
        searchFinished: false
      })
    },
    onConfirm (ev) {
      this._searchBook(ev)
    },
    onPost (ev) {
      this._searchBook(ev)
    },
    _initSearch(searchVal) {
      this.setData({
        searchVal,
        start: 0,
        loadingFirst: true,
        empty: false
      })
    },
    _searchBook (ev) {
      const searchVal = ev.detail.value
      if (trim(searchVal) === '') {
        wx.showToast({
          title: '书籍名不能为空',
          icon: 'none',
          duration: 2000
        })
        return
      }
      this._initSearch(searchVal)
      this._setStorage(searchVal) // 保存历史搜索记录
      getBookSearch({
        q: searchVal,
        summary: 1,
        start: this.data.start
      }).then((res) => {
        this.setData({
          searchVal: searchVal,
          books: res.books,
          searchFinished: true,
          start: countNum,
          total: res.total,
          loadingFirst: false
        })
        if (res.books.length === 0) {
          this.setData({
            empty: true
          })
        }
        // console.log(res)
      }).catch((err) => {
        console.log(err)
        this.setData({
          loadingFirst: false
        })
      })
    },
    _getBookHistory () {
      this.setData({
        historyKeys: wx.getStorageSync('__SEARCH__') || []
      })
    },
    _setStorage(searchVal) {
      let history = wx.getStorageSync('__SEARCH__')
      if (history) {
        if (!history.includes(searchVal)) {
          history.unshift(searchVal)
          wx.setStorageSync('__SEARCH__', history)
        }
      } else {
        wx.setStorageSync('__SEARCH__', [searchVal])
      }
    },
    _loadMore () {
      if (this.data.start >= this.data.total) {
        console.log('没有结果了')
        return
      }
      if (this.data.loadingMore) {
        return
      }
      this.setData({
        loadingMore: true
      })
      getBookSearch({
        q: this.data.searchVal,
        summary: 1,
        start: this.data.start
      }).then((res) => {
        console.log(res)
        const allBooks = this.data.books.concat(res.books)
        this.setData({
          books: allBooks,
          start: this.data.start + countNum,
          loadingMore: false
        })
      }).catch(() => {
        this.setData({
          loadingMore: false
        })
      })
    },
    lower: function (e) {
      // console.log(e)
      this._loadMore()
    },
  }
})
