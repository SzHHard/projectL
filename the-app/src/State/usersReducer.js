import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/auth',
    withInfoAfterRegistration: true,
})



const putAllUsersIntoState = 'PUT-ALL-USERS-INTO-STATE';
const getAllUsers = 'GET-ALL-USERS';

const initialState = {
    usersArr: [],
    totalUsers: 0,
    pagesAmount: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case putAllUsersIntoState:
        
            // state.usersArr = action.users;  //  внизу return state 

            state.pagesAmount = Math.ceil(action.totalUsersInDb / action.amountOnAPage)
            return { ...state, usersArr: action.users }  // в чем разница с закоментированной строкой?
        case getAllUsers:


            return state
        default:

            return state
    }
}




export const fetchUsersTC = (amountOnAPage, page) => {

    return (dispatch) => {
        instance.get(`/users?amountOnAPage=${amountOnAPage}&page=${page}`, {
            body: {
                amountOnAPage,
                page
            }
        }).then((res) => {

            dispatch(putAllUsersIntoStateAC(res.data.users, res.data.totalUsersInDb, amountOnAPage))
        }).catch((err) => {
            console.log(err)
        })

    }
}

export const putAllUsersIntoStateAC = (users, totalUsersInDb, amountOnAPage) => {
    return { type: putAllUsersIntoState, users, totalUsersInDb, amountOnAPage }
}

export const getAllUsersAC = () => {
    return { type: getAllUsers }
}

export default usersReducer;