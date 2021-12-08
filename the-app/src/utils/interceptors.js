
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3001/api/auth',
    withCredentials: true,
})

const interceptor = (store) => {
    debugger;
    instance.interceptors.request.use((config) => {
        debugger;
        config.headers.Authorization = `Bearer ${store.getState().CurrentUserInfo.accessToken}`
        return config;
    })
}


export default interceptor;