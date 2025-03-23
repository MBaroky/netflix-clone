"use client"
import useCurrentUser from '@/hooks/useCurrentUser'
import React from 'react'

type User = {
  name: string
}

function UserWelcome() {

  const {data:user} = useCurrentUser()

  return (
    <p className='text-white'>logged in as: {user?.name}</p>
  )
}

export default UserWelcome