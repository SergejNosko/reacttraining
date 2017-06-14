const React = require('react'),
      ReactRouter = require('react-router-dom'),
      Router = ReactRouter.BrowserRouter,
      Route = ReactRouter.Route,
      Switch = ReactRouter.Switch,
      Popular = require('./Popular'),
      Nav = require('./Nav'),
      Home = require('./Home'),
      Battle = require('./Battle');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/popular' component={Popular}/>
                        <Route render={function(){
                            return <p>Not Found!</p>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;