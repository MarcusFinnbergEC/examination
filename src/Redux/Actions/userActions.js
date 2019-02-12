export const userLogin = user => ({
     type: 'USER_LOGGED_IN',
     payload: user
    })

export const userLogout = user => ({
     type: 'USER_LOGGED_OUT',
     payload: user
    })

export const loginAction = user => {
    console.log("USER:",user)
    /*fetch()
    .then()
    .then()*/ 
    if(user.email){
        console.log("CASE 1")
        return dispatch => {
            dispatch(userLogin(user))
        }
    }
    else{
        console.log("CASE 2")
        return dispatch => {
            dispatch(userLogout(user))
        }
    }
}