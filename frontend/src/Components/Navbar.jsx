import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar px-6 bg-base-100">
    <div className="flex-1">
      <span className="btn btn-ghost text-xl">Manage Student Sys</span>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={'/'}>ALL Students</Link></li>
        <li>
          <details>
            <summary>
              Manage
            </summary>
            <ul className="p-6 bg-base-100 z-50 rounded-t-none">
              <li><Link to={'/add-student'}>Add Student</Link></li>
              <li><a>Delete Student</a></li>
              <li><a>Update Student</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar
