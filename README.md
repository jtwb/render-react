**render-react** renders nested React components in NodeJS.

It takes a list of filenames, requires them using node-jsx, nests them, and renders the nested tree with `React.renderToStaticMarkup`.


```javascript
/* This is equlivalent to the program below */
var render = require('render-react');
var props = {
    articleId: 161803,
    userId: 271828
};
var layers = [
    '/var/www/webapp/views/articlebody.jsx',
    '/var/www/webapp/layouts/article.jsx',
    '/var/www/webapp/layouts/site.jsx'
];
return render(layers, props);
```

```jsx
/* This is equlivalent to the program above */
require('node-jsx').install({extension: '.jsx'});
var ArticleBody = require('/var/www/webapp/views/articlebody.jsx');
var ArticleLayout = require('/var/www/webapp/layouts/article.jsx');
var SiteLayout = require('/var/www/webapp/layouts/site.jsx');
var props = {
    articleId: 161803,
    userId: 271828
};
return React.renderToStaticMarkup(
    <SiteLayout {...props}>
        <ArticleLayout {...props}>
            <ArticleBody {...props}/>
        </ArticleLayout>
    </SiteLayout>
);
```


#### Examples

See [test/](test/)


Very simple example:
```javascript
var path = require('path');
var render = require('render-react');
console.log(render([ path.resolve('./pages/home.jsx') ], { title: 'Homepage' }));
```


Simple example:
```javascript
var path = require('path');
var render = require('render-react');

var props = { title: 'Homepage' };

var html = render([
  path.resolve('./pages/home.jsx'),
  path.resolve('./layouts/site.jsx')
], props);

console.log(html);
```


