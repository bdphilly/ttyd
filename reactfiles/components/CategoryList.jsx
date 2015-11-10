var React = require('react'),
    Reflux = require('reflux'),
    Radium = require('radium'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    CartStore = require('../stores/CartStore'),
    Product = require('./Product.jsx');

var styles = {
  container: {
  }
};

var CategoryList = React.createClass({
  mixins: [Reflux.connect(CartStore, 'cart')],

  getInitialState: function () { 
    // return {
    //   productWidth: 200,
    //   productMargin: 4
    // }
  }, 

  componentDidMount: function() {
    
  },

  // getQuantityInCart: function(product) {
  //   debugger
  //   if (_.include(this.state.cart, function(orderItem) { return orderItem.product.id == this.props.product.id})) {      
  //     return this.props.cart[this.props.product.id].quantity;
  //   } else {
  //     return 0;
  //   }
  // },

  render: function () {
    var self = this;

    var productNodes = this.props.products.map(function (product, index) {
      var orderItem = _.find(self.state.cart, function (orderItem) { return orderItem.product_id == product.id }),
          quantity = orderItem ? orderItem.quantity : 0;

      return (
        <Product product={product} key={index} quantity={quantity} />
      );
    });

    return (      
      <ul className="category-list" ref="categoryList" style={styles.container}>
        {productNodes}
      </ul>
    );
  }
});

module.exports = Radium(CategoryList);