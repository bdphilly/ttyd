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
  handleClick: function () {
    this.props.clickHandler();    
  },

  render () {
    return (
      <button style={this.props.style || styles.buttonDefault} onClick={this.handleClick}>
        {this.props.label}
      </button>      
    )
  }
})

module.exports = Radium(Button);