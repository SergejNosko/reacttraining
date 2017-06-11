const React = require('react'),
      ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>Hello Everyone!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);