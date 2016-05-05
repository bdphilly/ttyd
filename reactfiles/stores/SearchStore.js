var Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductAPI = require('../utils/productAPI');

var SearchStore = Reflux.createStore({  
  listenables: [AppActions],  

  init: function () {

    this.state = {
      searchResults: []
    };
  },

  searchForItems: function(query) {
    ProductAPI.searchForItems(query)
      .then(function(result) {
        console.log('result', result);
        this.state.searchResults = result.data;
        this.trigger(this.state.searchResults);
      }.bind(this))
      .catch(function(error) {
        console.log('error', error);
      }.bind(this));
  },

});

module.exports = SearchStore;