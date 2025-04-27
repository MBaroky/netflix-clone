"use client";
import React from 'react'

// Actions
import { registerFormAction } from '@/utils/authActions'

// Components
import Input from '@/components/Input'
import SubmitButton from '@/components/auth/SubmitButton'

function RegisterForm() {
    return (
        <>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
                Register
            </h2>
            <form action={registerFormAction}>
                <div className="flex flex-col gap-4">

                    <Input
                        label='Username'
                        type='name'
                        id='name'
                    />
                    <Input
                        label='Email'
                        type='email'
                        id='email'
                    />
                    <Input
                        label='Password'
                        type='password'
                        id='password'
                    />
                </div>
                <SubmitButton text='Register' />

            </form>
        </>
    )
}

export default RegisterForm