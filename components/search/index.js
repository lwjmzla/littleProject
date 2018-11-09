// components/search/index.js
import { getBookSearch, getBookHotKeyword } from '../../api/index.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      observer: function (newVal) {
        console.log(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchVal: '',
    hotKeys: [],
    historyKeys: [],
    searchFinished: false,
    books: []
  },
  attached () {
    this._getBookHistory()
    getBookHotKeyword().then((res) => {
      // console.log(res)
      this.setData({
        hotKeys: res.hot
      })
    })
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
    _searchBook (ev) {
      const searchVal = ev.detail.value
      this._setStorage(searchVal)
      getBookSearch({
        q: searchVal,
        summary: 1
      }).then((res) => {
        this.setData({
          searchVal: searchVal,
          books: res.books,
          searchFinished: true
        })
        console.log(res)
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
    }
  }
})
