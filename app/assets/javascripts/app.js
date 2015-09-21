window._ = require('lodash');

var React = require('react');
var CartApp = require('./components/CartApp.jsx');

var ready = function () {
  React.render(
    <CartApp/>,
      document.getElementById('ttyd-app')
  );
};

$(document).ready(ready);