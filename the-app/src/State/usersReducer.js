import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/auth',
    withInfoAfterRegistration: true,
})



const putAllUsersIntoState = 'PUT-ALL-USERS-INTO-STATE';
const getAllUsers = 'GET-ALL-USERS';

const initialState = [];

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case putAllUsersIntoState:
            state = action.users;
            return state
        case getAllUsers:
            return state
        default:
            return state
    }
}


export const fetchUsersTC = () => {
    return (dispatch) => {
        instance.get('/users').then((res) => {
            console.log(res.data.users)
            dispatch(putAllUsersIntoStateAC(res.data.users))
        }).catch((err) => {
            console.log(err)
        })

    }
}

export const putAllUsersIntoStateAC = (users) => {
    return { type: putAllUsersIntoState, users }
}

export const getAllUsersAC = () => {
    return { type: getAllUsers }
}

export default usersReducer;