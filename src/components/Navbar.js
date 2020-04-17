import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {

    logoutUser = () => {
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                    {this.props.currentUser !== null ?
                    <>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/checklist">Checklist</NavLink>
                    <NavLink to="/logout" onClick={this.logoutUser}>Logout</NavLink>
                    </>
                    :
                    <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    </>
                    }
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);