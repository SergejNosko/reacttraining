/*npm run start*/
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/App');
require('./index.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);