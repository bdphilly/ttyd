var React = require('react'),
    Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx');

var ProductList = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'products')],
  
  init: function() {

  },

  getInitialState: function () { 
    return {
      products: []
    }
  },  

  componentDidMount: function() {
    AppActions.fetchProducts()
  },

  render: function () {
    var productNodes = this.state.products.map(function (product, index) {
      return (
        <Product product={product} key={index} />
      );
    });

    return (
      <div className="productList">
        {productNodes}
      </div>
    );
  }
});

module.exports = ProductList;