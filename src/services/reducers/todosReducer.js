import { DELETE_TO_DOS_FAILED, DELETE_TO_DOS_REQUEST, DELETE_TO_DOS_SUCCESS, GET_TO_DOS_FAILED, GET_TO_DOS_REQUEST, GET_TO_DOS_SUCCESS, POST_TO_DOS_FAILED, POST_TO_DOS_REQUEST, POST_TO_DOS_SUCCESS, UPDATE_TO_DOS_FAILED, UPDATE_TO_DOS_REQUEST, UPDATE_TO_DOS_SUCCESS } from "../constants/constant";



const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TO_DOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case GET_TO_DOS_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }

        case GET_TO_DOS_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }

        case DELETE_TO_DOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case DELETE_TO_DOS_SUCCESS:
            return {
                isLoading: false,
                todos: state.todos.filter((todos) => todos.id !== action.payload),
                error: null
            }

        case DELETE_TO_DOS_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }

        case UPDATE_TO_DOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case UPDATE_TO_DOS_SUCCESS:
            let isUpdate = state.todos.filter((todo) => todo.id === action.payload.id)
            if (isUpdate) {
                isUpdate[0].message = action.payload.message
                isUpdate[0].email= action.payload.email
            }
            return {
                isLoading: false,
                todos: isUpdate,
                error: null
            }

        case UPDATE_TO_DOS_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload,
            }

        case POST_TO_DOS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case POST_TO_DOS_SUCCESS:
            return {
                loading: false,
                error: null
            }

        case POST_TO_DOS_FAILED:
            return {
                loading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;