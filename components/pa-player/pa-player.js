// components/pa-player/pa-player.js

var app = getApp();
// 可以在任意页面获取音频实例，实例唯一
const audioManager = wx.getBackgroundAudioManager();

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
    duration: 0,
    currentTime: 0,
    playing: false,
    list:null,
    // list: [{name:'213123123', id:2},{name:'213123123', id:3},{name:'213123123', id:4},{name:'213123123', id:5},{name:'213123123', id:6},{name:'213123123', id:7},{name:'213123123', id:8},{name:'213123123', id:9}],
    listVisible: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 播放新的音频
     */
    setAudio() {
      var that = this;
      var data = app.globalData.list[app.globalData.playIndex]
      that.setData({
        coverImgUrl: app.globalData.cdnServer + data.coverImgUrl,
        title: data.name,
        singer: data.name,
        epname: data.name
      })
      app.globalData.currentTime = 0;
      app.globalData.duration = 0;
      audioManager.title = data.name;
      audioManager.epname = data.name;
      audioManager.singer = data.name;
      audioManager.coverImgUrl = app.globalData.cdnServer +  data.iconUrl;
      audioManager.src = app.globalData.cdnServer + data.src;
    },
    /**
     * 设置音频封面信息，除src
     */
    setAudioCover() {
      var that = this;
      var data = app.globalData.list[app.globalData.playIndex]
      that.setData({
        coverImgUrl: data.iconUrl,
        title: data.name,
        singer: data.name,
        epname: data.name 
      })
      audioManager.title = data.name;
      audioManager.epname = data.name; //专辑
      audioManager.singer = data.name;
      audioManager.coverImgUrl = data.iconUrl;
    },
    itemClick(e){
      var item = e.currentTarget.dataset.item
      
      var playIndex = app.globalData.list.findIndex(function(i) {
        return item.id === i.id;
      });
      app.globalData.playIndex = playIndex;
      this.setAudio();
      this.triggerEvent('playChange')
    },
    onChange(event) {
      wx.showToast({
        icon: 'none',
        title: `当前值：${event.detail}`,
      });
    },
    /**
     * 播放上一首
     */
    playPrev() {
      var that = this;
      var playIndex = app.globalData.list.length - 1;
      if (app.globalData.playIndex > 0) {
        playIndex = app.globalData.playIndex - 1;
      }
      app.globalData.playIndex = playIndex;
      that.setAudio();
      this.triggerEvent('playChange')
    },
    /**
     * 播放下一首
     */
    playNext() {
      var that = this;
      let playIndex = 0;
      if (app.globalData.playIndex < (app.globalData.list.length - 1)) {
        playIndex = app.globalData.playIndex + 1;
      }
      app.globalData.playIndex = playIndex;
      that.setAudio();
      this.triggerEvent('playChange')
    },
    pause() {
      audioManager.pause();
      this.setData({
        playing: false
      });
    },
    /**
     * 播放
     */
    start() {
      audioManager.play();
      this.setData({
        playing: true
      });
    },
    /**
     * 滑动
     */
    seek(e) {
      var value = e.detail;
      audioManager.seek(value);
    },
    /**
     * 滑动中
     */
    seeking(e) {
      var that = this;
      var value = e.detail.value;
      // 显示当前滑动的时间
      that.setData({
        currentTime: value
      })
    },
    // 显示播放列表
    showList(){
        this.setData({
          listVisible: true
        })
    },
    // list失去焦点就隐藏
    closeList(){
      this.setData({
        listVisible: false
      })
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    ready: function () {
      var that = this;
      // 音频播放进度实时回调
      audioManager.onTimeUpdate(function () {
        var currentTime = parseInt(audioManager.currentTime);
        if (currentTime > 0 && currentTime != app.globalData.currentTime) {
          app.globalData.currentTime = currentTime;
          that.setData({
            currentTime: currentTime
          })
          
        }
        if (audioManager.duration != that.data.duration) {
          app.globalData.duration = audioManager.duration;
          that.setData({
            duration: audioManager.duration
          })
        }
      });
      audioManager.onCanplay(function () {
        that.setData({
          playing: true
        });
        app.globalData.playing = true

      });
      audioManager.onEnded(function () {
        console.log('onEnd')
        that.setAudio();
      });
      audioManager.onNext(function () {
        that.playNext();
      });
      audioManager.onPrev(function () {
        console.log('onPrev')
        that.playPrev();
      });
      audioManager.onEnded(function () {
        console.log('onEnded')
        that.playNext();
      });
      audioManager.onStop(function () {
        console.log('onStope')
      });
      audioManager.onWaiting(function () {
        console.log('onWaiting', '正在拼命加载中...')
      });
      // 处理从其他页面进入之前，该播放器已经实例过
      // if (audioManager.duration > 0) {
      //   that.setData({
      //     list: app.globalData.list
      //   }, function () {
      //     that.setAudioCover();
      //   })
      //   return;
      // }
      // 初始加载完成后，将音频列表放到globalData中，缓存播放列表
      // app.globalData.list = that.data.list;
        that.setData({
          list: app.globalData.list
        })
      that.setAudio();
    }
  }
})