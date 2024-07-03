import { CreateButton } from '@/components/button'
import { ContactTable } from '@/components/kontak-table'
import Search from '@/components/search'
import React from 'react'
import { IoSearch } from 'react-icons/io5'

export default function page() {
  return (
    <>
    <div className=' max max-w-screen-md mx-auto mt-5'>
    <div className=' flex items-center justify-between gap-1 mb-5'>
      <Search />
      <CreateButton />
    </div>
    <ContactTable />
    </div>
    
    
    
    </>
    
  )
}
