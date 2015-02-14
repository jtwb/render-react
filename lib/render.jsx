/** @jsx React.DOM */
var path = require('path');
var React = require('React');


module.exports = function renderReact(layers, props) {
  var props = props || {};

  if (!layers.length) {
    throw 'Render-react: no layers given';
  }

  var nextpath = layers.pop();
  var tree;
  while (nextpath) {
    tree = renderLayer(nextpath, props, tree);
    nextpath = layers.pop();
  }
  return React.renderToStaticMarkup(tree);
};


function renderLayer(layerpath, props, children) {
  var Layer = require(layerpath);
  //return React.createElement(Layer, React.__spread({},  props), children);
  return <Layer {...props}>{children}</Layer>;
}
