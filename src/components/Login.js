import React from 'react';

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

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting login!')
        fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            helpful_user: {
            username: this.state.username,
            password: this.state.password
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem('token', data.jwt);
        }
        )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
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
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>
            </div>
        )
    }
}

export default Login