import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CategoryItemList extends React.Component {
    
    findCategoryName = event => {
        let id = parseInt(this.props.match.params.id)
        let categoryName = this.props.categories.find(category => category.id === id)
        console.log(categoryName.name)
        return categoryName.name
    }

    listItems = event => {
        let id = parseInt(this.props.match.params.id)
        let list = []
        list.push(this.props.items.find(item => (item.category_id === id)))
        let display = list.map(item => <NavLink to={`/items/${item.id}`}>{item.name}</NavLink>)
        return display
    }

    render() {
        return (
            <div>
                <h1>{this.findCategoryName()}</h1>
                <div className="items-container">
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