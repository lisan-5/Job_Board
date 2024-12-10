import React from 'react'

function Logo({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#4F46E5" />
      <path d="M30 40 C30 30, 70 30, 70 40" stroke="white" strokeWidth="4" fill="none" />
      <circle cx="40" cy="50" r="10" fill="white" />
      <circle cx="60" cy="50" r="10" fill="white" />
      <path d="M35 55l5-5 5 5M55 55l5-5 5 5" stroke="#4F46E5" strokeWidth="2" />
    </svg>
  )
}

export default Logo