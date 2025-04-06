"use client"

import { signOut } from "next-auth/react";

import React from 'react'

function LogoutButton({children}: {children: React.ReactNode}) {
  return (
    <button onClick={()=> signOut()}>{children}</button>

  )
}

export default LogoutButton