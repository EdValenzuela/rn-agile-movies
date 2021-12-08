import React, { useReducer } from 'react'

import MoviesContext from './AgileMoviesContext'
import AgileMoviesReducer from './AgileMoviesReducer'

const initialState = {
    dataMovies: [],
}

const AgileMoviesProvider = ({children}) => {

    const [state, dispatch] = useReducer(AgileMoviesReducer, initialState)

    return (
        <MoviesContext.Provider
            value={{

            }}
        >
            { children }
        </MoviesContext.Provider>
    )
}

export default AgileMoviesProvider