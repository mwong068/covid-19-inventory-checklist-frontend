const addItem = (event, itemInfo, history, id) => {
    console.log(id)
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token
        return fetch('http://localhost:3000/helpful_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            helpful_item: {
            name: itemInfo.name,
            description: itemInfo.description,
            quantity: itemInfo.quantity,
            availability: itemInfo.availability,
            image_url: itemInfo.image,
            helpful_user_id: id,
            category_id: itemInfo.category
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else{
                console.log(data)
                history.push('/checklist')
                dispatch({type: 'ITEM_ADDED', items: data})
            }
        })
    }
}

export default addItem;