"use client"
import React from 'react'
import DropDownMenu from './DropDownMenu'
import LogoutButton from '../auth/LogoutButton'
import useCurrentUser from '@/hooks/useCurrentUser'

const AccountButton = () => {
  return (
    <div className='
      w-6
      h-6
      lg:w-10
      lg:h-10
      rounded-md
      overflow-hidden
      bg-gray-100'>
        <img src="/images/profile-blue.jpg" alt="Profile" />
    </div>
  )
}

const AccountMenu
 = ({}) => {
  const {data} = useCurrentUser();
  return (

    <div className='
    flex
    flex-row
    items-center
    gap-2
    relative
    cursor-pointer'>
        <DropDownMenu arrow width='200' direction='right' menuButton={<AccountButton />} >
            <div className='px-3 group/item flex flex-row items-center gap-3 w-full'>
                <img src="images/profile-blue.jpg" alt="profile" className='w-8 rounded-md' />
                <p className='text-white text-sm group-hover/item:underline'>
                  {data?.name}
                </p>

            </div>
            <hr className='bg-gray-600 border-0 h-px my-4' />
            <div className='px-3 text-center text-sm text-white hover:underline '>

                <LogoutButton>Logout of Netflix</LogoutButton>
            </div>
        </DropDownMenu>
  </div>
  )
}

export default AccountMenu