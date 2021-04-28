// components/pa-tabbar/pa-tabbar.js
var app = getApp()
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    active: {
      type: Number,
      value: 0,
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    playing: false,
    value: 80,
    gradientColor: {
      '0%': '#0c8ed9',
      '100%': '#0c8ed9',
    },
    bars:[{ name:"首页", icon:"wap-home-o", info:"", dot:"",path:"/pages/home/home" },
    { name:"分类", icon:"cluster-o", info:"true", dot:"1",path:"/pages/category/category" },
    { name:"play", icon:"", info:"", dot:"",path:"" },
    { name:"音乐", icon:"music-o", info:"5", dot:"" ,path:"/pages/discovery/discovery"},
    { name:"我的", icon:"contact", info:"20", dot:"" ,path:"/pages/mine/mine"}]
  },
  methods:{
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
      // 页面跳转
      var item = this.data.bars[event.detail];
      if(!!item){
        wx.switchTab({
          url: item.path
        });
      }
      
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.watch(this.watchBack)
  },
  watchBack(value){
    this.setData({
      playing: value
    })
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