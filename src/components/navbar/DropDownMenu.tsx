"use client"
import { useState } from "react";
import React from "react";

interface DropDownMenuProps {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  menuButton: React.ReactNode; // Add a prop for the menu button
  direction?: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ children, width, menuButton, direction, ...props }) => {

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowDropDown(prev => !prev)}
        className={`${props.className ? props.className : 'flex flex-row items-center gap-2 cursor-pointer'}`}
      >
        {menuButton} {/* Render the menu button */}
      </div>
      {showDropDown && (
        <div
          className={` ${width ? `w-${width}` : ""}
                bg-black absolute top-8 ${direction?direction:"left"}-0 py-5 flex-col border-2 border-gray-800 flex`}
        >
          <div className="flex flex-col gap-4">
            {children}
            </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
