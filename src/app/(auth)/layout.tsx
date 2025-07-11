import React from 'react'

import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const authLayout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const session = await getServerSession(authOptions);
    if (session) {
      redirect(process.env.NEXTAUTHCALLBACK_URL || '/profiles');
    }
  return (

    <div className='
    relative min-h-full w-full bg-[url(/images/hero.jpg)] bg-cover bg-center flex flex-col items-stretch justify-center
    '>
        <div className="w-full h-full flex-grow pb-8 lg:bg-opacity-0">
            <nav className='px-12 py-5'>
                <img className='h-12' src="/images/logo.png" alt="logo" />
            </nav>
            <div className='flex justify-center'>
               <div className='bg-background bg-opacity-70 px-16  py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                  {children}

                  </div>

            </div>
        </div>
    </div>
  )
}

export default authLayout