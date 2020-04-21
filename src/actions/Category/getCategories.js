const getCategories = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token;
        fetch('http://localhost:3000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        })
        .then(r => r.json())
        .then(data => {
            if (data.message){
                console.log(data.message)  
            }
            else {
                console.log(data)
            dispatch({type: 'LOADED_CATEGORIES', categories: data})
            }
        }
    )}
}

export default getCategories;