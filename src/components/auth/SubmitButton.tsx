import React from 'react'

function SubmitButton({text}: {text: string}) {
  return (

    <button type='submit' className='bg-gradient-to-r from-gradientStart via-gradientMid to-gradientEnd py-3 text-white rounded-md w-full mt-10 transition'> {text}
    </button>
  )
}

export default SubmitButton