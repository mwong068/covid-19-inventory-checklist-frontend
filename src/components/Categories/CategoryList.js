import React from 'react';
import Category from './Category';
import AddCategory from './AddCategory';
import { connect } from 'react-redux';
import getItemsByCategory from '../../actions/Category/getItemsByCategory';

class CategoryList extends React.Component {

    componentDidMount() {
       

    }
    
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

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => { dispatch(getItemsByCategory()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);