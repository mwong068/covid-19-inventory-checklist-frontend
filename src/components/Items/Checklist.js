import React from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
// import getItemsByCategory from '../../actions/Category/getItemsByCategory';
import getAllUsers from '../../actions/getAllUsers';
import getCategories from '../../actions/Category/getCategories';

class Checklist extends React.Component {

    componentDidMount() {
        // this.props.getItems();
        this.props.getCategories();
    }

    getUser = event => {
        if (Object.keys(this.props.users).length !== 0) {
            let user = this.props.users.find((user) => user.id === this.props.user.id)
            if (user !== undefined){
                let userItems = user.helpful_items
                if ((this.props.items).length !== 0){
                    if((userItems.find(item => item.id === this.props.items[0].item.id)) === undefined){
                        userItems.push(this.props.items[0].item)
                    }
                }
                return <ItemList items={userItems} />
            }
            return <ItemList />
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
            <h1>Hi {this.props.user !== null ? this.props.user.name : null}, welcome to your inventory checklist!</h1>
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
        loaded: state.loading,
        users: state.allUsers,
        items: state.user_items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getItems: () => { dispatch(getItemsByCategory()) },
        getCategories: () => { dispatch(getCategories()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);