"use client";
import React from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import { redirect } from "next/navigation";

export const ProfileButton = () => {
    const {data:user}:{data:User} = useCurrentUser();
  return (
    <div onClick={() => {redirect('/')}}>
      <div className='group flex-row w-44 mx-auto'>
        <div
          className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent
              group-hover:border-white
              group-hover:cursor-pointer
              overflow-hidden
              '>
          <img src='/images/profile-blue.jpg' alt='' />
        </div>
        <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
            {user?.name}
        </div>
      </div>
    </div>
  );
};
