import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../services/actions/adminAction'
import { getAllToDos } from '../services/actions/todosAction'

const Home = () => {
    const { users, loading, error } = useSelector((state) => state.userReducerR)
    const { todos } = useSelector((state) => state.todosReducerR)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
        dispatch(getAllToDos())
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className='divide-x-4'>
                    <h1 className="text-3xl font-extrabold">Admin View Area</h1>
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
                                    <th scope='col' className='px-6 py-3 text-center'>Contact</th>
                                    <th scope='col' className='px-6 py-3 text-center'>Occupation</th>
                                    <th scope='col' className='px-6 py-3 text-center'>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users && users.map((user) => {
                                        const { id, adminName, email, contact, address, city, province, occupation } = user
                                        return (
                                            <tr key={id}>
                                                <td className='border m-2 p-2 text-center'>{adminName}</td>
                                                <td className='border m-2 p-2 text-center'>{email}</td>
                                                <td className='border m-2 p-2 text-center'>{contact} </td>
                                                <td className='border m-2 p-2 text-center'>{occupation} </td>

                                                <td className='border m-2 p-2 text-center'>
                                                    <li>Village: {address}</li>
                                                    <li>City: {city}</li>
                                                    <li>State: {province}</li>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
                <div >
                <h1 className="text-3xl font-extrabold">To Dos View Area</h1>
                    {
                        users && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope='col' className='px-6 py-3 text-center'>Author Name</th>
                                    <th scope='col' className='px-6 py-3 text-center'>Email</th>
                                    <th scope='col' className='px-6 py-3 text-center'>Notes</th>
                                    <th scope='col' className='px-6 py-3 text-center'>Occupation</th>
                                    <th scope='col' className='px-6 py-3 text-center'>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos && todos.map((todo) => {
                                        const { id, author, email, message, city, province, occupation } = todo
                                        return (
                                            <tr key={id}>
                                                <td className='border m-2 p-2 text-center'>{author}</td>
                                                <td className='border m-2 p-2 text-center'>{email}</td>
                                                <td className='border m-2 p-2 text-center'>{message} </td>
                                                <td className='border m-2 p-2 text-center'>{occupation} </td>

                                                <td className='border m-2 p-2 text-center'>
                                                    <li>City: {city}</li>
                                                    <li>State: {province}</li>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home