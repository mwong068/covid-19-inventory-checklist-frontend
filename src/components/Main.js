import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import Checklist from './Items/Checklist';
import Categories from './Categories/Categories';
import CategoryItemList from './Categories/CategoryItemList';
import CategoryItemPage from './Categories/CategoryItemPage';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import checkUser from '../actions/checkUser';
import getAllUsers from '../actions/getAllUsers';
import getCategories from '../actions/Category/getCategories';
import Profile from './Profile';
import UserPage from './UserPage';
import getItemsByCategory from '../actions/Category/getItemsByCategory';

class Main extends React.Component {

    componentDidMount() {
        this.props.checkUser();
        // this.props.getItems();
        this.props.getAllUsers();
        // this.props.getCategories();
    }

    render() {
        return (
            <div className="main">
                <Route exact path="/" render={(props) => <Homepage {...props} />} />
                <Route exact path="/checklist" render={(props) => <Checklist {...props} id={this.props.userId} />} />
                <Route exact path="/categories" render={(props) => <Categories {...props} />} />
                <Route exact path="/categories/:id" render={(props) => <CategoryItemList {...props} />} />
                <Route exact path="/items/:id" render={(props) => <CategoryItemPage {...props} />} />
                <Route exact path="/users/:id" render={(props) => <UserPage {...props} />} />
                <Route exact path="/profile" render={(props) => <Profile{...props} name={this.props.currentUser} />} />
                {this.props.current_user ? null :
                <>
                <Route exact path="/login" render={(props) => <Login {...props} />} />
                <Route exact path="/signup" render={(props) => <Signup {...props} />} />
                </>
                }
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkUser: () => { dispatch(checkUser()) },
        // getItems: () => { dispatch(getItemsByCategory()) },
        getAllUsers: () => { dispatch(getAllUsers()) }
        // getCategories: () => { dispatch(getCategories()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);