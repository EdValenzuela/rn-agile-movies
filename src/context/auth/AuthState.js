import React, { useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL, clienteAxios, URL_AUTH_LOGIN, URL_AUTH_REFRESH } from '../../config/axios'

// Context
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

// Constantes
import { CHECKING, CLEAN_MESSAGE, LOGIN_FAIL, LOGIN_IN, LOGIN_NOT_AUTHENTICATED, LOGIN_OUT } from '../../types'

const initialState = {
    token: null,
    refresh_token : null,
    user : null,
    errorMessage : '',
    status : CHECKING
}

const AuthStateProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    /* useEffect(() => {
        validarToken();
    }, []);

    const validarToken = async() => {
        try {
            const myToken = await AsyncStorage.getItem('refresh_token');
            if(!myToken) return dispatch({type : LOGIN_NOT_AUTHENTICATED});

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "refresh_token": myToken
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const resp = await fetch(`${baseURL}${URL_AUTH_REFRESH}`, requestOptions)
            console.log(resp)

            if(resp.status !== 200) return dispatch({type: LOGIN_NOT_AUTHENTICATED})
            
            dispatch({
                type : LOGIN_IN,
                payload: {
                    refresh_token : '',
                    token : resp.data.data.payload.token,
                    user: resp.data.data.user
                }
            })
            
            

            
        } catch (error) {
            console.log(error.response.data)
        }
    } */

    const signIn = async(user) => {
        try {
            const { data } = await clienteAxios.post(URL_AUTH_LOGIN, user);
            
            dispatch({
                type : LOGIN_IN,
                payload: {
                    token : data.data.payload.token,
                    refresh_token : data.data.payload.refresh_token,
                    user: data.data.user
                }
            })
            await AsyncStorage.setItem('refresh_token', data.data.payload.refresh_token);
            await AsyncStorage.setItem('token', data.data.payload.token);

        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: LOGIN_FAIL,
                dispatch: error.response.data.message || 'Username o password incorrectos'
            })
        }
    }

    const logout = async() => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('refresh_token');
        dispatch({type: LOGIN_OUT})
    }

    const cleanMessage = () => dispatch({ type: CLEAN_MESSAGE })

    return (
        <AuthContext.Provider 
            value={{
                state,
                ...state,
                signIn,
                logout,
                cleanMessage
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthStateProvider
