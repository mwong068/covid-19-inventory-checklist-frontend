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
        <div className="profile-left">
            <div className="profile-header"><h1>{user.username}'s Profile</h1></div>
            <h2>Name: {user.name}</h2>
            <h2>Location: {user.location}</h2>
            <h2>Email: {user.email}</h2>
            <button onClick={this.sendText}>Click here to alert this person to your interest in their product</button>
        {/* <h2>Reach out to <NavLink to={`/users/${item.helpful_user_id}`}>{this.findUser(`${item.helpful_user_id}`)}</NavLink> to get this item</h2> */}
        </div>
        <div className="profile-right">
                <h1>Items being offered by this user</h1>
                {user.helpful_items.map(item => (<NavLink to={`/items/${item.id}`}>{item.name}</NavLink>))}
                </div>
        </>)
    }

    sendText = event => {
        this.props.sendText();
    }

    render() {
        return(
            <div className="profile-page">
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