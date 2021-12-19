
import { instance } from '../utils/interceptors'; // потом удалить

const UPDATE_PROFILE_IMG = 'UPDATE_PROFILE_IMG';

const initialState = { isLoggedIn: false };

const avatarReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_PROFILE_IMG:
            return { ...state, profileImg: action.newProfileImg };
        default:
            return state;

    }
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
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export const updateProfileImgAC = (newProfileImg) => {
    return {type: UPDATE_PROFILE_IMG, newProfileImg}
}

export default avatarReducer;