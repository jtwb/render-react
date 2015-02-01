/** @jsx React.DOM */
var React = require('React');


module.exports = {
  run: function(path) {
    var IndexView = require(path);
    var html = React.renderToStaticMarkup(<IndexView />);
    return html;
  }
};
