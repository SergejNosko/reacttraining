const React = require('react'),
      Popular = require('./Popular'),
      ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route;

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Rout path='/popular' component={Popular}/>
                </div>
            </Router>
        )
    }
}

module.exports = App;