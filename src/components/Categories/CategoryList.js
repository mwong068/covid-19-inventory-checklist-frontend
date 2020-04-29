import React from 'react';
import Category from './Category';
import AddCategory from './AddCategory';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
    
    render() {
        return (
            <div className="category-container">
                {this.props.categories.map(category => (<Category {...category} />))}
                <AddCategory />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, null)(CategoryList);