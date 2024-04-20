import {
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    CLEAR_ERROR,

} from "../constants/Userconstants";
export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,

            }
        case REGISTER_USER_FAILED:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,

            }
        case CLEAR_ERROR:
            return {
                ...state,
                error:null,
            }
            default:
                return state;


    }
} //{} user:{} = user er empty value ache

