import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import sendText from '../actions/sendText';

class UserPage extends React.Component {

    userInfo = event => {
        let id = parseInt(this.props.match.params.id)
        var user = (this.props.users.find(item => (item.id === id)))
        console.log(user)
        return (
        <>
        <h1>{user.username}'s Profile</h1>
        <div className="profile-page">
            <div className="profile-left">
                <img src={user.image_url} alt={user.name} className="profile-photo" />
                <h2>{user.name}</h2>
                <h3>Location: {user.location}</h3>
                <h3>Email: {user.email}</h3>
                <hr className="break"></hr>
                <h3>Interested in a product from {user.name}?</h3>
                <button onClick={(event) => this.props.sendText(event, user.id, this.props.user.name)} className="sms-button">Click here to alert them of your interest</button>
                <br></br>
            </div>
            <div className="profile-right">
                    <h2>Items being offered by this user</h2>
                    <hr></hr>
                    <br></br>
                        {user.helpful_items.map(item => (
                        <>
                        <div className="item">
                            <div className="image">
                                <img src={item.image_url} alt="test" className="user-item-image" />
                            </div>
                            <div className="user-item-text">
                                <h3><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></h3>
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
           users: state.allUsers,
           user: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return{
        sendText: (event, id, user) => { dispatch(sendText(event, id, user)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);