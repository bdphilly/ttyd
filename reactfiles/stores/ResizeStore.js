var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions');

var ResizeStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {
    this.state = {
      windowWidth: window.innerWidth
    };
  },

  resizeWindow: function() {
    this.state.windowWidth = window.innerWidth;
    this.trigger(this.state.windowWidth);
  },

  getWindowSize: function() {
    return this.state.windowWidth;
  },
});

module.exports = ResizeStore;