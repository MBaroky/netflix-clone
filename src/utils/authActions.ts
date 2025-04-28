import prismadb  from '@/lib/prismadb';
import axios from "axios";
import { signIn } from "next-auth/react";
import { errorMessages } from './constants';
import { redirect } from 'next/navigation';


export const loginFormAction =
async (formData: FormData, callBackFun?:CallableFunction):Promise<{error?:string, success?:boolean}> => {
 const email = formData.get('email');
 const password = formData.get('password');
 try {
   const result = await signIn('credentials', {
     email,
     password,
     redirect: false,
     callbackUrl: process.env.NEXTAUTH_CALLBACK_URL || '/profiles',
   });
   if (result?.error) {
     console.log(result.error);
     return { error: result.error };
   }
   setTimeout(() => {
    redirect(result?.url || '/profiles');
   }, 2000);
   return { success: true };

 } catch (error) {
   return { error: errorMessages.default };
 }
}
export const registerFormAction = async (formData: FormData, callBackFun?:CallableFunction): Promise<{ error?: string; success?: boolean }> => {
 const email = formData.get('email') as string;
 const name = formData.get('name') as string;
 const password = formData.get('password') as string;
 try {
   await axios.post('/api/register', {
     email,
     name,
     password,
   });
    loginFormAction(formData);
    return { success: true };
 } catch (error) {
  if (axios.isAxiosError(error)) {

   return { error: error.response?.data.error };
  }

   return { error: errorMessages.default };

 }
}
