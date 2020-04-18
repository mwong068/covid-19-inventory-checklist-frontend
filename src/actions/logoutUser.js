const logoutUser = (history) => {
    return (dispatch) => {
        dispatch({type: 'LOGOUT_USER'})
        localStorage.removeItem('token')
        history.push('/')
    }
}

export default logoutUser;

