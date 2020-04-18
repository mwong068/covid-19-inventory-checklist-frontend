import React from 'react';

class Homepage extends React.Component{


    render() {
        return(
            <div className="homepage">
                <div className="header"></div>
                <div className="welcome">
                    <h1>
                    Welcome
                    <br></br>
                    to the
                    <br></br>
                    COVID-19
                    <br></br>
                    inventory checklist!
                    </h1>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Homepage