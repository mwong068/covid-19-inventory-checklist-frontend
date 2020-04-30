import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.props.EditUser(event, this.state, this.props.history);
        
    }

    render(){
        return(
            <div>
                <div className="sign-up">
                <div className="profile-form-text">
                    <h1>Hi there, {this.props.user !== null ? this.props.user.name : null}!</h1>
                    <h4>Here you can edit you personal preferences:</h4>
                </div>
                <div className="profile-form">
                <form onSubmit={(event) => this.handleSubmit(event)} >
                    {this.props.user !== null ?
                    <>
                    <label>Name:
                        <br></br>
                        <input type="text" className="name" onChange={this.handleChange} value={this.props.user.name}></input>
                    </label>
                    <br></br><br></br>
                    <label>Email:
                        <br></br>
                        <input type="text" className="email" onChange={this.handleChange} value={this.props.user.email}></input>
                    </label>
                    <br></br><br></br>
                    <label>Phone Number:
                        <br></br>
                        <input type="text" className="phone" onChange={this.handleChange} value={this.props.user.phone_number}></input>
                    </label>
                    <br></br><br></br>
                    <label>Username:
                        <br></br>
                        <input type="text" className="username" onChange={this.handleChange} value={this.props.user.username}></input>
                    </label>
                    <br></br><br></br>
                    <label>Password:
                        <br></br>
                        <input type="password" className="password" onChange={this.handleChange} value="***********"></input>
                    </label>
                    <br></br><br></br>
                    <label>Location:
                        <br></br>
                        <input type="text" className="location" onChange={this.handleChange} value={this.props.user.location}></input>
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
                    </>: null }
                </form>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
            user: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Profile);