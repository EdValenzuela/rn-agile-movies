import React, { useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clienteAxios, URL_AUTH_LOGIN, URL_AUTH_REFRESH } from '../../config/axios'

// Context
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

// Constantes
import { CHECKING, CLEAN_MESSAGE, LOGIN_FAIL, LOGIN_IN, LOGIN_NOT_AUTHENTICATED } from '../../types'

const initialState = {
    token: null,
    user : null,
    errorMessage : '',
    status : CHECKING
}

const AuthStateProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        validarToken();
    }, []);

    const validarToken = async() => {
        try {
            const refresh_token = await AsyncStorage.getItem('token');
            if(!refresh_token) return dispatch({type : LOGIN_NOT_AUTHENTICATED});
            
            const resp = await clienteAxios.post(URL_AUTH_REFRESH, refresh_token, {
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                },
                body:{
                    "refresh_token": refresh_token
                }
                
            })
            if(resp.status !== 200){
                return dispatch({type: LOGIN_NOT_AUTHENTICATED});
            }
    
            dispatch({
                type : LOGIN_IN,
                payload: {
                    token : data.data.payload.token,
                    user: data.data.user
                }
            })
            
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const signIn = async(user) => {
        try {
            const { data } = await clienteAxios.post(URL_AUTH_LOGIN, user);
            dispatch({
                type : LOGIN_IN,
                payload: {
                    token : data.data.payload.token,
                    user: data.data.user
                }
            })
            await AsyncStorage.setItem('token', data.data.payload.token);

        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: LOGIN_FAIL,
                dispatch: error.response.data.message || 'Username o password incorrectos'
            })
        }
    }

    const singOut = () => {}

    const cleanMessage = () => dispatch({ type: CLEAN_MESSAGE })

    return (
        <AuthContext.Provider 
            value={{
                ...state,
                signIn,
                singOut,
                cleanMessage
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthStateProvider
