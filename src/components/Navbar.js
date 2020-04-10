import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <h1>hi</h1>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        )
    }
}

export default Navbar