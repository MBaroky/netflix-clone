import React, { ReactNode } from 'react'

type ControlsButtonProps = React.HTMLAttributes<HTMLDivElement> & {  children: ReactNode
}

const ControlsButton = ({children, onClick, className}: ControlsButtonProps) => {
  return (
    <div className={`text-white h-8 min-w-8 flex items-center justify-center cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default ControlsButton