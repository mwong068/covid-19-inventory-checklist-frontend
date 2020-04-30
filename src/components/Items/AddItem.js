import React from 'react';
import { connect } from 'react-redux';
import addItem from '../../actions/Item/addItem';
import { withRouter } from 'react-router-dom';

class AddItem extends React.Component {

    constructor() {
        super();
        this.state = {
            category: 1
        }
    }

    componentDidMount() {
    }

    handleChange = (event) => {
        this.setState({
            [event.target.className]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        this.props.addItem(event, this.state, history, this.props.user.id);
        
    }

    render() {
        return(
            <div className="add-inventory-item">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <h3>Add New Item</h3>
                    <label>Item name: 
                        <input type="text" className="name" onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <label>Description: 
                        <input type="text" className="description" onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <label>Quantity: 
                        <input type="integer" className="quantity" onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <label>Availability: 
                        <input type="date" className="availability" onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <label>Category name: 
                        <select className="category" value={this.state.value} onChange={this.handleChange}>
                            {this.props.categories.map((category) => (<option value={category.id}>{category.name}</option>))}
                        </select> 
                    </label>
                    <br></br>
                    <label>Image URL: 
                        <input type="text" className="image" onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <input type="submit" name="Submit" className="submit-button" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addItem: (event, itemInfo, history, id) => { dispatch(addItem(event, itemInfo, history, id)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItem));