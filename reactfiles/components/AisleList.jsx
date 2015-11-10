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
  header: {
    color: '#363636',
    fontSize: '42px',
    textAlign: 'center'
  },

  wrapper: {   
    margin: '0 auto'
  }
}

var resizeTimeout;

var AisleList = React.createClass({
  mixins: [
    Reflux.connect(ProductStore, 'categories'),
    Reflux.listenTo(ResizeStore, 'onResizeWindow'),
    React.addons.LinkedStateMixin
  ],

  getStateFromStore: function(props) {
    // var { id } = props ? props.params : this.props.params;
  },

  getInitialState: function() {
    var categories = ProductStore.filterAisle(this.props.params.categoryId);

    //needs to be subcategories instead
    return {
      categories: categories,
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

  onResizeWindow: function(width) {
    clearTimeout(resizeTimeout);
    debugger
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
    React.findDOMNode(this.refs.aisleList).style.width = parseInt(this.props.getProductListWidth() / productWidth) * productWidth + 'px';
  },    

  render: function () {
    var products = this.state.categories;
    
    return (
      <div style={styles.wrapper} ref="aisleList">
        <Link to="/products">...Back</Link>

        <h2 style={styles.header}>{this.props.params.categoryId}</h2>

        <CategoryList products={products} key={this.props.params.categoryId} />

      </div>
    );
  }
});

module.exports = AisleList;