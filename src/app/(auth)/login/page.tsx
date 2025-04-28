"use client";

// Components
import AuthBottomArea from "@/components/auth/AuthBottomArea";
import SubmitButton from "@/components/auth/SubmitButton";
import Input from "@/components/Input";
import Toast from "@/components/Toast";

// Actions
import { loginFormAction } from "@/utils/authActions";

// Hooks
import { useToastStore } from "@/components/Toast/toastStore";

function LoginPage() {

  const showToast = useToastStore((state) => state.showToast);

  // Handle error and success messages
  const handleLogin = async (formData: FormData) => {
    const result = await loginFormAction(formData);
    if (result?.error) {
    //   setError(result.error);
        showToast(result.error, "error");
    } else {
      // Handle successful login
        showToast("Login successful! Redirecting...", "success");
    }
  };

  return (
    <>
      <Toast />

      <h2 className='text-white text-4xl mb-8 font-semibold'>
        Sign in
      </h2>
      <form action={handleLogin}>
        <div className='flex flex-col gap-4'>
          <Input label='Email' type='email' id='email' />
          <Input label='Password' type='password' id='password' />
        </div>
        <SubmitButton text='Login' />
      </form>
      <AuthBottomArea
        linkText='Create an account'
        text='First time here? '
        url='/register'
      />
    </>
  );
}

export default LoginPage;
