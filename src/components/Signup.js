import React from 'react';

class Signup extends React.Component{

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <label>Name:
                        <br></br>
                        <input type="text" className="name"></input>
                    </label>
                    <br></br><br></br>
                    <label>Username:
                        <br></br>
                        <input type="text" className="username"></input>
                    </label>
                    <br></br><br></br>
                    <label>Password:
                        <br></br>
                        <input type="password" className="password"></input>
                    </label>
                    <br></br><br></br>
                    <label>Family Size:
                        <br></br>
                        <input type="number" className="familySize"></input>
                    </label>
                    <br></br><br></br>
                    <input type="submit" className="Submit" />
                </form>
            </div>
        )
    }
}

export default Signup