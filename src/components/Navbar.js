import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <NavLink to="/"><h1>Home</h1></NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        )
    }
}

export default Navbar