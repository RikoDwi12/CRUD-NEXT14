import UpdateFrom from '@/components/edit-from'
import React from 'react'
import { getContactById } from '@/lib/data'
import { notFound } from 'next/navigation'
const UpdateContactsPage =async ({params} : {params : {id : string}}) => {
    const id = params.id
    const contact = await getContactById(id)

    if (!contact) {
        notFound()
    }

  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>Edit Kontol Baru</h1>
        <UpdateFrom contact={contact}/>
    </div>
  )
}

export default UpdateContactsPage