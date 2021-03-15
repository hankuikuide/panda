// components/pa-player/pa-player.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    innerAudioContext:null,
    duration: 0,
    currentTime: 0,
    playing: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    iconPlayClick(event) {
      if (!!this.innerAudioContext) {
        this.innerAudioContext.play()
      }
      this.setData({
        playing: false
      });
    },
    iconPauseClick(event) {
      if (!!this.innerAudioContext) {
        this.innerAudioContext.pause()
      }
      this.setData({
        playing: false
      });
    },
    onChange(event) {
      wx.showToast({
        icon: 'none',
        title: `当前值：${event.detail}`,
      });
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    ready: function () {
      let that = this
      that.innerAudioContext = wx.createInnerAudioContext()
      that.innerAudioContext.autoplay = true
      that.innerAudioContext.src = 'http://81.68.234.73:8088/mp3/lesson/junior/Lesson34.mp3'
      that.innerAudioContext.onPlay((e) => {
        console.log('开始播放')
        that.setData({
          playing: true
        })

      })
      that.innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })

      that.innerAudioContext.onTimeUpdate(() => {

        that.setData({
          currentTime: that.innerAudioContext.currentTime,
          duration: that.innerAudioContext.duration
        })
      })
      // 在组件实例被从页面节点树移除时执行
    }
  }
})