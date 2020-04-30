const createUser = (event, userInfo, history) => {
    console.log(history)
    console.log(userInfo)
    console.log('submitting sign up!')
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        return fetch('http://localhost:3000/helpful_users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            helpful_user: {
            username: userInfo.username,
            name: userInfo.name,
            password: userInfo.password,
            email: userInfo.email,
            location: userInfo.location,
            phone_number: userInfo.phone,
            family_size: userInfo.familySize,
            can_deliver: userInfo.canDeliver,
            has_children: userInfo.haveChildren
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else{
            localStorage.setItem('token', data.jwt);
            history.push('/checklist')
            dispatch({type: 'SIGNED_UP', currentUser: data.user.username, userId: data.user.id})
            }
        })
    }
}

export default createUser;