import axios from 'axios';

const addInfoAfterAuthentication = 'ADD-INFO-AFTER-AUTHENTICATION'
const deleteInfoAfterLoggingOut = 'DELETE-INFO-AFTER-LOGGING-OUT'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/auth',
    withCredentials: true,
})

const initialState = { isLoggedIn: false, accessToken: null };

const currentUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case addInfoAfterAuthentication:
            // state.email = action.email;
            // state.accessToken = action.accessToken;
            // state.isLoggedIn = true;
            debugger;
            return {email: action.email, accessToken: action.accessToken, isLoggedIn: true, };
        case deleteInfoAfterLoggingOut:
            state = {isLoggedIn: false}
            return state;
        default: return state;
    }
}

export const checkAuthTC = () => (dispatch) => {
    instance.get('/refresh').then((res) => {
        const accessToken = res.data.accessToken;
        if(accessToken) {
            debugger;
            dispatch(addInfoAfterAuthenticationAC(res.data.user.email, res.data.accessToken))  
        } else {
            console.log('you don\'t have an access token');
        }
    })
        .catch((err) => {
            console.log(err);
        })
    
}

export const createUserTC = (email, password) => {
    return (dispatch) => {
        instance.post('/registration', { email, password }).then((res) => {
            console.log(res);
            dispatch(addInfoAfterAuthenticationAC(res.data.user.email, res.data.accessToken))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const loginUserTC = (email, password) => {
    return (dispatch) => {
        instance.post('/login', { email, password }).then((res) => {
            console.log(res);
            dispatch(addInfoAfterAuthenticationAC(res.data.user.email, res.data.accessToken))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const logoutUserTC = () => (dispatch) => {
    debugger
    instance.delete('/logout').then((res) => {
        console.log(res);
        dispatch(deleteInfoAfterLoggingOutAC())
    }).catch((err) => {
        debugger
        console.log(err)
    })
}



const addInfoAfterAuthenticationAC = (email, accessToken) => {
    return {
        type: addInfoAfterAuthentication, email, accessToken
    }
}
const deleteInfoAfterLoggingOutAC = () => {
    return {
        type: deleteInfoAfterLoggingOut,
    }
}

export default currentUserReducer;