import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-style'>
        <ul>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/todos">Todos</Link></li>
            <li ><Link to="/isAdmin">Admin</Link></li>
        </ul>
    </div>
  )
}

export default Navbar