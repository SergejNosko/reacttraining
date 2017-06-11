const React = require('react');

class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(function () {
           return {
               selectedLanguage: lang
           };
        });
    }

    render(){
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python'];

        return (
            <ul className="languages">
                {languages.map((lang) =>{/*if we use an arrow func the context is the same as the context outside*/
                    return (
                        <li
                            key={lang}
                            onClick={this.updateLanguage.bind(null, lang)}
                            style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}>
                                {lang}
                        </li>
                    )
                }/*specific contex*/)}
            </ul>
        )
    }
}

module.exports = Popular;