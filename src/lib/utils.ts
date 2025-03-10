import axios from "axios";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Router from "next/router";


export const loginFormAction =
async (formData: FormData, callBackFun:CallableFunction) => {
 const email = formData.get('email');
 const password = formData.get('password');
 try {
   const result = await signIn('credentials', {
     email,
     password,
     redirect: false,
     callbackUrl: '/',
   });
   if (result?.error) {
     console.log(result.error);
   } else {
     callBackFun();
   }
 } catch (error) {
   console.log(error);
 }
}
export const registerFormAction = async (formData: FormData, callBackFun:CallableFunction) => {
 const email = formData.get('email') as string;
 const name = formData.get('name') as string;
 const password = formData.get('password') as string;
 try {
   await axios.post('/api/register', {
     email,
     name,
     password,
   });
   loginFormAction(formData, callBackFun);
 } catch (error) {
   console.log(error);
 }
}
