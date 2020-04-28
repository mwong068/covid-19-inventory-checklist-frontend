const sendText = (event) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token;
        fetch('http://localhost:3000/message', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        }
    )}
}

export default sendText;