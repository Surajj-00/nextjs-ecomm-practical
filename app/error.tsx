'use client'

import React from 'react'

const error = (
  { error, reset }: { error: Error; reset: () => void; }
) => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-500 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Try again
      </button>
    </div>
  )
}

export default error
