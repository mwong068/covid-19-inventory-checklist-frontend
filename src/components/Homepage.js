import React from 'react';

class Homepage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h1>hello {this.props.currentUser}, welcome to the COVID-19 inventory checklist!</h1>
                
            </div>
        )
    }
}

export default Homepage