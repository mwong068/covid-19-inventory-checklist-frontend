import React from 'react';
import { connect } from 'react-redux';
import ItemList from './Items/ItemList';

class Checklist extends React.Component {

    render() {
        return(
            <div>
                {this.props.loaded ?
                <div className="loader"></div>
                :
                <>
                <h1>Hi {this.props.user}, welcome to the COVID-19 inventory checklist!</h1>
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
        loaded: state.loading
    }
}

export default connect(mapStateToProps, null)(Checklist);