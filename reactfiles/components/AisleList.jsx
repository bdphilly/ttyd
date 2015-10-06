var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx'),
    CategoryList = require('./CategoryList.jsx'); 

var Link = ReactRouter.Link;       

var styles = {
  container: {
    'color': 'blue'
  },
  wrapper: {
    'border': '1px green solid'
  }
}

var AisleList = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'categories'), React.addons.LinkedStateMixin],
  
  // init: function() {

  // },

  getStateFromStore: function(props) {
    // var { id } = props ? props.params : this.props.params;
  },

  getInitialState: function() {
    var categories = ProductStore.filterAisle(this.props.params.categoryId);

    //needs to be subcategories instead
    return {
      categories: categories
    }
  },

  // getInitialState: function () { 
  //   return {
  //     categories: {}
  //   }
  // }, 

  //called when routed to
  componentWillReceiveProps: function(nextProps) {
    this.setState({

    })
  },

  render: function () {
    var products = this.state.categories;
    // var categoryLists = _.map(this.state.categories, (function (products, index) {
      return (
        <div style={styles.wrapper}>
          <h2 style={styles.container}>{this.props.params.categoryId}</h2>
          
          <Link to="/products">
            View All
          </Link>

          <CategoryList products={products} key={this.props.params.categoryId} />

        </div>
      );
    // }));

    return (      
      <div className="product-list">
        {categoryLists}
      </div>
    );
  }
});

module.exports = AisleList;