// components/classic/music/index.js
import behavior from '../classic-behavior.js' // 相当于vue的mixins

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [behavior],
  properties: {
    musicSrc: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        // this._monitorSwitch()
        // // 如果 是音乐 且不是第一次加载 才执行
        // if (newVal && !this.data.firstLoad) {
        //   const currentMusic = wx.getStorageSync('__MUSIC__')
        //   // console.log(currentMusic)
        //   // console.log(this.data.playing)
        //   // console.log(newVal)
        //   if (currentMusic  && currentMusic === newVal) {
        //     this.setData({
        //       playing: true
        //     })
        //   } else {
        //     this.setData({
        //       playing: false
        //     })
        //   }
        // }
        // if (this.data.firstLoad) {
        //   this.setData({
        //     firstLoad: false
        //   })
        // }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstLoad: true,
    playing: false,
    waittingUrl: 'images/player@waitting.png',
    playingUrl: 'images/player@playing.png'
  },
  attached () {
    this._resetStatus()
    this._monitorSwitch()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay (ev) {
      this.setData({
        playing: !this.data.playing
      })
      if (this.data.playing) {
        mMgr.src = this.properties.musicSrc
        // wx.setStorageSync('__MUSIC__', this.properties.musicSrc)
      } else {
        mMgr.pause()
      }
    },
    _resetStatus () {
      // console.log(mMgr)
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src === this.properties.musicSrc) {
        this.setData({
          playing: true
        })
      }
    },
    _monitorSwitch () {
      // 音乐总开关的监听
      mMgr.onPlay(() => {
        this._resetStatus()
        this._setRotate()
      })
      mMgr.onPause(() => {
        this._resetStatus()
        this._setRotate()
      })
      mMgr.onStop(() => { // 关闭按钮触发
        this._resetStatus()
      })
      mMgr.onEnded(() => {
        this._resetStatus()
      })
    },
    _setRotate () {
      // const playing = this.data.playing
      // const imgEl = document.getElementsByClassName('classic-img')[0]
      // const imgTransform = getComputedStyle(imgEl).transform
      // console.log(imgTransform)
      // if (!playing) { // 停止的时候
      //   const imgTransform = getComputedStyle(this.$refs.cdImg).transform
      //   const cdTransform = getComputedStyle(this.$refs.cd).transform
      //   this.$refs.cd.style.transform = cdTransform === 'none' ? imgTransform : imgTransform.concat(' ', cdTransform)
      //   this.$refs.cdImg.classList.remove('play')
      // } else {
      //   this.$refs.cdImg.classList.add('play')
      // }
    }
  }
})
