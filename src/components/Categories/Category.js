import React from 'react';
import { NavLink } from 'react-router-dom';

class Category extends React.Component {
    
    render() {
        return (
            <div className="item">
                <h1><NavLink to={`/categories/${this.props.id}`}>{this.props.name}</NavLink></h1>
                <h3>{this.props.description}</h3>
            </div>
        )
    }
}

export default Category;