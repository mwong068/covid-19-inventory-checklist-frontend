import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


class Homepage extends React.Component{


    render() {
        return(
            <div className="homepage">
                <div className="header"></div>
                <div className="welcome">
                    <h1 style={{fontSize: '38px'}}>Welcome to the COVID-19 Inventory Checklist!</h1>
                    <h3>This app was created to help you keep track of your items
                    <br></br> and list any extras you could help donate to someone in need.
                    <br></br>
                    If you are in need of supplies, you can browse all of the items available.</h3>
                    {/* {Object.keys(this.props.user).length !== 0 } */}
                    {this.props.user !== null ? null :
                    <div className="homepage-buttons">
                        <h3>To begin,</h3>
                        <div>
                            <h3>Click <FontAwesomeIcon icon={faUserPlus} className="navbar-icons"/> to Sign Up</h3>
                        </div>
                        <div><h3>or</h3></div>
                        <div>
                            <h3>Click <FontAwesomeIcon icon={faSignInAlt} className="navbar-icons"/> to Login</h3>
                        </div>
                    </div>
                    }
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Homepage);