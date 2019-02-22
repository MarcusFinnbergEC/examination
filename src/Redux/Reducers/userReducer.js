const initialState = {
    signedIn: false
}

export default (state = initialState, action) => {
    console.log("reducern:", action.payload);
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                ...state,
                result: action.payload, 
                signedIn: true
        }
        case 'USER_LOGGED_OUT':
            return {
                signedIn: false
        }
        default:
            return state
    }
}