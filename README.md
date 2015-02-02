**render-react** Is a tool for rendering React components in NodeJS. It's like **express-react-views** but without Express.

`render({ body: viewname })` will load `bodies/{viewname}.jsx` and return `React.renderToStaticMarkup(<YourView />)`

`render({ layout: layoutname, body: viewname })` will load `bodies/{viewname}.jsx` and `layouts/{layoutname}.jsx` and return `React.renderToStaticMarkup(<YourLayout><YourView /></YourLayout>)`


Simple:
```javascript
var render = require('render-react');

var props = { title: 'Homepage' };

var html = render({
  layout: 'default',
  body: 'index'
}, props);

console.log(html);
```

Very simple:
```javascript
var render = require('render-react');
console.log(render({ body: 'index' }, { title: 'Homepage' }));
```
