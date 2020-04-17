const initialState = {
    currentUser: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'LOGGED_IN':
            return {...state, currentUser: action.currentUser, loading: false}
        case 'VERIFIED_USER':
            return {...state, currentUser: action.currentUser, loading: false}
        default:
            return state;
    }
}

export default rootReducer;