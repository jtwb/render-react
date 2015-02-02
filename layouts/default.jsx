/** @jsx React.DOM */
var React = require('react');


// NOTE - in the real app, HTML > {HEAD, BODY} belongs to the RootLayout or some shit
// ./layouts would be for user layouts, which are children of <body>
var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Feck ye couch!</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/css/bootstrap.css" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;

