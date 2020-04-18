import React from 'react';
import ItemList from '../Items/ItemList';

class Category extends React.Component {
    
    render() {
        return (
            <div className="item">
                <h1>Name</h1>
                <ItemList />
            </div>
        )
    }
}

export default Category;