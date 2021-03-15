// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    scrollHeight: 0,
    books:[{name:"新标日初级上", iconUrl:"http://81.68.234.73:8088/images/nav/standardjunior1.jpg", id:"1"},
            {name:"新标日初级下", iconUrl:"http://81.68.234.73:8088/images/nav/standardjunior1.jpg", id:"2"},
            {name:"新标日中级上", iconUrl:"http://81.68.234.73:8088/images/nav/standardjunior1.jpg", id:"3"},
            {name:"新标日中级下", iconUrl:"http://81.68.234.73:8088/images/nav/standardjunior1.jpg", id:"4"},
            {name:"新标日高级上", iconUrl:"http://81.68.234.73:8088/images/nav/standardjunior1.jpg", id:"5"},
            {name:"新标日高级下", iconUrl:"http://81.68.234.73:8088/images/nav/standardjunior1.jpg", id:"6"}]
  },
  itemclick: function (e) {
    console.dir(e.currentTarget.dataset.cid);
    wx.switchTab({
      url: '/pages/category/category'
    })
  },
  computeScrollViewHeight() {
    let that = this
    let query = wx.createSelectorQuery().in(this)
    query.select('.tabbar').boundingClientRect()
    query.exec(res => {
      let tabbarHeight = res[0].height
      let windowHeight = wx.getSystemInfoSync().windowHeight
      let scrollHeight = windowHeight - tabbarHeight - 30 - 5
      this.setData({ scrollHeight: scrollHeight})
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      loading: false,
    });

    let that = this;
    setTimeout(function() {
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