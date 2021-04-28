var Fly=require("./wx")
// import Fly from './wx.js';
var fly = new Fly()
var newFly = new Fly()
let time = 0
let baseUrl = 'http://127.0.0.1:8082'
//设置超时时间
fly.config.timeout = 60000
newFly.config.timeout = 60000
//设置baseUrl
fly.config.baseURL = baseUrl
newFly.config.baseURL = baseUrl

fly.interceptors.request.use((request) => {
  wx.showNavigationBarLoading()
  request.headers['token'] = wx.getStorageSync('token')
  request.baseURL = baseUrl
  return request
})
newFly.interceptors.request.use((request) => {
  wx.showNavigationBarLoading()
  request.headers['token'] = wx.getStorageSync('token')
  request.baseURL = baseUrl
  return request
})
fly.interceptors.response.use((response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  function (err, promise) {
    wx.hideNavigationBarLoading()
    // session或者session_key失效的时候重新登录
    if (err.status === 403) {
      //锁定当前实例，后续请求会在拦截器外排队
      this.lock()
      // 当出现未认证的情况时重新登录,超过三次抛出错误
      if (time > 3) {
        time = 0
        return promise.reject(err.message + `(${err.status})`)
      }
      return new Promise((resolve, reject) => {
        wx.login({
          success: (e) => {
            let options = {
              'code': e.code
            }
            resolve(options)
          }
        })
      }).then((options) => {
        return newFly.post('/getOpenId', options).then(info => {
          wx.setStorageSync('token', info.token)
          time++
          //解锁后，会继续发起请求队列中的任务
          this.unlock()
          // 重新请求失败的请求
          return fly.request(err.request)
        })
      })
    }
  }
)
export default fly