import React from 'react';
import { connect } from 'react-redux';
import createCategory from '../../actions/Category/createCategory';

class AddCategory extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    handleOnChange = (event) => {
        this.setState({
        [event.target.className]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.createCategory(event, this.state, this.props.history)
    }

    render() {
        return(
            <div className="add-item">
                <h3>Add New Category</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Category name: 
                        <input type="text" className="name" onChange={(event) => this.handleOnChange(event)}></input>
                    </label>
                    <br></br><br></br>
                    <label>Description: 
                        <input type="text" className="desc" onChange={(event) => this.handleOnChange(event)}></input>
                    </label>
                    <br></br>
                    <input type="submit" className="Submit"></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCategory: (event, categoryInfo, history) => { dispatch(createCategory(event, categoryInfo, history)) }
    }
}

export default connect(null, mapDispatchToProps)(AddCategory);