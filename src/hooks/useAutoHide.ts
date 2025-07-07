import { useEffect, useRef, useState, RefObject } from 'react';

/**
 * Custom hook to auto-hide a UI element (e.g., nav bar) after a period of inactivity,
 * and show it again on mouse movement.
 * @param hideDelayMs Time in milliseconds before auto-hiding (default: 2000)
 * @returns [navVisible, playerAreaRef]
 */
export function useAutoHide(hideDelayMs: number = 2000): [boolean, RefObject<HTMLDivElement>] {
  const [navVisible, setNavVisible] = useState(true);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const playerAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setNavVisible(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setNavVisible(false), hideDelayMs);
    };
    window.addEventListener('mousemove', handleMouseMove);
    hideTimeout.current = setTimeout(() => setNavVisible(false), hideDelayMs);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [hideDelayMs]);

  return [navVisible, playerAreaRef as RefObject<HTMLDivElement>];
}
