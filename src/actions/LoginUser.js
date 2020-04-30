const LoginUser = (event, userInfo, history) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                helpful_user: {
                username: userInfo.username,
                password: userInfo.password
                }
            })
            })
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    window.alert(data.error)
                }
                else if(data.message) {
                    window.alert(data.message)
                }
                else {
                localStorage.setItem('token', data.jwt);
                console.log(data)
                history.push('/checklist')
                dispatch({type: 'LOGGED_IN', currentUser: data.user})
                }
            }
            )
    }
}

export default LoginUser;