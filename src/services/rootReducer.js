import { combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";
import userReducers from "./reducers/adminReducer";

export const rootReducer = combineReducers({
    todosReducerR: todosReducer,
    userReducerR: userReducers
})