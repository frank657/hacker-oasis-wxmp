const App = getApp()

// pages/projects/projects.js
Page({

  /**
   * Page initial data
   */
  data: {
    projects: [
      {name: 'Boat'},
      {name: 'Test'},
      {name: 'Boat'},
      {name: 'Boat'}
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const host = App.globalData.host
    // let page = this;
    //   wx.request({
    //     url: host + 'projects',
    //     success: function(res) {
    //       console.log(111, res.data);
          
    //       page.setData(res.data);
    //     }
    //   })
    },   
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})