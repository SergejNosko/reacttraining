const React = require('react'),
      Popular = require('./Popular'),
      ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route;

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

module.exports = App;