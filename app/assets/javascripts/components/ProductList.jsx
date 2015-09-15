var React = require('react'),
    Reflux = require('reflux'),
    ProductActions = require('../actions/ProductActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx');

var ProductList = React.createClass({
  // mixins: [Reflux.connect(ProductStore, 'productStore')],
  mixins: [
    Reflux.listenTo(ProductStore, "onFetchAllProducts")
  ],
  onFetchAllProducts: function(products) {
    console.log('im in the function')
    this.setState({
      productList: products
    })
  },
  // componentDidMount: function() {
  //   this.listenTo(statusStore, this.onStatusChange);
  // },
  // componentDidMount: function() {
  //   // this.unsubscribe = ProductStore
  // },
  render: function () {
    console.log('this.state', this.state);

    var productNodes = this.state.productStore.productList.map(function (product, index) {
      console.log('prod', product)
      return (
        <Product name={product.name} details={product.details} key={index} />
      );
    });

    return (
      <div className="productList">
        {productNodes}
      </div>
    );
  }
});

var ready = function () {
  React.render(
    <ProductList/>,
      document.getElementById('products')
  );
};

$(document).ready(ready);

module.exports = ProductList;