var render = require('../index.js');

var html = render({
  layout: 'default',
  body: 'index'
});

console.log(html);

console.log('---', render({ body: 'index' }));

