//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    aLists:[]
  },
  onClickDisabled(event) {
    console.log(event)
  },
  onReady() {
    console.log(999)
    this.getData()
  },
  getData () {
    const that= this
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
  }
  
  
})
