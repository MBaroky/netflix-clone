import React from 'react'

interface NavbarItemProps {
  label: string,
  className?: string,
}

const NavbarItem:React.FC<NavbarItemProps> = ({label, ...props}) => {
  return (
    <div className={`text-white cursor-pointer transition ${props.className}`}>
      {label}
    </div>
  )
}

export default NavbarItem