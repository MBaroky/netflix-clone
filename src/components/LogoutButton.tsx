"use client"

import { signOut } from "next-auth/react";

import React from 'react'

function LogoutButton() {
  return (
    <button className="h-10 w-full bg-white" onClick={()=> signOut()}>Logout</button>

  )
}

export default LogoutButton