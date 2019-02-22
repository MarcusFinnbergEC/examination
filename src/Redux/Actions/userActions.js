const API = "http://localhost/_";
const DEFAULT_QUERY = "/items/users";

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
    /*if (user.email) {
        let users = [];
    fetch(API + DEFAULT_QUERY)
          .then(response => response.json())
          .then(data => data.data.map(item => {
              return users.push(item);
          }))
          .then(
            users.map(userInDB => {
                if(userInDB.email.match(user.email) && userInDB.password.match(user.password)) {
                    return dispatch => {
                        dispatch(userLogin(user))
                    }
                }
            })
          );
    }*/
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