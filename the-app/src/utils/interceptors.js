
import axios from 'axios';
import { setAccessTokenAC } from '../State/CurrentUserReducer';

export const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    withCredentials: true,
})

const interceptor = (store) => {
    instance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${store.getState().CurrentUserInfo.accessToken}`
        return config;
    })

    instance.interceptors.response.use((config) => {
        return config
    }, async (err) => {
        
        const originalConfig = err.config;
        console.log(originalConfig);

        if (err.response.status == 401 && err.config && err.config.url !== '/refresh') {  
            originalConfig._isRetry = true; // не удалось менять 

            try {
             const res = await instance.get('/refresh')  // я делаю запрос и получаю ответ с тем же кодом ошибки, но мне нужно дать программе понять, что второй раз лопатить не надо
           
                store.dispatch(setAccessTokenAC(res.data.accessToken));
                return instance.request(originalConfig);

            } catch (e) { // в каком случае ошибка?
                console.log(e + 'Пользователь не авторизован')
            }
        }
        throw err; // пробросится дальше если не 401 статус код
    })
}


export default interceptor;