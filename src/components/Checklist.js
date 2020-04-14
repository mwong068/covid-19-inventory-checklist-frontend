import React from 'react';

class Checklist extends React.Component {

    render() {
        return(
            <div>
                <h1>Hi {this.props.currentUser}, welcome to the COVID-19 inventory checklist!</h1>
            </div>
        )
    }
}

export default Checklist;