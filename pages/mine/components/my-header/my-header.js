// pages/mine/components/my-header.js
import {
  getOpenId,
  getPhoneNumber,
  getUserInfo
} from '../../../../service/mine.js'

var app = getApp()

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
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false, //wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    loginStatus: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getPhoneNumber(e){
      getPhoneNumber(e.detail.encryptedData, e.detail.iv).then(res => {
        console.dir(res)
      })
    },
    getUserInfo(e){
      var that = this
      getUserInfo(e.detail.encryptedData, e.detail.iv).then(res => {
        app.globalData.loginStatus = true
        app.globalData.userInfo = res.data
        console.dir(res.data)
        that.setData({
          userInfo: res.data,
          loginStatus: true
        })
      })
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    //在组件实例刚刚被创建时执行
    ready: function () {
      var that = this;
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          loginStatus: true
        })
      }
    }
  }
})
