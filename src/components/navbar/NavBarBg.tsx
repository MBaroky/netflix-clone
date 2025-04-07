"use client"
import useScrollListener from '@/hooks/useScrollListener';
import React from 'react'

const NavBarBg = () => {
    const [scrollY, setScrollY] = React.useState(0);
    useScrollListener((scrollY) => {
        setScrollY(scrollY);
    });
  return (
    scrollY > 0 &&
    <div className='absolute text-white left-0 top-0 w-full h-full z-[-1]
            bg-zinc-900
            bg-opacity-90'></div>
  )
}

export default NavBarBg