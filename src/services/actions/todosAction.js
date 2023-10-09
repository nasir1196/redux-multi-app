// https://jsonplaceholder.typicode.com/todos
import axios from "axios"
import { DELETE_TO_DOS_FAILED, DELETE_TO_DOS_REQUEST, DELETE_TO_DOS_SUCCESS, GET_TO_DOS_FAILED, GET_TO_DOS_REQUEST, GET_TO_DOS_SUCCESS, POST_TO_DOS_FAILED, POST_TO_DOS_REQUEST, POST_TO_DOS_SUCCESS, UPDATE_TO_DOS_REQUEST, UPDATE_TO_DOS_SUCCESS } from "../constants/constant"
import { UPDATE_TO_DOS_FAILED } from './../constants/constant';

const url = "http://localhost:5000"

export const getAllToDos = () => async (dispatch) => {
    dispatch({ type: GET_TO_DOS_REQUEST })
    try {
        const res = await axios.get(`${url}/todos`)
        dispatch({ type: GET_TO_DOS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_TO_DOS_FAILED, payload: error.message })
    }
}

export const deleteToDos = (userId) => async (dispatch) => {
    dispatch({ type: DELETE_TO_DOS_REQUEST })
    try {
        const res = await axios.delete(`${url}/todos/${userId}`)
        dispatch({ type: DELETE_TO_DOS_SUCCESS, payload: res.data })
        dispatch(getAllToDos())
    } catch (error) {
        dispatch({ type: DELETE_TO_DOS_FAILED, payload: error.message })
    }
}

export const updateToDos = (update) => async (dispatch) => {
    dispatch({ type: UPDATE_TO_DOS_REQUEST })
    try {
        const { id } = update
        const res = await axios.put(`${url}/todos/${id}`, update)
        dispatch({ type: UPDATE_TO_DOS_SUCCESS, payload: res.data })
        dispatch(getAllToDos())
    } catch (error) {
        dispatch({ type: UPDATE_TO_DOS_FAILED, payload: error.message })
    }
}

export const addTodos = (notes) => async (dispatch) => {
    dispatch({ type: POST_TO_DOS_REQUEST })
    try {
        const res = await axios.post(`${url}/todos`, notes)
        dispatch({ type: POST_TO_DOS_SUCCESS, payload: res.data })
        dispatch(getAllToDos())
    } catch (error) {
        dispatch({ type: POST_TO_DOS_FAILED, payload: error.message })
    }
}