var React = require('react');
var AppActions = require('../actions/AppActions');
var Radium = require('radium');
var ProductStore = require('../stores/ProductStore');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var styles = {
  productButton: {
    background: '#60AB59',
    minWidth: '30px',
    borderRadius: '10px',
    cursor: 'pointer',
    border: 'none',
    height: '30px',
    marginLeft: '5px',
    color: 'white',

    ':hover': {
      background: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) )'
    }
  },  

  actionItems: {
    display: 'block',
    height: '50px',
    textAlign: 'right',    
    padding: '10px'    
  },

  addText: {
    fontSize: '16px',
    lineHeight: '16px',
    fontFamily: 'Roboto',
    paddingLeft: '5px'
  }
};

var ProductButtons = React.createClass({
  _handleDialogTouchTap: function(event) {
    event.stopPropagation();

    if (event.currentTarget.className == 'plus') {
      AppActions.addOrUpdateCart(this.props.product);
    } else {      
      AppActions.minusOrDeleteFromCart(this.props.product);
    }
  },

  render: function() {
    var minusButton = this.props.quantity ? 
      <button onClick={this._handleDialogTouchTap} className="minus" style={styles.productButton} key="keyForMinusButton">          
        <i className="fa fa-minus"></i>
      </button> : null;

    return (
      <div className="action-items" style={styles.actionItems}>
        {minusButton}          
        <button onClick={this._handleDialogTouchTap} className="plus" style={styles.productButton} key="keyForPlusButton">
          <i className="fa fa-plus"></i>            
          <span style={styles.addText}>ADD</span>
        </button>        
      </div>
    )
  }

})

module.exports = Radium(ProductButtons);