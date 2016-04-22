    // return (      
    //   <Dialog ref="dialog" 
    //           title={this.props.product.name}                  
    //           actions={customActions}              
    //           modal={true}>
    //     The internals of the dialog!
    //   </Dialog>        
    // );
var React = require('react');
var AppActions = require('../actions/AppActions');
var Radium = require('radium');
var ProductStore = require('../stores/ProductStore');
var Dialog = require('material-ui/lib/dialog');
var Toggle = require('material-ui/lib/toggle');
var Colors = require('material-ui/lib/styles/colors');
var Paper = require('material-ui/lib/paper');
var FontIcon = require('material-ui/lib/font-icon');
var FlatButton = require('material-ui/lib/flat-button');
var RaisedButton = require('material-ui/lib/raised-button');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


const Button = require('./Button.jsx');
var Modal = require('react-modal');



var ThemeManager = require('material-ui/lib/styles/theme-manager'); 

var LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

var styles = {
  container: {
    background: 'red',
    display: 'inline-block',
    margin: '10px',
    width: '200px',
    height: '300px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23',

    ':hover': {},

    transition: 'all 500ms'
  },

  actionItems: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    backgroundColor: 'red',
    borderTop: '1px solid blue',
    height: '50px',
    bottom: '0'
  },

  image: {
    width: '175px',
    height: '175px',
    margin: '0 auto',
    display: 'block',
    padding: '10px'
  },

  button: {
    minwidth: '50px'
  },

  productQuantityWrapper: {    
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#FFF',
    height: '200px',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    textAlign: 'center',
    lineHeight: '38px'
  },

  productQuantityAmount: {
    marginTop: '50px',
    fontSize: '40px',
    display: 'block'    
  },

  productQuantityLabel: {
    fontSize: '16px',
    display: 'block'
  },

  media: {
    height: '220px',
    position: 'relative'
  }
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// var ProductInfoDialog = React.createClass({
//   _handleCustomDialogCancel: function() {
//     this.refs.dialog.dismiss();
//   },

//   _handleCustomDialogSubmit: function(event) {
//     AppActions.addToCart(this.props.product);    
//     AppActions.updateCartVisible(true);
//     this.refs.dialog.dismiss();
//   },

//   render: function() {
//     var product = this.props.product;

//     var customActions = [
//       <FlatButton
//         label="Cancel"
//         secondary={true}
//         key={product.id}
//         onTouchTap={this._handleCustomDialogCancel} />,
//       <FlatButton
//         label="Submit"
//         primary={true}
//         key={product.id}
//         onTouchTap={this._handleCustomDialogSubmit} />
//     ];      

//     return (      
//       <Dialog ref="dialog" 
//               title={this.props.product.name}                  
//               actions={customActions}
//               modal={true}>
//         The internals of the dialog!
//       </Dialog>        
//     );
//   }  

// })

var ProductInfoDialog = React.createClass({
  _handleCustomDialogCancel: function() {
    this.refs.dialog.dismiss();
  },

  _handleCustomDialogSubmit: function(event) {
    AppActions.addToCart(this.props.product);
    AppActions.updateCartVisible(true);
    this.refs.dialog.dismiss();
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
        muiTheme: this.state.muiTheme
    };
  },  

  // getInitialState: function() {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
  //   }
  // },

  // showDialog: function() {
  //   this.refs.dialog.show();
  // },

  componentWillMount() {
    var el = document.getElementById('ttyd-app');
    Modal.setAppElement(el);
    // Modal.setAppElement('#ttyd-app');
  },
  
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },  

  render: function() {
    var product = this.props.product;

    var cancelButtonStyle = {
      color: '#000',
      background: '#ccc'
    }

    var customActions = [
      <Button
        label="Cancel"
        key={product.id}
        style={cancelButtonStyle} />,
      <RaisedButton
        label="Submit"
        primary={true}
        key={product.id + 1}
        onTouchTap={this._handleCustomDialogSubmit} />
    ];      

    return (        
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>      
    );
  }  

})


module.exports = ProductInfoDialog;            