import { useEffect } from "react";

/**
 * Custom hook to listen for scroll events and execute a callback with the current scroll position.
 * @param callback - Function to be called with the current scroll position.
 *
 * Usage:
 *
 * import useScrollListener from "./hooks/useScrollListener";
 *
 * function MyComponent() {
 *     useScrollListener((scrollY) => {
 *         console.log("Current scroll position:", scrollY);
 *     });
 *
 *     return <div>Scroll to see the effect</div>;
 * }
 */
export default function useScrollListener(callback: (scrollY: number) => void):void {
    useEffect(() => {
        const handleScroll = () => {
            callback(window.scrollY); // Pass the scroll position to the callback
        };

        window.addEventListener("scroll", handleScroll);


        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[callback])
}