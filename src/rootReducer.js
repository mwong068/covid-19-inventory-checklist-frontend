const initialState = {
    currentUser: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNING_UP':
            return state;
    }
}

export default rootReducer;