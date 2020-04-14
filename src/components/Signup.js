import React from 'react';

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.className]: event.target.value
        })
    }

    handleCheckbox = (event) => {
        this.setState({
            canDeliver: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting sign up!')
        console.log(this.state)
        fetch('http://localhost:3000/helpful_users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            helpful_user: {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            location: this.state.location,
            family_size: this.state.familySize,
            can_deliver: this.state.canDeliver,
            has_children: this.state.haveChildren
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem('token', data.jwt);
            console.log(data)
        }
        )
    }


    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <label>Name:
                        <br></br>
                        <input type="text" className="name" onChange={this.handleChange}></input>
                    </label>
                    <br></br><br></br>
                    <label>Email:
                        <br></br>
                        <input type="text" className="email" onChange={this.handleChange}></input>
                    </label>
                    <br></br><br></br>
                    <label>Username:
                        <br></br>
                        <input type="text" className="username" onChange={this.handleChange}></input>
                    </label>
                    <br></br><br></br>
                    <label>Password:
                        <br></br>
                        <input type="password" className="password" onChange={this.handleChange}></input>
                    </label>
                    <br></br><br></br>
                    <label>Location:
                        <br></br>
                        <input type="text" className="location" onChange={this.handleChange}></input>
                    </label>
                    <br></br><br></br>
                    <label>Family Size:
                        <br></br>
                        <select className="familySize" value={this.state.value} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6+</option>
                        </select> 
                    </label>
                    <br></br><br></br>
                    <label>
                        Have children: 
                        <input
                            className="haveChildren"
                            type="checkbox"
                            checked={this.state.haveChildren}
                            onChange={this.handleCheckbox} />
                    </label>
                    <br></br><br></br>
                    <label>
                        Can deliver: 
                        <input
                            className="canDeliver"
                            type="checkbox"
                            checked={this.state.canDeliver}
                            onChange={this.handleCheckbox} />
                    </label>
                    <br></br><br></br>
                    <input type="submit" className="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </div>
        )
    }
}

export default Signup