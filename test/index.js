var path = require('path');
var render = require('../index.js');

var html = render([
  path.resolve('bodies/index.jsx'),
  path.resolve('layouts/default.jsx')
]);

console.log(html);

var props = { title: 'My Homepage', games: [{}] };
html = render([
  path.resolve('bodies/index.jsx'),
  path.resolve('layouts/default.jsx')
], props);

console.log("\n", html);


console.log("\n", render([ path.resolve('bodies/index.jsx') ]));

console.log("\n", render([ path.resolve('bodies/index.jsx') ], { games: [{}, {}, {}] }));


console.log('DONE');
