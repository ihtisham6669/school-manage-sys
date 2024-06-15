import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar px-6 bg-base-100 shadow-sm shadow-sky-600 mb-4">
    <div className="flex-1">
      <a href='/' className="btn btn-ghost text-xl">Manage Student Sys</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal gap-3 px-1">
        <li><Link to={'/'}>ALL Students</Link></li>
        <li><Link to={'/add-student'}>Add Student</Link></li>
        
      </ul>
    </div>
  </div>
  )
}

export default Navbar
