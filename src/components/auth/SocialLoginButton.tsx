import React from 'react'

type SocialLoginButtonProps = {
  children?: React.ReactNode
  onClick: () => void
}

export function SocialLoginButton({children, ...props}:SocialLoginButtonProps){
  return (
     <div onClick={props.onClick} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                    {children}
                                </div>
  )
}
