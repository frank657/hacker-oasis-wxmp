// components/card/card.js
Component({
  /**
   * Component properties
   */
  properties: {
    project: {
      type: Object,
      default: {}
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    clickMe: function (event) {
      console.log(event);
      wx.navigateTo({
        url: '../../pages/project_show/project_show'
      })
    }
  }
})
