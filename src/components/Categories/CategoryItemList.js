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
        let item = this.props.items.find(item => (item.category_id === id))
        if (item !== undefined){
            list.push(item)
                return list.map(item => <>
                <div className="category-item">
                    <div className="category-image">
                        <img src={item.image_url} alt={item.name} className="category-image" />
                    </div>
                    <div className="category-text">
                        <h2><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></h2>
                        <h4>Description: {item.description}</h4>
                        <h4>Quantity: {item.quantity}</h4>
                        <h4>Availability: {item.availability}</h4>
                        <br></br>
                    </div>
                </div>
                </>)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.findCategoryName()}</h1>
                <div className="category-container">
                    {Object.keys(this.props.items).length !== 0 ? this.listItems() : null}
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