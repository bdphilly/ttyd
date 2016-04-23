var React = require('react');
var AppActions = require('../actions/AppActions');
var Radium = require('radium');
var ProductStore = require('../stores/ProductStore');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var CartStore = require('../stores/CartStore');

const Button = require('./Button.jsx');
var Modal = require('react-modal');

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

const modalStyle = {
  content : {
    top                   : '0px',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    opacity               : '0%',
    transition            : 'all 500ms'
  }
};

var ProductInfoDialog = React.createClass({
  componentWillMount() {
    // var el = document.getElementById('ttyd-app');
    Modal.setAppElement('#ttyd-app');
  },
  
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
    this.refs.myModal.props.style.content.opacity = '100%';
    this.refs.myModal.props.style.content.top = '50%';
  },

  closeModal: function() {
    this.refs.myModal.props.style.content.opacity = '0%';
    this.refs.myModal.props.style.content.top = '0px';
    this.setState({modalIsOpen: false});
  },

  submitModal: function() {
    AppActions.addOrUpdateCart(this.props.product);
    AppActions.updateCartVisible(true);
    this.closeModal();
  },

  render: function() {
    var product = this.props.product;

    var modalButtonStyles = {
      cancel: {
        color: '#000',
        background: '#ccc'
      },
      submit: {
        color: '#fff',
        background: '#000'
      }
    };  

    return (        
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={modalStyle}
        closeTimeoutMS={500}
        ref="myModal" >

        <h2 ref="subtitle">Hello</h2>
        <div>I am a modal</div>
        <div>Here is some stuff...</div>
        
        <Button
          label="Cancel"
          clickHandler={this.closeModal}
          style={modalButtonStyles.cancel} />
        
        <Button
          label="Submit"
          clickHandler={this.submitModal}
          style={modalButtonStyles.submit} />          
      </Modal>
    );
  }  

})


module.exports = ProductInfoDialog;            