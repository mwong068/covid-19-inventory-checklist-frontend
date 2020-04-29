import React from 'react';
import { NavLink } from 'react-router-dom';

class Category extends React.Component {
    
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.image_url} alt="test" className="test-image" />
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