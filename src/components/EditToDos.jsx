import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateToDos } from '../services/actions/todosAction';

const EditToDos = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [update, setUpdate] = useState({ id: location.state.id, author: location.state.author, message: location.state.message, email: location.state.email, city: location.state.city, province: location.state.province, occupation:location.state.occupation })
    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateToDos(update))
        navigate("/", { replace: true })
    }
    return (
        <div>
            <h2>Edit Your Todos</h2>
            <div className='m-3'>
                <label htmlFor="email">Email</label><br />
                <input id="email" className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' type="email" value={update.email} onChange={(e) => setUpdate({ ...update, email: e.target.value })} />
            </div>

            <div className='m-3'>
                <label htmlFor='message'>Notes</label><br />
                <textarea id="message" rows="10" cols='30' className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' value={update.message} onChange={(e) => setUpdate({ ...update, message: e.target.value })} />
            </div>
            <button onClick={(e) => handleUpdate(e)} className='bg-green-500 py-3 px-6 rounded-lg' >Update Todos</button>

        </div>
    )
}

export default EditToDos