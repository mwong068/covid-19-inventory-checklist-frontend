const checkUser = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token;
        fetch('http://localhost:3000/profile', {
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
            else if(data.error){
                console.log(data.error)
            }
            else {
            dispatch({type: 'VERIFIED_USER', currentUser: data.user})
            }
        }
    )}
}

export default checkUser;