
"use client"
import React from 'react'
import {saveContact} from '../lib/action'
import { useFormState } from 'react-dom'

const CreateFrom = () => {

  const [state,fromAction] = useFormState(saveContact, null)
  return (
    <div>
        <form action={fromAction}>
          {/* name kontak */}
            <div className="mb-5">
                <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Full Name</label>
                {/* inputan */}
                <input type="text" name='name' id='name' className='bg-gray-50 border border-blue-300 text-sm rounded-sm focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5' placeholder='MasukanNama...' />
                <div id='name-eror' aria-live='polite' aria-atomic='true'>
                  <p className='mt-2 text-sm text-red-500'>{state?.Error?.name }</p>
                </div>
            </div>
            {/* phone number  */}
            <div className="mb-5">
                <label htmlFor="phone" className='block text-sm font-medium text-gray-300'>Full Phone</label>
                <input type="text" name='phone' id='phone' className='bg-gray-50 border border-blue-300 text-sm rounded-sm focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5' placeholder='MasukanNomer...' />
                <div id='phone-eror' aria-live='polite' aria-atomic='true'>
                  <p className='mt-2 text-sm text-red-500'>{state?.Error?.phone}</p>
                </div>
            </div>
            <div id='message-eror' aria-live='polite' aria-atomic='true'>
              <p className='mt-2 text-sm text-red-500'>{state?.message}</p>
            </div>
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-500 font-medium rounded-sm text-sm w-full px-5 py-3 text-center'>save</button>
        </form>
    </div>
    
    
  )
}

export default CreateFrom