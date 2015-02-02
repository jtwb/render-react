/** @jsx React.DOM */
var path = require('path');
var React = require('React');


var BODIES_PATH = path.resolve('./bodies');
var LAYOUTS_PATH = path.resolve('./layouts');
var EXT = '.jsx';


module.exports = function renderReact(config, props) {
  var layoutName = config.layout;
  var bodyName = config.body;
  var props = props || {};

  if (!bodyName) {
    throw 'Ah, feck, the body view filename is missin';
  }

  var Body = require(path.join(BODIES_PATH, bodyName) + EXT);

  if (layoutName) {
    var Layout = require(path.join(LAYOUTS_PATH, layoutName) + EXT);
    return React.renderToStaticMarkup(<Layout {...props}><Body {...props} /></Layout>);
  } else {
    return React.renderToStaticMarkup(<Body {...props} />);
  }
};
