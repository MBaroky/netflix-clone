"use client";
import { registerFormAction } from '@/lib/utils'
import React from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { redirect, useRouter } from 'next/navigation';

function RegisterForm() {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        registerFormAction(formData, () => router.push("/"));
    };
    // [x]: move the register form logic in here
    return (
        <>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
                Register
            </h2>
            <form action={handleSubmit}>
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