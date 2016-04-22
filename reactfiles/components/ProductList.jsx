var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    ResizeStore = require('../stores/ResizeStore'),
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
    color: '#818181',
    verticalAlign: 'middle',
    lineHeight: '36px'
  },

  listWrapper: {
  },

  viewMoreButton: {
    background: '#B25DDE',
    borderRadius: '5px',
    border: 0,
    fontSize: '16px',
    color: '#fff',
    padding: '10px',
    marginLeft: '20px',
    cursor: 'pointer',
    fontWeight: '300',
    float: 'right'
  }
}

var resizeTimeout;

var ProductList = React.createClass({
  mixins: [
    Reflux.connect(ProductStore, 'categories'),
    Reflux.listenTo(ResizeStore, 'onResizeWindow')
  ],
  
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
  },

  //called when routed to
  componentWillReceiveProps: function(nextProps) {
    this.setState({

    })
  },

  onResizeWindow: function(width) {
    clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(function() {      
      this.props.resize();
      this.recalculateWidth();
    }.bind(this), 300);
  },

  componentDidUpdate: function(data) {    
    this.recalculateWidth();
  },

  recalculateWidth: function() {
    var productWidth = this.state.productWidth + (2 * this.state.productMargin),
        productsPerRow = parseInt(this.props.getProductListWidth() / productWidth);
    
    this.refs.productList.style.width = productsPerRow * productWidth + 'px';

    if (this.state.productsPerRow != productsPerRow) {
      this.setState({
        productsPerRow: productsPerRow
      });
    }
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
            <Link to={`/products/${index}`} style={styles.viewMoreButton}>View More &nbsp; &gt;</Link>
          </h3>

          <div style={styles.listWrapper}>
            <CategoryList products={products.slice(0, self.state.productsPerRow)} key={index}/>
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