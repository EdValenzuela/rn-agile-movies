import { LOGIN_FAIL, CLEAN_MESSAGE, LOGIN_IN, LOGIN_OUT, LOGIN_NOT_AUTHENTICATED, AUTHENTICATED, NOT_AUTHENTICATED } from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_FAIL:
            return{
                ...state,
                user: '',
                status: NOT_AUTHENTICATED,
                token: null,
                refresh_token:null,
                errorMessage: action.payload
            }

        case CLEAN_MESSAGE:
            return{
                ...state,
                errorMessage: ''
            }

        case LOGIN_IN:
            return{
                ...state,
                errorMessage: '',
                status: AUTHENTICATED,
                refresh_token : action.payload.refresh_token,
                token: action.payload.token,
                user: action.payload.user
            }

        case LOGIN_NOT_AUTHENTICATED:
        case LOGIN_OUT:
            return{
                ...state,
                errorMessage: '',
                status: NOT_AUTHENTICATED,
                refresh_token: null,
                token: null
            }
        default:
            return state;
    }
}

export default AuthReducer