import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CategoryItemPage extends React.Component {

    itemInfo = event => {
        let id = parseInt(this.props.match.params.id)
        let item = (this.props.items.find(item => (item.id === id)))
        return (
        <>
        <h1>{item.name}</h1>
        <h2>Description: {item.description}</h2>
        <h2>Quantity: {item.quantity}</h2>
        <h2>Availability: {item.availability}</h2>
        <h2>Reach out to <NavLink to={`/users/${item.helpful_user_id}`}>{this.findUser(`${item.helpful_user_id}`)}</NavLink> to get this item</h2>
        </>)
        // use serializer to get info about helpful user to display on page
    }

    findUser = id => {
        let userId = parseInt(id)
        let user = (this.props.users.find(user => (user.id === userId)))
        return user.name
    }
    
    render() {
        return (
            <div className="item-page">
                {Object.keys(this.props.items).length !== 0 ? this.itemInfo(): null}
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

export default connect(mapStateToProps, null)(CategoryItemPage);
