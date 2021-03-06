var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    AppActions = require('../actions/AppActions'),
    ProductStore = require('../stores/ProductStore'),
    SearchStore = require('../stores/SearchStore'),
    ResizeStore = require('../stores/ResizeStore'),    
    Product = require('./Product.jsx'),
    CategoryList = require('./CategoryList.jsx'),
    Router = require('react-router'); 

var Link = ReactRouter.Link;       

var styles = {
  header: {
    color: '#363636',
    fontSize: '42px',
    textAlign: 'center'
  },

  wrapper: {   
    margin: '0 auto'
  },

  backButton: {
    background: '#B25DDE',
    borderRadius: '5px',
    border: 0,
    fontSize: '16px',
    color: '#fff',
    padding: '10px',
    marginLeft: '20px',
    cursor: 'pointer',
    fontWeight: '300',
    float: 'left'
  }
}

var resizeTimeout;

var AisleList = React.createClass({
  mixins: [
    Reflux.connect(ProductStore, 'categories'),
    // Reflux.connect(ProductStore, 'searchResults'),
    Reflux.listenTo(SearchStore, 'onSearchForItems'),
    Reflux.listenTo(ResizeStore, 'onResizeWindow')
    // React.addons.LinkedStateMixin
  ],

  getStateFromStore: function(props) {
    // var { id } = props ? props.params : this.props.params;
  },

  getInitialState: function() {
    var categories;
    if (this.props.params.categoryId == 'search') {
      AppActions.searchForItems(this.props.location.query.query);
    } else {
      categories = ProductStore.filterAisle(this.props.params.categoryId);
    }
    

    //needs to be subcategories instead
    return {
      categories: categories,
      searchResults: [],
      productWidth: 200,
      productMargin: 4      
    }
  },

  componentDidMount: function() {
    this.recalculateWidth();
  },

  //called when routed to
  componentWillReceiveProps: function(nextProps) {
    this.setState({

    })
  },

  onSearchForItems: function(results) {
    this.setState({
      categories: results
    })
  },

  onResizeWindow: function(width) {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
      console.log('resize!');
      this.props.resize();
      this.recalculateWidth();
    }.bind(this), 300);    
  },

  componentDidUpdate: function() {
    this.recalculateWidth();
  },

  recalculateWidth: function() {
    var productWidth = this.state.productWidth + (2 * this.state.productMargin);
    this.refs.aisleList.style.width = parseInt(this.props.getProductListWidth() / productWidth) * productWidth + 'px';
  },    

  render: function () {
    var products = this.state.categories || [];
    
    return (
      <div style={styles.wrapper} ref="aisleList">
        <Link to="/products" style={styles.backButton}>&nbsp; &lt; Back</Link>

        <h2 style={styles.header}>{this.props.params.categoryId}</h2>

        <CategoryList products={products} key={this.props.params.categoryId} />

      </div>
    );    
  }
});

module.exports = AisleList;