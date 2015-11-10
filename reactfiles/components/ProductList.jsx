var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    Product = require('./Product.jsx'),
    CategoryList = require('./CategoryList.jsx'); 

var Link = ReactRouter.Link;       

var styles = {
  outerContainer: {
    // textAlign: 'center',
    margin: '0 auto'
  },  

  innerContainer: {
    
  },

  linkWrapper: {
    textAlign: 'left'
    // marginLeft: '60px'
  },    

  categoryListLink: {
    textDecoration: 'none',
    fontSize: '36px',
    fontWeight: '300',
    color: '#818181'
  },

  listWrapper: {
  }
}

var resizeTimeout;

var ProductList = React.createClass({
  mixins: [Reflux.connect(ProductStore, 'categories')],
  
  // init: function() {

  // },

  // getStateFromStore: function(props) {
  //   var { id } = props ? props.params : this.props.params;
  // },

  getInitialState: function () { 
    return {
      categories: {},
      productWidth: 200,
      productMargin: 4
    }
  }, 

  componentDidMount: function() {
    AppActions.fetchProducts();
    
    window.addEventListener('resize', this.handleWindowResize);
    //   clearTimeout(resizeTimeout);
    //   resizeTimeout = setTimeout(function() {
    //     console.log('resize!');
    //     this.props.resize();
    //     this.recalculateWidth();
    //   }.bind(this), 300);      
    // }.bind(this));    
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleWindowResize);
  },

  //called when routed to
  componentWillReceiveProps: function(nextProps) {
    this.setState({

    })
  },

  componentDidUpdate: function() {
    this.recalculateWidth();
  },

  handleWindowResize: function(resizeTimeout) {    
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      console.log('resize!');
      this.props.resize();
      this.recalculateWidth();
    }.bind(this), 300);
  },

  recalculateWidth: function() {
    var productWidth = this.state.productWidth + (2 * this.state.productMargin);
    React.findDOMNode(this.refs.productList).style.width = parseInt(this.props.getProductListWidth() / productWidth) * productWidth + 'px';
  },

  render: function () {
    var self = this;

    var categoryLists = _.map(this.state.categories, (function (products, index) {
      return (
        <div style={styles.innerContainer} key={index}>
          
          <h3 style={styles.linkWrapper} ref="categoryHeader">
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
      <div className="product-list" ref="productList" style={styles.outerContainer}>
        {categoryLists}
      </div>
    );
  }
});

module.exports = ProductList;