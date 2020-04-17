import React from 'react';
import { connect } from 'react-redux';
import LoginUser from '../actions/Login';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.className]: event.target.value
        })
    }

    handleSubmit = (event, userInfo) => {
        event.preventDefault();
        this.props.loginUser(event, userInfo);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
                    <label>Username:
                        <br></br>
                    <input type="text" className="username" onChange={(event) => this.handleOnChange(event)} />
                    </label>
                    <br></br><br></br>
                    <label>Password:
                        <br></br>
                    <input type="password" className="password" onChange={(event) => this.handleOnChange(event)} />
                    </label>
                    <br></br><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (event, userInfo) => { dispatch(LoginUser(event, userInfo)) }
    }
}

export default connect(null, mapDispatchToProps)(Login);