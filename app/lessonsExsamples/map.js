/**
 * Created by Сергей Носко on 09.06.2017.
 */
class Users extends React.Component {
    render() {
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {this.props.list.filter(function(item){
                        return item.friend === true;
                    }).map(function (item) {
                        return <li key={item.name}/*React requires a unique prop to mark each element of the array when it changes*/>{item.name}</li>
                    })}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {this.props.list.filter(function(item){
                        return item.friend !== true;
                    }).map(function (item) {
                        return <li>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
User.propTypes = {
  list: propTypes.arrayOf(propTypes.shape({
      name: propTypes.string.isRequired,
      friend: propTypes.bool.isRequired
  }))
};

ReactDOM.render(
    <Users list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false } ]}
    />,
    document.getElementById('app')
);