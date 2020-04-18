import React from 'react';
import { connect } from 'react-redux';
import CategoryList from './Categories/CategoryList';
import getCategories from '../actions/Category/getCategories';

class Checklist extends React.Component {

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
                <h1>Hi {this.props.user}, welcome to your inventory checklist!</h1>
                <CategoryList />
                </>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        loaded: state.loading,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => { dispatch(getCategories()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);