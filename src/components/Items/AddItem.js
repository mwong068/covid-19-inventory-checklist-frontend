import React from 'react';

class AddItem extends React.Component {

    render() {
        return(
            <div className="item">
                <h3>Add Item</h3>
                <form>
                    <label>Item name: 
                        <input type="text"></input>
                    </label>
                    <br></br>
                    <label>Quantity: 
                        <input type="integer"></input>
                    </label>
                    <br></br>
                    <label>Item name: 
                        <input type="text"></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default AddItem