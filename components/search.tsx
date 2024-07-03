import React from 'react'
import { IoSearch } from 'react-icons/io5'

export default function Search() {
  return (
    <div className='bg-purple-800 relative flex flex-1'>
      <input type="text" className='w-full border border-gray-500 py-2 pl-10 text-sm outlin-2 rounded-sm' placeholder='Search...' />
      <IoSearch className='absolute left-3 top-2 h-5 w-5 text-gray'/>
    </div>
  )
}
