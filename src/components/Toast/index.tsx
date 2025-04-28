"use client";

import { useEffect } from "react";
import { useToastStore } from "./toastStore";

// Toast component to display messages
export default function Toast() {

    // Access the toast store USING:
    // const showToast = useToastStore((state) => state.showToast);
  const { message, type, isVisible, hideToast } = useToastStore();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast(); // Hide toast after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isVisible, hideToast]);

  if (!isVisible || !message) return null;

  return (
    <div
      className={`fixed max-w-full top-8 left-1/2 text-center w-80 -ml-40 px-6 py-3 rounded-lg shadow-lg text-white transition-all duration-500 ${isVisible ? 'animate-in slide-in-from-top': 'animate-out fade-out'} ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}