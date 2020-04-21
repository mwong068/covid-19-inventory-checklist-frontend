const getItems = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token;
        fetch('http://localhost:3000/helpful_items', {
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
                let userItems = data.find((item) => (item.helpful_user_id === id))
                dispatch({type: 'LOADED_ITEMS', items: userItems})
            }
        }
    )}
}

export default getItems;