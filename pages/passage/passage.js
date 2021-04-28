import {
  getSubtitle,
  getWords
} from '../../service/home.js'

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    content: null,
    category: null
  },
  computeScrollViewHeight() {
    let that = this
    let query = wx.createSelectorQuery().in(that)
    query.select('.footer').boundingClientRect()
    query.exec(res => {
      let tabbarHeight = res[0].height
      let windowHeight = wx.getSystemInfoSync().windowHeight
      let scrollHeight = windowHeight - tabbarHeight - 110
      that.setData({
        scrollHeight: scrollHeight
      })
    })
  },
  //播放器组件事件，下一首
  playChange(){
    var lesson = app.globalData.list[app.globalData.playIndex]
    this.setData({
      lessonId: lesson.id
    },function(){
      this.showContent()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      category: options.category,
      lessonId: options.lessonId
    },function(){
      this.showContent()
    })
    
  },
  showContent(){
  
    if(this.data.category==='text'){
      getSubtitle(this.data.lessonId).then(res => {
        this.setData({
          content: res.data
        })
      })
    }else{
      getWords(this.data.lessonId).then(res => {
        this.setData({
          content: res.data
        })
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    setTimeout(function () {
      that.computeScrollViewHeight()
    }, 100)
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