"use client"
import React, { useRef } from "react";
import { useState } from "react";

import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";
import { useOnClickOutside } from "usehooks-ts";

interface DropDownMenuProps {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  menuButton: React.ReactNode; // Add a prop for the menu button
  direction?: string;
  arrow?: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ children, width, menuButton, direction, arrow, ...props }) => {

  const [showDropDown, setShowDropDown] = useState(false);

  // Handle click outside to close the dropdown
  const ref = useRef(null)
  // @ts-ignore
  useOnClickOutside(ref, () => {
    setShowDropDown(false)
  });

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setShowDropDown(prev => !prev)}
        className={`${props.className && props.className } flex flex-row items-center gap-2 cursor-pointer`}
      >
        {menuButton} {/* Render the menu button */}
        {arrow && <BsChevronDown className={`text-white transition ${showDropDown? 'rotate-180':'rotate-0'}`} />}
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
