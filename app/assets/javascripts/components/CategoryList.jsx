var React = require('react'),
    Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx');

var CategoryList = React.createClass({
  // mixins: [Reflux.connect(ProductStore, 'products')],
  
  init: function() {

  },

  // getInitialState: function () { 
  //   // return {
  //   //   products: []
  //   // }
  // },  

  componentDidMount: function() {
    
  },

  render: function () {
    var productNodes = this.props.products.map(function (product, index) {
      return (
        <Product product={product} key={index} />
      );
    });

    return (      
      <div className="categoryList">
        {productNodes}
      </div>
    );
  }
});

module.exports = CategoryList;