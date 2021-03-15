// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:[
      {name:"中文歌曲日文翻唱", iconUrl:"http://5b0988e595225.cdn.sohucs.com/images/20171005/21ff5ccc1bda48f6b46c4be19f44101e.jpeg", id:"1"},
      {name:"20世纪感动日本", iconUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2539783402,2590574240&fm=26&gp=0.jpg", id:"2"},
      {name:"经典日文歌曲200首", iconUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcn.aacdn.jp%2Fglobal-aaj-front%2Farticle%2F2017%2F11%2F5a13dce272bc5_5a13cd143d20b_2043285052.jpg&refer=http%3A%2F%2Fcn.aacdn.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618212995&t=654470dcd39e9c947c2e7ac3a1c0a1b1", id:"3"},
      {name:"名侦探柯南歌曲", iconUrl:"https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/78310a55b319ebc4bfadb12b8026cffc1f1716ae.jpg", id:"4"},
      {name:"流行日语歌曲", iconUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F9oPIQ7AMkcGtwxV07bzBZxUIaO3M7K8d4WdWgQvdiaag1sQCbOvf8E9ExUDQYL411dUfmcABZFcqGkVf29QkAzg%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618213402&t=29035e54d201046d4c475a7c4e7c1b0e", id:"5"},
      {name:"精彩日文晨读", iconUrl:"http://5b0988e595225.cdn.sohucs.com/images/20171005/e7dd2baee1754889916cd69aadac6b66.jpeg", id:"6"}]
  },
  itemclick: function (e) {
    console.dir(e.currentTarget.dataset.cid);
    wx.navigateTo({
      url: '/pages/music/music?id=1',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        //res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        console.dir(res)
      }
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