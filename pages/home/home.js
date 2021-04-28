// pages/home/home.js
const app = getApp()

import {
  getBooks
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cdnServer: app.globalData.cdnServer,
    loading: true,
    scrollHeight: 0,
    books: null
  },
  itemclick: function (e) {
    //console.dir(e.currentTarget.dataset.item.id);
    app.globalData.currentBookId = e.currentTarget.dataset.item.id
    wx.switchTab({
      url: '/pages/category/category'
    })
  },
  computeScrollViewHeight() {
    let query = wx.createSelectorQuery().in(this)
    query.select('.tabbar').boundingClientRect()
    query.exec(res => {
      let tabbarHeight = res[0].height
      let windowHeight = wx.getSystemInfoSync().windowHeight
      let scrollHeight = windowHeight - tabbarHeight - 30 - 5
      this.setData({
        scrollHeight: scrollHeight
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    getBooks().then(res => {
      const books = res.data
      app.globalData.books = books
      that.setData({
        books: books
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      loading: false,
    });

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