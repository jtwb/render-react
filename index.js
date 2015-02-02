var React = require('react');
require('node-jsx').install({ extension: '.jsx' });

var render = require('./lib/render');

var html = render.run({
  layout: 'default',
  body: 'index'
});

console.log(html);

console.log('---', render.run({ body: 'index' }));
