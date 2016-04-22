var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');

var styles = {
  button: {
    background: '#000',
    color: '#fff'
  },  
};

const Button = React.createClass({
  render: function() {
    return (
      <button style={styles.button}>i'm a button</button>      
    )
  }
})

module.exports = Radium(Button);