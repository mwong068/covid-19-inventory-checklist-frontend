import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component {

getCategory = event => {
    if (Object.keys(this.props).length !== 0) {
        if(this.props.category_id){
            return this.props.categories.find((category) => category.id === this.props.category_id).name
        }
        else{
            return this.props.categories.find((category) => category.id === this.props.category.id).name
        }
    }
}

    render() {
        return(
            <div className="inventory-item">
                <div className="image">
                    <img src={"https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt="test" className="test-image" />
                </div>
                <div className="text">
                    <h3>Item name: {this.props.name}</h3>
                    <h4>Description: {this.props.description}</h4>
                    <h4>Quantity: {this.props.quantity}</h4>
                    <h4>Availability: {this.props.availability}</h4>
                    <h4>Category: {this.getCategory()}</h4>
                    <button>Edit</button>
                    <span style={{color: "white"}}>hiii</span>
                    <button>Delete</button>
                </div>
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