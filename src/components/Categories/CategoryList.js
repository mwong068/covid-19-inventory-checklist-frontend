import React from 'react';
import Category from './Category';
import AddCategory from './AddCategory';

class CategoryList extends React.Component {
    
    render() {
        return (
            <div className="items-container">
                <AddCategory />
                {/* <Category /> */}
            </div>
        )
    }
}

export default CategoryList;