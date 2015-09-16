var Reflux = require('reflux');
var ProductAPI = require('../utils/productAPI');

var ProductActions = Reflux.createActions({
  "fetchAllProducts": {children: ["completed", "failed"]}
});

ProductActions.fetchAllProducts.listenAndPromise(ProductAPI.fetchProducts);

module.exports = ProductActions;