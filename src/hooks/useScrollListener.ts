import { useEffect } from "react";
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