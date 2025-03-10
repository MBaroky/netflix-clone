import Input from './Input';
import SubmitButton from './SubmitButton';
import { redirect, useRouter } from 'next/navigation';
import { loginFormAction } from '@/lib/utils';

function LoginForm() {
    const router = useRouter();

    const handleSubmit = async (formData:FormData) => {
        loginFormAction(formData, () => router.push("/"));
    };

    return (
        <>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
                Sign in
            </h2>
            <form action={handleSubmit} >
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
        </>
    )
}

export default LoginForm