import React from 'react';
import { connect } from 'react-redux';

class UserPage extends React.Component {

    userInfo = event => {
        let id = parseInt(this.props.match.params.id)
        let user = (this.props.users.find(item => (item.id === id)))
        console.log(user)
        return (
        <>
        <h1>{user.username}'s Profile</h1>
        <h2>Name: {user.name}</h2>
        <h2>Location: {user.location}</h2>
        <h2>Email: {user.email}</h2>
        {/* <h2>Reach out to <NavLink to={`/users/${item.helpful_user_id}`}>{this.findUser(`${item.helpful_user_id}`)}</NavLink> to get this item</h2> */}
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
           users: state.allUsers
    }
}

export default connect(mapStateToProps, null)(UserPage);