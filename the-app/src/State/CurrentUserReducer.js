import axios from 'axios';
import {instance} from '../utils/interceptors'


const addInfoAfterAuthentication = 'ADD-INFO-AFTER-AUTHENTICATION'
const deleteInfoAfterLoggingOut = 'DELETE-INFO-AFTER-LOGGING-OUT'
const setAccessToken = 'SET-ACCESS-TOKEN'
const getAccessToken = 'GET-ACCESS-TOKEN';

// const instance = axios.create({
//     baseURL: 'http://localhost:3001/api/auth',
//     withCredentials: true,
// })





// instance.interceptors.response.use((config) => {
//     return config
// }, (err) => {
//     const originalRequest = err.config;
//     originalRequest._isRetry = true;
//     if (err.response.status == 401 && err.config && err.config._isRetry) {    //важно еще раз пройтись по этой строчке ибо ее скопировал
//         instance.get('/refresh').then((res) => {
//             const accessToken = res.data.accessToken;
//             if (accessToken) {
//                 dispatch(setAccessTokenAC(accessToken));
//                 return instance.request(originalRequest);
//             }
//         })
//             .catch((e) => {
//                 console.log('Авторизации нет. (или разработчик дурачок)')

//             })
//     }
//     throw err;
// })

const initialState = { isLoggedIn: false, accessToken: null };

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case addInfoAfterAuthentication:
            // state.email = action.email;
            // state.accessToken = action.accessToken;
            // state.isLoggedIn = true;

            return { email: action.email, accessToken: action.accessToken, isLoggedIn: true, };
        case deleteInfoAfterLoggingOut:
            state = { isLoggedIn: false }
            return state;
        case setAccessToken:
            return {...state, accessToken: action.accessToken}
        case getAccessToken:
            return state.accessToken;
        default: 
        return state;
    }
}

export const checkAuthTC = () => (dispatch) => {
    instance.get('/refresh').then((res) => {
        const accessToken = res.data.accessToken;
        if (accessToken) {
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

const getAccessTokenAC = () => {
    return {type: getAccessToken}
}

const setAccessTokenAC = (accessToken) => {
    return {type: setAccessToken, accessToken}
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