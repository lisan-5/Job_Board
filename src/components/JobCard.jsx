import React from 'react'
import { BriefcaseIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
      <div className="text-gray-600 space-y-2 mb-4">
        <div className="flex items-center">
          <BriefcaseIcon className="w-5 h-5 mr-2" />
          <span>{job.company}</span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="w-5 h-5 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="w-5 h-5 mr-2" />
          <span>{job.salary}</span>
        </div>
      </div>
      <button className="btn btn-primary w-full">Apply Now</button>
    </div>
  )
}

export default JobCard