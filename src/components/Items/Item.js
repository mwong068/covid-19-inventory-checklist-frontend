import React from 'react';

class Item extends React.Component {

    render() {
        return(
            <div className="item">
                <h3>Item name: {this.props.name}</h3>
                <h4>Description: {this.props.description}</h4>
                <h4>Quantity: {this.props.quantity}</h4>
                <h4>Availability: {this.props.availability}</h4>
                <h4>Category: {this.props.category_id}</h4>
            </div>
        )
    }
}

export default Item