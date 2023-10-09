import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToDos } from './../services/actions/todosAction';
import { Link } from 'react-router-dom';


const ToDos = () => {
    const { isLoading, todos, error } = useSelector((state) => state.todosReducerR)
    const dispatch = useDispatch()

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(deleteToDos(id))

    }

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {
                todos && todos.map((todo) => {
                    const { id, author, message, city, email, province, occupation } = todo

                    return (
                        <section key={id} className=' bg-slate-400 w-92 py-5 px-10 rounded m-5 '>
                            <div className='flex'>
                                <div className='flex'>
                                    <h5 className='flex-none '>{author}</h5>
                                    <h4 className='flex-auto w-64'>{message}</h4>
                                </div>
                                <div>
                                    <Link className=" bg-sky-500 text-yellow-50 py-3 px-5 m-2 rounded" to="/edit" state={{ id, author, message, city, email, province, occupation }}><button>Edit</button></Link>
                                    <button className=" bg-red-500 text-yellow-50 py-3 px-5 m-2 rounded" onClick={(e) => handleDelete(e, id)}>Delete</button>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
            <Link to='/add-todos'><button className='bg-green-500 py-3 px-6 rounded-lg' >Post Todos</button></Link>
        </div>
    )
}

export default ToDos