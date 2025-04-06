import React from 'react'

function SubmitButton({text}: {text: string}) {
  return (

    <button type='submit' className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'> {text}
    </button>
  )
}

export default SubmitButton