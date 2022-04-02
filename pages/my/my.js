// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    name:'张三'
  },
  handleAuth(){
    wx.getUserProfile({
      desc: '登录授权说明',
      success:res=>{
        console.log(res,'成功info');
        wx.setStorageSync('token', res.userInfo)
        this.setData({
          nickName:res.userInfo.nickName
        })
      }
    })
    wx.getUserInfo({
      lang: "zh_CN",
      success:res=>{
        console.log(res,'userInfo');
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