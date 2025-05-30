import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { env } from 'process'
import React from 'react'

// Components
import LogoutButton from '@/components/auth/LogoutButton'
import { ProfileButton } from '@/components/ProfileButton'

// libs
import { authOptions } from '@/lib/authOptions'

async function Profiles() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect(env.NEXTAUTH_LOGIN_URL || '/login')
  }
  return (
    <div className='flex items-center h-full justify-center'>
      <div className="flex flex-col">
        <div className="text-3xl md:text-6xl text-center text-white">
          <h1>Who is watching?</h1>
        </div>
        <div className="flex items-center justify-center gap-8 mt-10">
          <ProfileButton />
        </div>
        <p className='text-white text-center mt-10'>Can't find your account? <LogoutButton><span className='text-green-400'>Login again with different account.</span></LogoutButton></p>
      </div>

    </div>
  )
}

export default Profiles