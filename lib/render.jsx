/** @jsx React.DOM */
var React = require('React');

var IndexView = require('../views/index');

module.exports = {
  run: function() {
    var html = React.renderToStaticMarkup(<IndexView />);
    console.log(html);
  }
};
