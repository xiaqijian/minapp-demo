//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    aLists:[],
    sort:''
  },
  onClickDisabled(event) {
    console.log(event)
  },
  onReady() {
    // console.log(999)
    this.getData()
  },
  getData (sort = 'javascript') {
    const that= this
    wx.request({
      url: app.globalData.baseUrl + '/taobao/index?sort=' + sort, //仅为示例，并非真实的接口地址
      success(res) {
        // console.log(res.data.data)
        let arr = res.data.data
        // app.globalData.sort = 
        that.setData({
          aLists: arr,
          sort: res.data.sort
        })
      }
    })
  },
  onChange (event) {
     console.log(event)
     let sort = event.detail.title
     this.getData(sort)
  }
  
})
