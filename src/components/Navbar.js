import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logoutUser from '../actions/logoutUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListAlt, faSignOutAlt, faUserCircle, faUserPlus, faSignInAlt, faTasks } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component {

    logoutUser = () => {
        this.props.logout(this.props.history);
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                    {this.props.currentUser !== null ?
                    <div className="logged-in">
                    <NavLink to="/"><FontAwesomeIcon icon={faHome} className="navbar-icons"/></NavLink>
                    <NavLink to="/checklist"><FontAwesomeIcon icon={faTasks} className="navbar-icons"/></NavLink>
                    <NavLink to="/categories"><FontAwesomeIcon icon={faListAlt} className="navbar-icons"/></NavLink>
                    <NavLink to="/profile"><FontAwesomeIcon icon={faUserCircle} className="navbar-icons"/></NavLink>
                    <NavLink to="/" onClick={() => this.logoutUser(this.props.history)}><FontAwesomeIcon icon={faSignOutAlt} className="navbar-icons" /></NavLink>
                    </div>
                    :
                    <div className="not-logged-in">
                    <NavLink to="/"><FontAwesomeIcon icon={faHome} className="navbar-icons"/></NavLink>
                    <NavLink to="/login"><FontAwesomeIcon icon={faSignInAlt} className="navbar-icons"/></NavLink>
                    <NavLink to="/signup"><FontAwesomeIcon icon={faUserPlus} className="navbar-icons"/></NavLink>
                    </div>
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

const mapDispatchToProps = dispatch => {
    return{
        logout: (history) => { dispatch(logoutUser(history)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);