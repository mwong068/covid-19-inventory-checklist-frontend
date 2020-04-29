import React from 'react';
import { connect } from 'react-redux';
import LoginUser from '../actions/LoginUser';
import getAllUsers from '../actions/getAllUsers';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username: null,
            password: null
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.className]: event.target.value
        })
    }

    handleSubmit = (event, userInfo, history) => {
        event.preventDefault();
        this.props.loginUser(event, userInfo, history);
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div>
                <div className="login">
                <div className="login-form-text">
                <h1>Login</h1>
                </div>
                <div className="login-form">
                <form onSubmit={(event) => this.handleSubmit(event, this.state, this.props.history)}>
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
                    <input type="submit" value="Submit" className="submit" />
                </form>
                </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (event, userInfo, history) => { dispatch(LoginUser(event, userInfo, history)) },
        getAllUsers: () => { dispatch(getAllUsers()) }
    }
}

export default connect(null, mapDispatchToProps)(Login);