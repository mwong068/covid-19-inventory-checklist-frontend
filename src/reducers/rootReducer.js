const initialState = {
    currentUser: null,
    userId: 0,
    categories: [],
    user_items: [],
    items: [],
    allUsers: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'LOGGED_IN':
            return {...state, currentUser: action.currentUser, userId: action.userId, loading: false}
        case 'VERIFIED_USER':
            return {...state, currentUser: action.currentUser, userId: action.userId, loading: false}
        case 'SIGNED_UP':
            return {...state, currentUser: action.currentUser, userId: action.userId, loading: false}
        case 'LOGGED_OUT':
            return {...state, currentUser: {}, loading: false}
        case 'CATEGORY_CREATED':
            return {...state, categories: [...state.categories, action.categories], loading: false}
        case 'LOADED_CATEGORIES':
            return {...state, categories: action.categories, loading: false}
        case 'ITEM_ADDED':
            return {...state, user_items: [...state.user_items, action.items], loading: false}
        case 'LOADED_USER_ITEMS':
            return {...state, user_items: action.items, loading: false}
        case 'LOADED_ITEMS':
            return {...state, items: action.items, loading: false}
        case 'LOADED_ALL_USERS':
            return {...state, allUsers: action.users, loading: false}
        case 'DELETE_CATEGORY':
            return {...state, categories: action.categories, loading: false}
        default:
            return state;
    }
}

export default rootReducer;