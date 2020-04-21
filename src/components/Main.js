import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import Checklist from './Items/Checklist';
import Categories from './Categories/Categories';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import checkUser from '../actions/checkUser';
import Profile from './Profile';

class Main extends React.Component {

    componentDidMount() {
        this.props.checkUser();
    }

    render() {
        return (
            <div className="main">
                <Route exact path="/" render={(props) => <Homepage {...props} />} />
                <Route exact path="/checklist" render={(props) => <Checklist {...props} />} />
                <Route exact path="/categories" render={(props) => <Categories{...props} />} />
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
        checkUser: () => { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);