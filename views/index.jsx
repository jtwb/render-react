/** @jsx React.DOM */
var React = require('react');


var IndexView = React.createClass({
  render: function() {
    var games = this.props.games;
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top navbar-inverse" role="navigation">
          <div className="container">
            <a className="navbar-brand" href="/">Game Viewer</a>
            <button type="button" className="btn btn-primary navbar-btn navbar-right">Add Game</button>
          </div>
        </nav>
        <div className="container">
          <h1>Game listing</h1>
        </div>
      </div>
    );
  }
});

module.exports = IndexView;
