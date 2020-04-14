import React from 'react';
import ItemList from './Items/ItemList';

class Checklist extends React.Component {

    render() {
        return(
            <div>
                <h1>Hi {this.props.currentUser}, welcome to the COVID-19 inventory checklist!</h1>
                <ItemList />
            </div>
        )
    }
}

export default Checklist;