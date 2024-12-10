import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">JobNest</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/jobs" className="text-gray-700 hover:text-gray-900">Jobs</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar