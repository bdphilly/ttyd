var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions');

var AppStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {
    this.state = {
      windowWidth: window.innerWidth
    };
  },

  onResizeWindow: function() {
    console.log('in the resize store!');
    this.state.windowWidth = window.innerWidth;
    this.trigger(this.state.windowWidth);
  }
});

module.exports = AppStore;