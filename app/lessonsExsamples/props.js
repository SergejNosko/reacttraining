/**
 * Created by Сергей Носко on 09.06.2017.
 */
const React = require('react'),
      ReactDOM = require('react-dom'),
      PropTypes = require('prop-types');

class Avatar extends React.Component {
    render() {
        return (
            <img src={this.props.img} />
        )
    }
}
Avatar.propTypes = {
    img: propTypes.string.isRequired
};

class Label extends React.Component {
    render() {
        return (
            <h1>Name: {this.props.name}</h1>
        )
    }
}
Label.propTypes = {
    name: propTypes.string.isRequired
};

class ScreenName extends React.Component {
    render() {
        return (
            <h3>Username: {this.props.username}</h3>
        )
    }
}
ScreenName.propTypes = {
    username: propTypes.string.isRequired
};

class Badge extends React.Component {
    render() {
        return (
            <div>
                <Avatar img={this.props.user.img}/>
                <Label name={this.props.user.name}/>
                <ScreenName username={this.props.user.username}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Badge user={{
        name: 'Tyler McGinnis',
        img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
        username: 'tylermcginnis'
    }} />,
    document.getElementById('app')
);