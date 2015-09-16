var Reflux = require('reflux');
var ProductAPI = require('../utils/productAPI');

var ProductActions = Reflux.createActions({
  "fetchAllProducts": {children: ["completed", "failed"]}
});

ProductActions.fetchAllProducts.listenAndPromise(ProductAPI.fetchProducts);// {
  // console.log("in actions")
  // return ProductAPI.fetchProducts();
    // .then(this.completed)
    // .catch(this.failed);
// })

module.exports = ProductActions;