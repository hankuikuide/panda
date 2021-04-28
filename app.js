// app.js
import {
  getOpenId,
  getPhoneNumber
} from './service/mine.js'

App({
  onLaunch() {
    var that = this
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.checkSession({
      success: function(){
        //session 未过期，并且在本生命周期一直有效
        that.globalData.loginStatus = true
        console.dir("session 有效，并且在本生命周期一直有效")
      },
      fail: function(){
        //登录态过期
        that.globalData.loginStatus = false
        console.dir("登录态过期")
        //wx.login() //重新登录
      }
    })
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            lang:"zh_CN",
            success: function(res) { 
              that.globalData.userInfo = res.userInfo
              console.log(that.globalData.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 登录
    wx.login({
      success: (res) => {
        let code = res.code
        let that = this;
        getOpenId(code).then(res => {
          wx.setStorageSync('token', res.data)
        })
      }
    })
  },
  globalData: {
    currentBookId: null,
    books :null,
    loginStatus: false,
    cdnServer:"http://81.68.234.73:8088",
    userInfo: null,
    playIndex: 0, //当前播放列表的index
    list: null, // 播放列表
    currentTime: 0, //当前播放时间
    duration: 0, //总时长
    playing: false
  },
  //监听全局变量
  watch(method){
    var obj = this.globalData
    //监听哪个变量这里就写对应变量的名称
    Object.defineProperty(obj, 'playing', {
      configurable: true,
      enumerable: true,
      set:function(value){
        this._name = value
        method(value)
      },
      get:function(){
        return this._name
      }
    })
  }
})
