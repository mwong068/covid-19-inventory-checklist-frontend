import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import sendText from '../actions/sendText';

class UserPage extends React.Component {

    userInfo = event => {
        let id = parseInt(this.props.match.params.id)
        let user = (this.props.users.find(item => (item.id === id)))
        console.log(user.helpful_items)
        return (
        <>
        <h1>{user.username}'s Profile</h1>
        <div className="profile-page">
            <div className="profile-left">
                <img src={"https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt="test" className="profile-photo" />
                <h3>{user.name}</h3>
                <h3>Location: {user.location}</h3>
                <h3>Email: {user.email}</h3>
                <button onClick={this.sendText}>Click here to alert this person to your interest in their product</button>
            {/* <h2>Reach out to <NavLink to={`/users/${item.helpful_user_id}`}>{this.findUser(`${item.helpful_user_id}`)}</NavLink> to get this item</h2> */}
            </div>
            <div className="profile-right">
                    <h1>Items being offered by this user</h1>
                    <hr></hr>
                    <br></br>
                        {user.helpful_items.map(item => (
                        <>
                        <div className="item">
                            <div className="image">
                                <img src={"https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt="test" className="test-image" />
                            </div>
                            <div className="text">
                                <NavLink to={`/items/${item.id}`}>{item.name}</NavLink>
                                <h4>{item.description}</h4>
                                <h4>Quantity: {item.quantity}</h4>
                                <h4>Availability: {item.availability}</h4>
                            </div>
                        </div>
                        <br></br>
                        </>
                        ))}
            </div>
        </div>
        </>)
    }

    sendText = event => {
        this.props.sendText();
    }

    render() {
        return(
            <div>
                {Object.keys(this.props.users).length !== 0 ? this.userInfo(): null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
           items: state.items,
           users: state.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return{
        sendText: (event) => { dispatch(sendText(event)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);