var render = require('../index.js');

var html = render({
  layout: 'default',
  body: 'index'
});

console.log(html);

var props = { title: 'My Homepage', games: [{}] };
html = render({
  layout: 'default',
  body: 'index'
}, props);

console.log("\n", html);


console.log("\n", render({ body: 'index' }));

console.log("\n", render({ body: 'index' }, { games: [{}, {}, {}] }));


console.log('DONE');
