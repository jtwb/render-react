var React = require('react');
require('node-jsx').install({ extension: '.jsx' });

var render = require('./lib/render');

var html = render.run('../views/index');
console.log(html);
