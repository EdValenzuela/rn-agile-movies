import React, { useContext } from 'react'
import { baseURL, URL_NOW_PLAYING, URL_POPULAR } from '../../config/axios'

import MoviesContext from './AgileMoviesContext'
import useFetch from '../../hooks/useFetch'
import AuthContext from '../auth/AuthContext'


const AgileMoviesProvider = ({children}) => {

    const { token } = useContext(AuthContext);
    
    const { dataRest, fetching } = useFetch(`${baseURL}${URL_NOW_PLAYING}`);
    const { dataRest: popular, fetching: popularFetching } = useFetch(`${baseURL}${URL_POPULAR}`);

    return (
        <MoviesContext.Provider
            value={{
                dataRest,
                fetching,
                popular,
                popularFetching
            }}
        >
            { children }
        </MoviesContext.Provider>
    )
}

export default AgileMoviesProvider