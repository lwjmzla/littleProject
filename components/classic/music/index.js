// components/classic/music/index.js
import behavior from '../classic-behavior.js' // 相当于vue的mixins
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [behavior],
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    waittingUrl: 'images/player@waitting.png',
    playingUrl: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay (ev) {

    }
  }
})
