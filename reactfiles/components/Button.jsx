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
  propTypes: {
    label: React.PropTypes.string,
    style: React.PropTypes.object,
    clickHandler: React.PropTypes.func
  },

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
});

module.exports = Button;