import React from 'react';
import Item from './Item';
import AddItem from './AddItem';
import { connect } from 'react-redux';

class ItemList extends React.Component {
    
    componentDidMount() {
    }

    render() {
    return (
        <div className="items-container">
            <AddItem />
            {this.props.items.map((item) => (<Item {...item} />))}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.user_items
    }
}

export default connect(mapStateToProps, null)(ItemList);