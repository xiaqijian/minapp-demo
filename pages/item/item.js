// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log(999)
    this.getData()
  },
  getData() {
    const that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5be7d39ab953a11dfd8ce5b5/example/index', //仅为示例，并非真实的接口地址
      success(res) {
        console.log(res.data.data.list)
        let arr = res.data.data.list
        that.setData({
          aLists: arr
        })
      }
    })
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