// pages/item/item.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aLists: [],
    sort:'',
    id:'',
    items:{}
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    // console.log(app.globalData.sort)
    this.setData({
      id: options.id,
      sort: options.sort
    })
    this.getDataItem()
    this.getData()
    
    //  console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
   
  },
  getDataItem() {
    const that = this
    const id = that.data.id;
    const sort = that.data.sort
   
    // console.log(id)
    wx.request({
      url: app.globalData.baseUrl + '/taobao/item?sort='+sort+'&id='+id,
      success(res) {
        // console.log(res.data)
        let arr = res.data.data
        that.setData({
          items: arr[0]
        })
      }
    })
  },
  getData() {
    const that = this
    const id = that.data.id;
    const sort = that.data.sort
    // console.log(sort)
    wx.request({
      url: app.globalData.baseUrl + '/taobao/index?sort='+sort, 
      success(res) {
        // console.log(res.data.data)
        let arr = res.data.data
        that.setData({
          aLists: arr
        })
      }
    })
  },
  onClickIndex () {
    wx.redirectTo({
      url: '/pages/index/index?id=1'
    })
  },
  // 拷贝口令
  copyPassw (event) {
    // console.log(event.target.dataset.passw)
    let data = event.target.dataset.passw
    wx.setClipboardData({
      data: data,
      success(res) {
        wx.hideToast();   //关键代码，剪贴成功立马给我隐藏提示
        wx.showModal({
          title: '提示',
          content: '复制成功, 打开手淘即可',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
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
  onShareAppMessage: function (res) {
   
    if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res.target)
    }
   
    return {
      title: this.data.name,
      path: '/pages/item/item?id='+this.data.id+'&sort='+this.data.sort
    }
  }
})