import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateUser } from '../services/actions/adminAction'

const EditAdmin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({ adminName: location.state.adminName, email: location.state.email, id: location.state.id, address: location.state.address, contact: location.state.contact, city: location.state.city, occupation: location.state.occupation, province: location.state.province })

    const handleUpdate = (e) => {
        e.preventDefault()
        const { id, adminName, email, address, contact, city, occupation, province } = data;
        dispatch(updateUser(id, adminName, email, address, contact, city, occupation, province))
        navigate("/isAdmin", { replace: true })
    }
    return (
        <div>
            <form onSubmit={handleUpdate} >
                <div>
                    <input className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' type="text" value={data.adminName} onChange={(e) => setData({ ...data, adminName: e.target.value })} />
                </div>

                <div>
                    <input className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>

                <div>
                    <input className='py-2 rounded-lg border m-1  text-black w-96 hover:bg-rose-500 hover:border-emerald-500' type="number" value={data.contact} onChange={(e) => setData({ ...data, contact: e.target.value })} />
                </div>
                <div>
                    <button className='bg-green-500 py-3 px-6 rounded-lg' type='submit' >Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditAdmin