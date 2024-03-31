import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./action-type"

const initialState = {
    theme: false,
    isLogin: false,
    isLoading: false,
    isError: false,
    data: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case GET_LOGIN_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case GET_LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: false };
        default:
            return state;
    }

}