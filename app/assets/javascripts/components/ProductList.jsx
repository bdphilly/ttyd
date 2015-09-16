var React = require('react'),
    Reflux = require('reflux'),
    ProductActions = require('../actions/ProductActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx');

var ProductList = React.createClass({
  // mixins: [Reflux.connect(ProductStore, 'products')],
  mixins: [
    Reflux.listenTo(ProductStore, "onFetchAllProducts")
  ],
  onFetchAllProducts: function(products) {
    console.log('im in the function')
    // this.setState({
    //   productList: products
    // })
  },
  getInitialState: function () { 
    return {
      products: []
    }
  },  
  componentWillMount: function() {
    ProductActions.fetchAllProducts();
  },  
  componentDidMount: function() {
    this._unsubscribe = ProductStore.listen(this._updateState);
  },
  componentWillUnmount: function() {
    this._unsubscribe();
  },
  _updateState: function(newState) {
    console.log('update state called');
    
    this.setState(newState);
  },
  render: function () {
    console.log('this.state', this.state);

    var productNodes = this.state.products.map(function (product, index) {
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