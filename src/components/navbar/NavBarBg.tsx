"use client"
import React from 'react'
import classNames from 'classnames';

// Hooks
import useScrollListener from '@/hooks/useScrollListener';
import { useDebounceCallback } from 'usehooks-ts';

const NavBarBg = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const debouncedScrollY = useDebounceCallback(setScrollY, 100);
    // useScrollListener is a custom hook that listens to the scroll event and updates the scrollY state
    // The useDebounceCallback is used to debounce the scrollY state update to avoid performance issues
    // when the user scrolls quickly


    useScrollListener((scrollValue) => {
        debouncedScrollY(scrollValue);
    });

    const scrollClasses = classNames({
        'bg-opacity-90': scrollY > 0,
        'bg-opacity-0': scrollY === 0,
        'transition-all duration-500 ease-in-out': true,
    })
  return (
    <div className={`absolute text-white left-0 top-0 w-full h-full z-[-1] bg-zinc-900 transition ${scrollClasses}`}></div>
  )
}

export default NavBarBg