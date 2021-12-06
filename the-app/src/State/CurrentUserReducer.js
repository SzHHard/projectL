import axios from 'axios';

const addInfoAfterRegistration = 'ADD-INFO-AFTER-REGISTRATION'

const instance = axios.create({
  
    withInfoAfterRegistration: true,
})

const initialState = {};

const currentUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case addInfoAfterRegistration: 
        state.email = action.email;
        state.accessToken = action.accessToken;
        return state;
    }
}


export const createUserTC = (email, password) => {
    debugger;
    return (dispatch) => {
        debugger;
        instance.post('http://localhost:3001/api/auth/registration', {email, password }).then((res) => {
            console.log(res);
            dispatch(addInfoAfterRegistrationAC(res.data.user.email, res.data.accessToken ))
        }).catch((err) => {
            console.log(err)
        })
    }
}



const addInfoAfterRegistrationAC = (email, accessToken) => {
    return {
        type: addInfoAfterRegistration, email, accessToken
    }
}