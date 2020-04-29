import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CategoryItemList extends React.Component {
    
    findCategoryName = event => {
        let id = parseInt(this.props.match.params.id)
        let categoryName = this.props.categories.find(category => category.id === id)
        return categoryName.name
    }

    listItems = event => {
        let id = parseInt(this.props.match.params.id)
        let list = []
        list.push(this.props.items.find(item => (item.category_id === id)))
        return list.map(item => <>
        {console.log(item)}
        <div className="item">
            <div className="image">
                 <img src={"https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt="test" className="test-image" />
            </div>
            <div className="text">
                <h2><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></h2>
                <h4>Description: {item.description}</h4>
                <h4>Quantity: {item.quantity}</h4>
                <h4>Availability: {item.availability}</h4>
            </div>
        </div>
        </>)
    }

    render() {
        return (
            <div>
                <h1>{this.findCategoryName()}</h1>
                <div className="category-container">
                    {this.listItems()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
            categories: state.categories,
            items: state.items
    }
}

export default connect(mapStateToProps, null)(CategoryItemList);