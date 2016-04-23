var React = require('react');
var Reflux = require('reflux');
var AppActions = require('../actions/AppActions');

var WindowDimensions = React.createClass({
  componentWillMount: function() {
    // this.updateDimensions({
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // });
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.updateDimensions);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.updateDimensions);
  },

  updateDimensions: function() {
    // this.setState({
    //   height: 
    // })
    console.log('resize window');
    AppActions.resizeWindow();
  },

  render: function() {
    return (
      <span className="window-dimensions"></span>
    );
  }    
})

module.exports = WindowDimensions;