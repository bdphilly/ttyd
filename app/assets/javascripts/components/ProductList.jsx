var React = require('react'),
    Reflux = require('reflux'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx'),
    CategoryList = require('./CategoryList.jsx');

var styles = {
  container: {
    'color': 'blue'
  },
  wrapper: {
    'border': '1px green solid'
  }
}

var ProductList = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'categories')],
  
  // init: function() {

  // },

  // getStateFromStore: function(props) {
  //   var { id } = props ? props.params : this.props.params;
  // },

  getInitialState: function () { 
    return {
      categories: {}
    }
  }, 

  //called when routed to
  componentWillReceiveProps: function(nextProps) {
    this.setState({

    })
  },

  componentDidMount: function() {
    AppActions.fetchProducts()
  },

  render: function () {
    var categoryLists = _.map(this.state.categories, (function (products, index) {
      return (
        <div style={styles.wrapper} key={index}>
          <h2 style={styles.container}>{index}</h2>
          <CategoryList products={products} key={index} />
        </div>
      );
    }));

    return (      
      <div className="product-list">
        {categoryLists}
      </div>
    );
  }
});

module.exports = ProductList;