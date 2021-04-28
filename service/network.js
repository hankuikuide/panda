//后台服务器地址
export const baseURL = 'http://127.0.0.1:8082'
//超时时间
export const timeout = 500000


function request(options={}) {
  wx.showLoading({
    title: '数据加载ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method,
      header: {
        'Cookie': wx.getStorageSync('cookie'),
        "Content-Type": "application/json",
      },
      timeout: timeout,
      data: options.data,
      success: function (res) {
        if (res.header['Set-Cookie']) {
          wx.setStorageSync('cookie', res.header['Set-Cookie']);
        }
        resolve(res.data)
      },
      fail: function (res) {
        console.dir("请求失败")
        console.dir(res)
      },
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

export default request;