import React from 'react';
import { connect } from 'react-redux';
import createUser from '../actions/createUser';
import getAllUsers from '../actions/getAllUsers';


class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            phone: "+1"
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.className]: event.target.value
        })
    }

    handleCheckboxOne = (event) => {
        this.setState({
            hasChildren: event.target.checked
        })
    }
  
    handleCheckboxTwo = (event) => {
        this.setState({
            canDeliver: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(event, this.state, this.props.history);
        
    }

    componentDidMount() {
        this.props.getAllUsers();
    }


    render() {
        return (
            <div>
            <div className="sign-up">
                <div className="form">
                <form onSubmit={(event) => this.handleSubmit(event)} >
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
                    <label>Phone Number:
                        <br></br>
                        <input type="text" className="phone" onChange={this.handleChange} value={this.state.phone}></input>
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
                    <label>User Image URL:
                        <br></br>
                        <input type="text" className="image" onChange={this.handleChange}></input>
                    </label>
                    <br></br><br></br>
                    <label>Family Size:
                        <br></br>
                        <select className="familySize" value={this.state.familySize} onChange={this.handleChange}>
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
                            onChange={this.handleCheckboxOne} />
                    </label>
                    <br></br><br></br>
                    <label>
                        Can deliver: 
                        <input
                            className="canDeliver"
                            type="checkbox"
                            checked={this.state.canDeliver}
                            onChange={this.handleCheckboxTwo} />
                    </label>
                    <br></br><br></br>
                    <input type="submit" className="submit" />
                </form>
                </div>
                <div className="form-text">
                    <h1>Sign Up</h1>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signUp: (event, userInfo, history) => { dispatch(createUser(event, userInfo, history)) },
        getAllUsers: () => { dispatch(getAllUsers()) }
    }
}

export default connect(null, mapDispatchToProps)(Signup);