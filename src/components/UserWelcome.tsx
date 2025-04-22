"use client"
import useCurrentUser from '@/hooks/useCurrentUser'
import React from 'react'


function UserWelcome() {

  const {data:user}:{data:User} = useCurrentUser()

  return (
    <p className='text-white'>logged in as: {user?.name}</p>
  )
}

export default UserWelcome