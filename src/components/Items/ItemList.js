import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    
    render() {
    return (
        <div className="items-container">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
        )
    }
}

export default ItemList;