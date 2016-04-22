var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');

var styles = {
  buttonDefault: {
    background: '#000',
    color: '#fff'
  },  
};

const Button = React.createClass({
  _handleClick () {
    console.log('the button is clicked!');
  },

  render () {
    return (
      <button style={this.props.style || styles.buttonDefault} onClick={this._handleClick}>
        {this.props.label}
      </button>      
    )
  }
})

module.exports = Radium(Button);