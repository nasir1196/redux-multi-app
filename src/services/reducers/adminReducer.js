import { DELETE_FAILED, DELETE_SUCCESS, DELETE_USER, GET_FAILED, GET_SUCCESS, GET_USER, ADD_FAILED, ADD_SUCCESS, ADD_USER, UPDATE_FAILED, UPDATE_SUCCESS, UPDATE_USER } from "../constants/adminConstant"

const initialState = {
    users: [],
    user:{},
    loading: false,
    error: null
}


const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                loading: true
            }

        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }

        case GET_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }


        case DELETE_USER:
            return {
                ...state,
                loading: true
            }

        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((user) => user.id !== action.payload),
                error: null
            }

        case DELETE_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }


        case UPDATE_USER:
            return {
                ...state,
                loading: true
            }

        case UPDATE_SUCCESS:
            let isUpdate = state.users.filter((user) => user.id === action.payload.id)
            if (isUpdate) {
                isUpdate[0].adminName = action.payload.adminName
                isUpdate[0].email = action.payload.email
            }
            return {
                loading: false,
                users: isUpdate,
                error: null
            }

        case UPDATE_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }


        case ADD_USER:
            return {
                ...state,
                loading: true
            }

        case ADD_SUCCESS:
            return {
                loading: false,
                error: null
            }

        case ADD_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default userReducers;