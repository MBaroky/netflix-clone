"use client";
import { ReactNode } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import { useToggleVariant } from '@/hooks/useToggleVariant';
import { useLocalStorage } from "usehooks-ts";
import { SocialLoginButton } from "./SocialLoginButton";

interface AuthContentProps {
  loginForm: ReactNode;
  registerForm: ReactNode;
}

type Variant = "login" | "register";
function AuthContent({ loginForm, registerForm }: AuthContentProps) {
  // const [variant, toggleVariant] = useToggleVariant();
  const [variant, setVariant, removeVariant] =
    useLocalStorage<Variant>("variant", "login");
  return (
    <div className='bg-black bg-opacity-70 px-16  py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
      {variant === "login" ? loginForm : registerForm}

      <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
        <SocialLoginButton
          onClick={() =>
            signIn("google", { callbackUrl: "/profiles" })
          }>
          <FcGoogle size={30} />
        </SocialLoginButton>
        <SocialLoginButton
          onClick={() =>
            signIn("github", { callbackUrl: "/profiles" })
          }>
          <FaGithub size={30} />
        </SocialLoginButton>
      </div>

      <p className='text-neutral-500 mt-12'>
        {variant === "login"
          ? "First time here?"
          : "Already have an account?"}{" "}
        <span
          onClick={() =>
            setVariant(variant === "login" ? "register" : "login")
          }
          className='text-white ml-1 hover:underline cursor-pointer'>
          {variant === "login" ? "Create an account" : "Sign in"}
        </span>
      </p>
    </div>
  );
}

export default AuthContent;
