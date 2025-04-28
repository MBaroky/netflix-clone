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
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white transition-all duration-500 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}