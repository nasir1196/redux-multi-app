import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, loadUser } from '../services/actions/adminAction'




const AdminView = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state) => state.userReducerR)
  const [id, setId] = useState({ id: "" })

  const handleDeleteUser = (e, id) => {
    e.preventDefault()
    if (window.confirm("Are you sure wanted to delete?")) {
      dispatch(deleteUser(id))
    }
  }

  useEffect(() => {
    dispatch(loadUser())
  }, [id])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {
        loading && <h1>Loading...</h1>
      }
      {
        error && <h1>{error}</h1>
      }
      {
        users && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope='col' className='px-6 py-3 text-center'>Name</th>
            <th scope='col' className='px-6 py-3 text-center'>Email</th>
            <th scope='col' className='px-6 py-3 text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((user) => {
              const { id, adminName, email, address, contact, city, occupation, province} = user
              return (
                <tr key={id}>
                  <td className='border m-2 p-2 text-center'>{adminName}</td>
                  <td className='border m-2 p-2 text-center'>{email}</td>
                  <td className='border m-2 p-2 text-center'>
                    <Link to="/edit-admin" state={{ id, adminName, email, address, contact, city, occupation, province }}><button className='m-2 bg-sky-500 py-1 rounded-xl px-5 '>Edit</button></Link>
                    <button className='m-2 bg-red-500 py-1 rounded-xl px-5 ' onClick={(e) => handleDeleteUser(e, id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      }
      <Link to="/add-admin"> <button className='bg-green-500 border-dotted rounded-2xl py-2 px-5 m-3'>Add New Admin</button></Link>
    </div>
  )
}

export default AdminView