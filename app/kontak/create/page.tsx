import CreateFrom from '@/components/create-from'
import React from 'react'

const CreateContactsPage = () => {
  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>Tambahkan Kontak Baru</h1>
        <CreateFrom/>
    </div>
  )
}

export default CreateContactsPage