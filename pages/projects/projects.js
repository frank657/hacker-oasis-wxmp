// pages/projects/projects.js
Page({

  /**
   * Page initial data
   */
  data: {
    projects: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('IN onLoad')
    let page = this;
      wx.request({
        url: 'http://localhost:3000/api/v1/projects',
        success: function(res) {
          console.log(111, res.data);
          
          page.setData(res.data);
        }
      })
    },
    clickMe:function(e) {
      console.log(e);
      wx.request({
        url: 'http://localhost:3000/api/v1/projects',
        sucess: function (res) {
          console.log(111, res.data);

          page.setData({
            projects: projects
          });
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