const App = getApp()

// pages/projects/projects.js
Page({

  /**
   * Page initial data
   */
  data: {
    projects: [],
    hackerday: []
  },

  clickMe: function (event) {
    console.log(event);
    wx.navigateTo ({
      url: '../../pages/project_show/project_show'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const host = App.globalData.host
    let page = this;

    // Get api data
      wx.request({
        url: host + 'projects',
        success: function(res) {
          console.log(111, res.data);

          // Update local data
          page.setData(res.data);
        }
      })
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
