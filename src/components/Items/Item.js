import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component {

    render() {
        return(
            <div className="item">
                <h3>Item name: {this.props.name}</h3>
                <h4>Description: {this.props.description}</h4>
                <h4>Quantity: {this.props.quantity}</h4>
                <h4>Availability: {this.props.availability}</h4>
                <h4>Category: {this.props.categories.find((category) => category.id === this.props.category_id).name}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        categories: state.categories
    }
}

export default connect(mapStateToProps, null)(Item);