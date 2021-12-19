import {instance} from '../utils/interceptors'


const addInfoAfterAuthentication = 'ADD-INFO-AFTER-AUTHENTICATION'
const deleteInfoAfterLoggingOut = 'DELETE-INFO-AFTER-LOGGING-OUT'
const setAccessToken = 'SET-ACCESS-TOKEN'
const getAccessToken = 'GET-ACCESS-TOKEN';
const UPDATE_PROFILE_IMG = 'UPDATE_PROFILE_IMG';

const initialState = { isLoggedIn: false, accessToken: null, id: null };

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case addInfoAfterAuthentication:
            // state.email = action.email;
            // state.accessToken = action.accessToken;
            // state.isLoggedIn = true;
                console.log(action.userObj)
            return { ...action.userObj, accessToken: action.accessToken, isLoggedIn: true, };
        case deleteInfoAfterLoggingOut:
            state = { isLoggedIn: false }
            return state;
        case setAccessToken:
            return {...state, accessToken: action.accessToken}
        case getAccessToken:
            return state.accessToken;
        case UPDATE_PROFILE_IMG:
            return {...state, avatarPath: action.newAvatarPath}
        default: 
        return state;
    }
}

export const checkAuthTC = () => (dispatch) => {

    instance.get('/auth/refresh').then((res) => {
        const accessToken = res.data.accessToken;
        
        if (accessToken) {
   
            dispatch(addInfoAfterAuthenticationAC( res.data.user, res.data.accessToken))
        } else {
            console.log('you don\'t have an access token');
        }
    })
        .catch((err) => {

            console.log(err);
        })

}



export const updateProfileImageTC = (img) => {
    return (dispatch) => {
 
        const formData = new FormData();  //what is new FormData?
        
        formData.append('avatar', img)

        instance.post('/files/upload', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                debugger
                dispatch(updateProfileImgAC(res.data.path))  // .path? 
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}



export const createUserTC = (profileName, email, password) => {
    return (dispatch) => {
        instance.post('/auth/registration', { profileName, email, password }).then((res) => {
            dispatch(addInfoAfterAuthenticationAC(res.data.user, res.data.accessToken))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const loginUserTC = (email, password) => {
    return (dispatch) => {
        instance.post('/auth/login', { email, password }).then((res) => {
            dispatch(addInfoAfterAuthenticationAC(res.data.user, res.data.accessToken))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const logoutUserTC = () => (dispatch) => {
   
    instance.delete('/auth/logout').then((res) => {
        console.log(res);
        dispatch(deleteInfoAfterLoggingOutAC())
    }).catch((err) => {
      
        console.log(err)
    })
}


export const updateProfileImgAC = (newAvatarPath) => {
    return {type: UPDATE_PROFILE_IMG, newAvatarPath}
}

export const getAccessTokenAC = () => {
    return {type: getAccessToken}
}

export const setAccessTokenAC = (accessToken) => {
    return {type: setAccessToken, accessToken}
}
const addInfoAfterAuthenticationAC = (userObj, accessToken) => {
    return {
        type: addInfoAfterAuthentication, userObj, accessToken
    }
}
const deleteInfoAfterLoggingOutAC = () => {
    return {
        type: deleteInfoAfterLoggingOut,
    }
}

export default currentUserReducer;