"use client";

// components
import AuthBottomArea from "@/components/auth/AuthBottomArea";
import SubmitButton from "@/components/auth/SubmitButton";
import Input from "@/components/Input";

// actions
import { registerFormAction } from "@/utils/authActions";

// hooks
import { useToastStore } from "@/components/Toast/toastStore";
import Toast from "@/components/Toast";

function RegisterPage() {

  const showToast = useToastStore((state) => state.showToast)

//   handle error and success messages
  const handleRegister = async (formData: FormData) => {
    const result = await registerFormAction(formData);
    if (result?.error) {
      showToast(result.error, "error");
    } else {
      showToast("Registration successful! Redirecting...", "success");
    }
  };


  return (
    <>
      <Toast />
      <h2 className='text-white text-4xl mb-8 font-semibold'>
        Register
      </h2>
      <form action={handleRegister}>
        <div className='flex flex-col gap-4'>
          <Input label='Username' type='name' id='name' />
          <Input label='Email' type='email' id='email' />
          <Input label='Password' type='password' id='password' />
        </div>
        <SubmitButton text='Register' />
      </form>

      <AuthBottomArea
        linkText='Sign in'
        text='Already have an account? '
        url={process.env.NEXTAUTH_LOGIN_URL || "/login"}
      />
    </>
  );
}

export default RegisterPage;
