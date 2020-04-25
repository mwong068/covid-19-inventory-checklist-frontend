const getAllUsers = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token;
        fetch('http://localhost:3000/helpful_users', {
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
                dispatch({type: 'LOADED_ALL_USERS', users: data})
            }
        }
    )}
}

export default getAllUsers;