import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <div className="sidenav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/checklist">Checklist</NavLink>
                </div>  
            </div>
        )
    }
}

export default Navbar