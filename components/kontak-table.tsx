import React from 'react'
import {getContacts} from '@/lib/data'
import { formatDate} from '@/lib/utlis'
import { DeleteButton, EditButton } from './button'
export const ContactTable = async () => {
    const contact = await getContacts()
  return (
    <div className=''>
      <table className='bg-blue-300 w-full text-sm text-left text-black '>
        <thead className='bg-blue-700 text-sm text-gray-300 uppercase '>
          <tr>
            <th className='py-3 px-6'>No</th>
            <th className='py-3 px-6'>Name</th>
            <th className='py-3 px-6'>Phone Number</th>
            <th className='py-3 px-6'>Created At</th>
            <th className='py-3 px-6'>Actions</th>
          </tr>
        </thead>
        <tbody>
            {contact.map((contact, index)=>(
                <tr key={contact.id} className='bg-white border-b'>
            <td className='py-3 px-6'>{index+1}</td>
            <td className='py-3 px-6'>{contact.name}</td>
            <td className='py-3 px-6'>{contact.phone}</td>
            <td className='py-3 px-6'>{formatDate(contact.createdAt.toDateString())}</td>
            <td className='flex justify-center gap-1 py-3'>
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
