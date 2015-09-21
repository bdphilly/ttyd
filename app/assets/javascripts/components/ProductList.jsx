var React = require('react'),
    Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx');

var ProductList = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'products')],
  getInitialState: function () { 
    return {
      products: []
    }
  },  
  componentWillMount: function() {
    AppActions.fetchAllProducts();
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