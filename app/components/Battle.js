const React = require('react'),
      PropTypes = require('prop-types');

class PlayerInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let value = e.target.value;

        this.setState(() => {
            return {
                username: value
            }
        });
    }

    render(){
        return(
            <div className="column">
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input
                    id="username"
                    placeholder="github username"
                    type="text"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState((id, username) => {
            let newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png/?size=200';
            return newState;
        });
    }
    render(){
        let playerOneName = this.state.playerOneName,
            playerTwoName = this.state.playerTwoName;

        return(
            <div>
                <div className="row">
                    {!playerOneName &&
                    <PlayerInput
                        id="playerOne"
                        laber="Player One"
                        onSubmit={this.state.handleSubmit}
                    />}
                    {!playerTwoName &&
                    <PlayerInput
                        id="playerTwo"
                        laber="Player Two"
                        onSubmit={this.state.handleSubmit}
                    />}
                </div>
            </div>
        )
    }
}

module.exports = Battle;