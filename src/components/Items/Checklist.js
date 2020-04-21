import React from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import getCategories from '../../actions/Category/getCategories';
import getItems from '../../actions/Item/getItems';
// import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

class Categories extends React.Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return(
            <div>
            {this.props.loaded ?
            <div className="homepage">
            <div className="header"></div>
            <div className="welcome">
                <div className="loader"></div>
                <br></br>
                <h2>Loading your Checklist</h2>
            </div>
            </div>
            :
            <>
            {/* {this.props.getItems(this.props.id)} */}
            <h1>Hi {this.props.user}, welcome to your inventory checklist!</h1>
            <ItemList />
            </>
            }
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        id: state.userId,
        loaded: state.loading,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => { dispatch(getCategories()) },
        getItems: (id) => { dispatch(getItems(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);