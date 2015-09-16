var React = require('react');
var CartActions = require('../actions/CartActions');
var Radium = require('radium');
var Modal = require('react-modal');
var Dialog = require('material-ui/lib/dialog');
var Toggle = require('material-ui/lib/toggle');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
// var RaisedButton = require('material-ui/lib/raised-button');

var styles = {
  container: {
    background: 'red',

    ':hover': {
      background: 'black'
    },

    transition: 'all 500ms'
  },
  image: {
    width: '100px',
    height: '100px'
  },
};



var appElement = document.getElementById('product');
console.log('appElement,', appElement)
Modal.setAppElement(appElement);
// Modal.injectCSS();

var Product = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    // this.setState({modalIsOpen: true});
    
    // Dialog.show();
  },

  closeModal: function() {
    // this.setState({modalIsOpen: false});
    // Dialog.dismiss();
  },
  _handleDialogTouchTap: function() {
    console.log('handling the tao')
    this.refs.modal.show();
  },

  addToCart: function(event) {
    var id = this.props.selected.id;
    var update = {
      name: this.props.product.name,
      details: this.props.selected.details
    }
    CartActions.addToCart(id, update);
    CartActions.updateCartVisible(true);
  },


  /* two functions required for react-ui */
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },

  selectVariant: function(event) {
    CartActions.selectProduct(event.target.value);
  },

  render: function() {
      console.log('props props', this.props);

      var standardActions = [
        { text: 'Cancel' },
        { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
      ];

      return (
        <div className="product" style={styles.container}>
          <img src={'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg'}
            style={styles.image}
          />
          <button label="This be a label" onClick={this._handleDialogTouchTap}></button>
          <div className="product-detail-wrapper">
            <h2 className="product-name">{this.props.name}</h2>
            <p className="product-details">{this.props.details}</p>
          </div>
          <Dialog ref="modal" 
                  title="test title" 
                  actions={standardActions}
                  modal={true}>
            The internals of the dialog!
          </Dialog>        
        </div>
      );
  }
})

module.exports = Radium(Product);