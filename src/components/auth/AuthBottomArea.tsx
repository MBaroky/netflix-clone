// Next.js
import Link from "next/link";
import React from "react";

// Components
import { SocialLoginButton } from "./SocialLoginButton";

// Icons
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

// Interfaces
interface AuthBottomAreaProps {
  url: string;
  text: string;
  linkText: string;
}

const AuthBottomArea: React.FC<AuthBottomAreaProps> = ({
  url,
  text,
  linkText,
}) => {
  return (
    <>
      <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
        <SocialLoginButton
          onClick={() =>
            signIn("google", {
              callbackUrl:
                process.env.NEXTAUTH_CALLBACK_URL || "/profiles",
            })
          }>
          <FcGoogle size={30} />
        </SocialLoginButton>
        <SocialLoginButton
          onClick={() =>
            signIn("github", {
              callbackUrl:
                process.env.NEXTAUTH_CALLBACK_URL || "/profiles",
            })
          }>
          <FaGithub size={30} />
        </SocialLoginButton>
      </div>

      <p className='text-neutral-500 mt-12'>
        {text}
        <Link
          href={url}
          className='text-white ml-1 hover:underline cursor-pointer'>
          {linkText}
        </Link>
      </p>
    </>
  );
};

export default AuthBottomArea;
