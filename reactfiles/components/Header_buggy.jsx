var React = require('react'),
    AppActions = require('../actions/AppActions'),    
    ProductStore = require('../stores/ProductStore'),
    FlatButton = require('material-ui/lib/flat-button'),
    AppBar = require('material-ui/lib/app-bar'),
    Autocomplete = require('react-autocomplete');

var styles = {
  container: {
    background: '#9BF5FF',
    height: '50px',
    lineHeight: '50px',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '1'
  },

  cartButton: {
    borderRadius: '10px',
    position: 'absolute',
    right: '50px'
  },

  typeaheadInput: {
    width: '400px'
  },

  item: {
    background: '#FFF'
  },

  highlightedItem: {
    background: 'pink'
  },

  autocompleteWrapper: {

  },

  menu: {
    background: 'green'
  }
}

var Header = React.createClass({
  // mixins: [Reflux.connect(ProductStore, 'categories')],  
  mixins: [Reflux.listenTo(ProductStore, 'onFetchProducts')],

  onFetchProducts: function(categories) {
    this.setState({
      categories: categories,
      products: this._getProducts(categories)      
    })
  },

  getInitialState: function () { 
    return {
      categories: {},
      products: {}
    }
  },  

  _cartToggled: function(show) {
    AppActions.updateCartVisible(show);
  },

  _getProducts: function(categories) {
    var products = [];
    _.each(categories, function(category) {
      _.each(category, function(product) {
        products.push(product);
      })
    })
    return products;
  },

  _matchProductToSearch: function(product, value) {
    return (product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            product.category.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  },

  _searchForProduct: function(value, cb) {
    if (value == '') return this.state.products;      

    var items = this.state.products.filter(function (product) {
      return product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    });

    var categories = _.keys(this.state.categories).filter(function (category) {
      return category.toLowerCase().indexOf(value.toLowerCase()) !== -1
    });

    setTimeout(function() {
      cb(items);
    }, 500);    

  },

  render: function() {
    var cartToggleButton = this.props.cartVisible ? 
      <button onClick={this._cartToggled.bind(this, false)} style={styles.cartButton}>Hide Cart</button> : 
      <button onClick={this._cartToggled.bind(this, true)} style={styles.cartButton}>Show Cart</button>;

    return (
      <div style={styles.container}>
        <div style={styles.autocompleteWrapper}>
          <Autocomplete
            items={this.state.products}
            getItemValue={(item) => item.name}
            onSelect={(el) => console.log('selected', el)}
            onChange={(event, value) => {
              this.setState({loading: true})
              this._searchForProduct(value, (items) => {
                debugger
                this.setState({products: items, loading: false})
              })
            }}
            renderItem={(item, isHighlighted) => (
              <div
                style={isHighlighted ? styles.highlightedItem : styles.item}
                key={item.name}>
                {item.name}
              </div>
              )}
            renderMenu={(items, value, style) => (
              <div style={styles.menu}>
                {value === '' ? (
                  <div style={{padding: 6}}>Type of the name of a United State</div>
                ) : this.state.loading ? (
                  <div style={{padding: 6}}>Loading...</div>
                ) : items.length === 0 ? (
                  <div style={{padding: 6}}>No matches for {value}</div>
                ) : this.renderItems(items)}
              </div>
            )}/>
          </div>
        {cartToggleButton}
      </div>
        
    )
  },

  renderItems (items) {
    return items.map((item, index) => {
      var text = item.props.children
      if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
        var style = {
          background: '#eee',
          color: '#454545',
          padding: '2px 6px',
          fontWeight: 'bold'
        }
        return [<div style={style}>{text.charAt(0)}</div>, item]
      }
      else {
        return item
      }
    })
  }  
})

module.exports = Header;