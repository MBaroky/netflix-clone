"use client";
import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { useToggleVariant } from '@/hooks/useToggleVariant';



function AuthContent() {
    const [variant, toggleVariant] = useToggleVariant();

  return (
    <div className="bg-black bg-opacity-70 px-16  py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">

                       {variant === 'login' ? (
                        <LoginForm  />
                       ) : (
                        <RegisterForm />
                       )}

                        <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                            <div onClick={() => signIn('google', {callbackUrl: '/'})} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                <FcGoogle size={30} />
                            </div>
                            <div onClick={() => signIn('github', {callbackUrl: '/'})} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                <FaGithub size={30} />
                            </div>

                        </div>


                        <p className='text-neutral-500 mt-12'>
                            {variant === "login" ? "First time here?":"Already have an account?"} <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                {
                                variant === 'login' ? 'Create an account' : 'Sign in'
                                }
                                </span>
                        </p>
                </div>
  )
}

export default AuthContent