import React from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import getCategories from '../../actions/Category/getCategories';
// import getItems from '../../actions/Item/getItems';
// import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

class Checklist extends React.Component {

    componentDidMount() {
        this.props.getCategories();
        // this.props.getItems(this.props.id)
    }

    getUser = event => {
        if (Object.keys(this.props.users).length !== 0) {
            let userItems = this.props.users.find((user) => user.id === this.props.id).helpful_items
            console.log(userItems)
            return <ItemList items={userItems} />

        }
    }

    render() {
        return(
            <div>
            {this.props.loaded ?
            <div className="homepage">
            <div className="header"></div>
            <div className="welcome">
                <div className="loader"></div>
                <br></br>
                <h2>Loading your Checklist</h2>
            </div>
            </div>
            :
            <>
            <h1>Hi {this.props.user}, welcome to your inventory checklist!</h1>
            {this.getUser()}
            </>
            }
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        id: state.userId,
        loaded: state.loading,
        // categories: state.categories
        users: state.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => { dispatch(getCategories()) }
        // getItems: (id) => { dispatch(getItems(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);