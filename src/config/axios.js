import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'http://161.35.140.236:9005/api';
export const URL_NOW_PLAYING = '/movies/now_playing';
export const URL_POPULAR = '/movies/popular';
export const URL_ME = '/user/me';
export const URL_AUTH_LOGIN = '/auth/login';
export const URL_AUTH_REFRESH = '/auth/refresh';

export const clienteAxios = axios.create({baseURL});

/* clienteAxios.interceptors.request.use(
    async(config)=> {
        const refresh_token = await AsyncStorage.getItem('token');
        if(refresh_token){
            config.headers.Authorization = refresh_token;
        }

        return config;
    }
) */