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
      const id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: `../../pages/project_show/project_show?id=${id}`
      })
    },
    goToMap: function(event) {
      console.log(event);
    }
  }
})
