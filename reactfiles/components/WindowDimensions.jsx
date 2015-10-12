var React = require('react');
var Reflux = require('reflux');

var WindowDimensions = React.createClass({
  componentWillMount: function() {
    this.updateDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.updateDimensions);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.updateDimensions);
  },

  updateDimensions: function() {
    this.setState({
      height: 
    })
  },

  render: function() {
    return (
      <span className="window-dimensions">{this.state.width} x {this.state.height}</span>;
    );
  }    
})

module.exports = WindowDimensions;