import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import deleteCategory from '../../actions/Category/deleteCategory';

class Category extends React.Component {
    
    deleteCategory = event => {
        this.props.delete(event, this.props);
    }

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.image_url} alt={this.props.name} className="test-image" />
                </div>
                <div className="text">
                    <h2><NavLink to={`/categories/${this.props.id}`}>{this.props.name}</NavLink></h2>
                    <h3>{this.props.description}</h3>
                    <button>Edit</button>
                    <span style={{color: "white"}}>hiii</span>
                    <button onClick={this.deleteCategory}>Delete</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: (event, categoryInfo) => { dispatch(deleteCategory(event, categoryInfo)) }
    }
}

export default connect(null, mapDispatchToProps)(Category);