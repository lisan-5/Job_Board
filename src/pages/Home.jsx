import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Find Your Perfect Job Match
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        JobNest helps you discover opportunities that align with your skills and aspirations.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/jobs" className="btn btn-primary text-lg px-8 py-3">
          Browse Jobs
        </Link>
        <Link to="/register" className="btn btn-secondary text-lg px-8 py-3">
          Post a Job
        </Link>
      </div>
    </div>
  )
}

export default Home