const App = getApp()

// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {
    users: [],
    sessionTabActive: true
  },

  changeTab(e) {
    const sessionTabActive = e.target.dataset.tab === 'sessionTab'
    this.setData({ sessionTabActive })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/users/1",
      // url: "http://localhost:3000/api/v1/users/${}",
      success: function (res) {
        
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