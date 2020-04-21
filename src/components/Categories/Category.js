import React from 'react';
import ItemList from '../Items/ItemList';

class Category extends React.Component {
    
    render() {
        return (
            <div className="item">
                <h1>{this.props.name}</h1>
                <h3>{this.props.description}</h3>
            </div>
        )
    }
}

export default Category;