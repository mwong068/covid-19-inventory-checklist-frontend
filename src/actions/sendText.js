const sendText = (event, id, user) => {
    console.log(user)
    console.log(id)
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token;
        fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            content: {
                id: id,
                message: user + " is interested in an item you have! Check their profile to connect with them."
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                console.log(data)
                window.alert("User alerted!")
            }
        }
    )}
}

export default sendText;