import React from 'react'
import { NavLink } from 'react-router-dom'

function Nothing() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
        <h1 className='text-9xl font-bold text-blue-600'>404</h1>
        <h1 className='text-6xl font-bold mt-2 text-gray-800'>Page Not Fount</h1>
        <h1 className='mt-8'> <NavLink to={'/shop'} className="font-semibold text-white bg-blue-600 py-4 px-6 rounded">Back To Shop</NavLink></h1>
        </div>
    </div>
  )
}

export default Nothing