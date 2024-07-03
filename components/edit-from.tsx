
"use client"
import React from 'react'
import {saveContact, updateContact} from '../lib/action'
import { useFormState } from 'react-dom'
import { SubmitButton } from './button'
import type { Contact } from '@prisma/client'

const UpdateFrom = ({contact}:{contact:Contact}) => {
    const UpdateContactWithId = updateContact.bind(null, contact.id);

  const [state,fromAction] = useFormState(UpdateContactWithId, null)
  return (
    <div>
        <form action={fromAction}>
          {/* name kontak */}
            <div className="mb-5">
                <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Full Name</label>
                {/* inputan */}
                <input type="text" name='name' id='name' className='bg-gray-50 border border-blue-300 text-sm rounded-sm focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5' placeholder='MasukanNama...' defaultValue={contact.name}/>
                <div id='name-eror' aria-live='polite' aria-atomic='true'>
                  <p className='mt-2 text-sm text-red-500'>{state?.Error?.name }</p>
                </div>
            </div>
            {/* phone number  */}
            <div className="mb-5">
                <label htmlFor="phone" className='block text-sm font-medium text-gray-300'>Full Phone</label>
                <input type="text" name='phone' id='phone' className='bg-gray-50 border border-blue-300 text-sm rounded-sm focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5' placeholder='MasukanNomer...' defaultValue={contact.phone}/>
                <div id='phone-eror' aria-live='polite' aria-atomic='true'>
                  <p className='mt-2 text-sm text-red-500'>{state?.Error?.phone}</p>
                </div>
            </div>
            <div id='message-eror' aria-live='polite' aria-atomic='true'>
              <p className='mt-2 text-sm text-red-500'>{state?.message}</p>
            </div>
           <SubmitButton label="update" />
        </form>
    </div>
    
    
  )
}

export default UpdateFrom