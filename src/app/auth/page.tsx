import AuthContent from '@/components/auth/AuthContent';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function  AuthPage() {


  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/profiles");
  }

  return (
    <div className='
    relative h-full w-full bg-[url(/images/hero.jpg)] bg-cover bg-center flex items-center justify-center
    '>
        <div className="absolute bg-black w-full h-full lg:bg-opacity-50">
            <nav className='px-12 py-5'>
                <img className='h-12' src="/images/logo.png" alt="logo" />
            </nav>
            <div className='flex justify-center'>
                <AuthContent loginForm={<LoginForm />} registerForm={<RegisterForm />} />
            </div>
        </div>
    </div>
  )
}

export default AuthPage;