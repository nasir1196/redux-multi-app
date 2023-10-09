import axios from "axios"
import { DELETE_FAILED, DELETE_SUCCESS, DELETE_USER, GET_FAILED, GET_SUCCESS, GET_USER, ADD_FAILED, ADD_SUCCESS, ADD_USER, UPDATE_FAILED, UPDATE_SUCCESS, UPDATE_USER } from "../constants/adminConstant"

const uri = "http://localhost:5000"

export const loadUser = () => async (dispatch) => {
    dispatch({ type: GET_USER })
    try {
        const res = await axios.get(`${uri}/user`)
        dispatch({ type: GET_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: GET_FAILED, payload: error.message })
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: DELETE_USER })
    try {
        const res = await axios.delete(`${uri}/user/${id}`)
        dispatch({ type: DELETE_SUCCESS, payload: res.data })
        dispatch(loadUser())
    } catch (error) {
        dispatch({ type: DELETE_FAILED, payload: error.message })
    }
}

export const updateUser = (id, adminName, email, address, contact, city, occupation, province ) => async (dispatch) => {
    dispatch({ type: UPDATE_USER })
    try {
        const updateData = { id, adminName, email, address, contact, city, occupation, province  }
        const res = await axios.put(`${uri}/user/${id}`, updateData)
        dispatch({ type: UPDATE_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: UPDATE_FAILED, payload: error.message })
    }
}

export const addUser = (user) => async (dispatch) => {
    dispatch({ type: ADD_USER })
    try {
        const res = await axios.post(`${uri}/user`, user)
        dispatch({ type: ADD_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: ADD_FAILED, payload: error.message })
    }
}