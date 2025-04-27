"use client"

import React from 'react'
import { signOut } from "next-auth/react";


function LogoutButton({children}: {children: React.ReactNode}) {
  return (
    <button onClick={()=> signOut()}>{children}</button>

  )
}

export default LogoutButton