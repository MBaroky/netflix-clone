"use client"
import React from "react";
import { useState } from "react";

import classNames from "classnames";

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
        className={`${props.className && props.className } flex flex-row items-center gap-2 cursor-pointer`}
      >
        {menuButton} {/* Render the menu button */}
      </div>
      {showDropDown && (
        <div
          className={`bg-black absolute top-8 py-5 flex-col border-2 border-gray-800 flex`}
          style={{
            minWidth: width? parseInt(width) : undefined,
            left: direction === "right" ? undefined : 0,
            right: direction === "right" ? 0 : undefined,
            zIndex: 100,
          }}

            // ` ${classWidth}
            //     bg-black absolute top-8 ${classPostition} py-5 flex-col border-2 border-gray-800 flex`}
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
