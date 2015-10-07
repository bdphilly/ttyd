var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx'),
    CategoryList = require('./CategoryList.jsx'); 

var Link = ReactRouter.Link;       

var styles = {
  linkWrapper: {
    marginLeft: '40px'
  },
  
  container: {
    'border': '1px green solid'
  },

  categoryListLink: {
    textDecoration: 'none',
    fontSize: '36px',
    fontWeight: '300',
    color: '#818181'
  },

  listWrapper: {
    marginLeft: '38px'
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
    var self = this;

    var categoryLists = _.map(this.state.categories, (function (products, index) {
      return (
        <div style={styles.container} key={index}>
          
          <h3 style={styles.linkWrapper}>
            <Link to={`/products/${index}`} style={styles.categoryListLink}>
              {index}
            </Link>
          </h3>

          <div style={styles.listWrapper}>
            <CategoryList products={products} key={index}/>
          </div>

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