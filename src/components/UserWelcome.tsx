"use client"
import React from 'react'

// Hooks
import useCurrentUser from '@/hooks/useCurrentUser'


function UserWelcome() {

  const {data:user}:{data:User} = useCurrentUser()

  return (
    <p className='text-white'>logged in as: {user?.name}</p>
  )
}

export default UserWelcome