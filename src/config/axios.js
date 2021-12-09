import axios from 'axios'

export const baseIMG = 'https://image.tmdb.org/t/p/w500';
export const baseURL = 'http://161.35.140.236:9005/api';
export const URL_NOW_PLAYING = '/movies/now_playing';
export const URL_POPULAR = '/movies/popular';
export const URL_ME = '/user/me';
export const URL_AUTH_LOGIN = '/auth/login';
export const URL_AUTH_REFRESH = '/auth/refresh';

export const clienteAxios = axios.create({
    baseURL,
    headers: {
        "content-type": "application/json"
    }
});

/* clienteAxios.interceptors.request.use(
    async(config)=> {
        const myToken = await AsyncStorage.getItem('token');
        
        config.headers.Authorization = myToken && `Bearer ${myToken}`;
        
        return config;
    } 
)  */