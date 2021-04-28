// pages/category/category.js

const app = getApp()

import {
  getBooks,
  getLessons
} from '../../service/home.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cdnServer: app.globalData.cdnServer,
    activeKey: 0,
    scrollHeight: 0,
    imageURL: "http://81.68.234.73:8088/images/nav/standardjunior1.jpg",
    books: app.globalData.books,
    textLessons: null,
    wordLessons: null,
    lessons: [{
        id: 1,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 2,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 3,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 4,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 5,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 6,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 7,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 8,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 9,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 10,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 11,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 12,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 13,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 14,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 15,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 16,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 17,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 18,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 19,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 20,
        name: "第1课 李さんは　中国人です"
      },
      {
        id: 21,
        name: "第1课 李さんは　中国人です"
      }
    ]
  },
  computeScrollViewHeight() {
    let that = this
    let query = wx.createSelectorQuery().in(this)
    query.select('.tab').boundingClientRect()
    query.select('.tabbar').boundingClientRect()
    query.exec(res => {
      let searchHeight = res[0].height
      let titleHeight = res[1].height
      let windowHeight = wx.getSystemInfoSync().windowHeight
      let scrollHeight = windowHeight - searchHeight - titleHeight - 30 - 5 - 50
      this.setData({
        scrollHeight: scrollHeight
      })
    })
  },
  onSidebarClick(e) {
    var bookId = e.currentTarget.dataset.item.id
    this.getLessons(bookId)
  },
  itemWordClick(e) {
    var lessonId = e.currentTarget.dataset.item.id
    //加载单词lesson至全局播放列表
    app.globalData.list = this.data.wordLessons
    //指定播放索引playIndex
    //页面跳转
    wx.navigateTo({
      url: '/pages/passage/passage?lessonId=' + lessonId + '&category=word',
      success: function (res) {
        //console.dir(res)
      }
    })
  },
  itemTextClick(e) {
    var lessonId = e.currentTarget.dataset.item.id
    //加载课文lesson至全局播放列表
    app.globalData.list = this.data.textLessons
    //指定播放索引playIndex
    wx.navigateTo({
      url: '/pages/passage/passage?lessonId=' + lessonId + '&category=text',
      success: function (res) {
        //console.dir(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      books: app.globalData.books
    })
    this.getLessons(app.globalData.currentBookId)
  },
  getLessons(bookId) {
    const that = this
    getLessons(bookId).then(res => {
      const cates = res.data
      that.setData({
        textLessons: cates[0].lessons,
        wordLessons: cates[1].lessons
      })
    })
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
    var bookId = app.globalData.currentBookId
    var index = app.globalData.books.findIndex(res => res.id === bookId)
    this.setData({
      activeKey: index
    })
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