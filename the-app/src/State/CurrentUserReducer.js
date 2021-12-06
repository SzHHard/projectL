import axios from 'axios';

const addInfoAfterRegistration = 'ADD-INFO-AFTER-REGISTRATION'
const deleteInfoAfterLoggingOut = 'DELETE-INFO-AFTER-LOGGING-OUT'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/auth',
    withInfoAfterRegistration: true,
})

const initialState = { isLoggedIn: false };

const currentUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case addInfoAfterRegistration:
            state.email = action.email;
            state.accessToken = action.accessToken;
            state.isLoggedIn = true;
            return state;
        case deleteInfoAfterLoggingOut:
            state = {isLoggedIn: false}
            return state;
        default: return state;
    }
}


export const createUserTC = (email, password) => {
    return (dispatch) => {
        instance.post('/registration', { email, password }).then((res) => {
            console.log(res);
            dispatch(addInfoAfterRegistrationAC(res.data.user.email, res.data.accessToken))
        }).catch((err) => {
            debugger;
            console.log(err)
        })
    }
}

export const loginUserTC = (email, password) => {
    return (dispatch) => {
        instance.post('/login', { email, password }).then((res) => {
            console.log(res);
            dispatch(addInfoAfterRegistrationAC(res.data.user.email, res.data.accessToken))
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



const addInfoAfterRegistrationAC = (email, accessToken) => {
    return {
        type: addInfoAfterRegistration, email, accessToken
    }
}
const deleteInfoAfterLoggingOutAC = () => {
    return {
        type: deleteInfoAfterLoggingOut,
    }
}

export default currentUserReducer;