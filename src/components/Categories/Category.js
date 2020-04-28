import React from 'react';
import { NavLink } from 'react-router-dom';

class Category extends React.Component {
    
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={"https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt="test" className="test-image" />
                </div>
                <div className="text">
                    <h2><NavLink to={`/categories/${this.props.id}`}>{this.props.name}</NavLink></h2>
                    <h3>{this.props.description}</h3>
                    <button>Edit</button>
                    <span style={{color: "white"}}>hiii</span>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Category;