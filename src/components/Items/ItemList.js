import React from 'react';
import Item from './Item';
import AddItem from './AddItem';

class ItemList extends React.Component {
    
    render() {
    return (
        <div className="items-container">
            <AddItem />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
        )
    }
}

export default ItemList;