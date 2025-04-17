"use client";
import AuthBottomArea from '@/components/auth/AuthBottomArea';
import SubmitButton from '@/components/auth/SubmitButton';
import Input from '@/components/Input';
import { loginFormAction } from '@/utils/authActions';

function LoginPage() {

    return (
        <>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
                Sign in
            </h2>
            <form action={loginFormAction} >
                <div className="flex flex-col gap-4">
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
                <SubmitButton text='Login' />
            </form>
            <AuthBottomArea linkText='Create an account' text='First time here? ' url='/register' />
        </>
    )
}

export default LoginPage