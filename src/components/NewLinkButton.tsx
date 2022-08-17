import React from 'react'
import { PlusIcon } from "@heroicons/react/outline";

const NewLinkButton = () => {
  return (
    <div className='mx-2 w-full'>
      <button className="bg-gray-500 hover:bg-gray-500 bg-opacity-50 hover:bg-opacity-70 text-white py-4 mt-3 rounded-xl w-full">
        <PlusIcon className='w-6 mx-auto' />
      </button>
    </div>
  )
}

export default NewLinkButton