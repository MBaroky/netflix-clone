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
  direction?: "left" | "right" | "center";
  // Add a prop for the direction of the dropdown
  arrow?: boolean;
  pointer?: boolean
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ children, width, menuButton, direction, arrow, pointer, ...props }) => {

  const [showDropDown, setShowDropDown] = useState(false);

  // Handle click outside to close the dropdown
  const ref = useRef(null)
  // @ts-ignore
  useOnClickOutside(ref, () => {
    setShowDropDown(false)
  });

  const pointerClasses = classNames({
    'mt-[20px]': pointer,
    'mt-2': !pointer,
    [`before:content-[""] before:absolute before:-top-[12px] before:mt-[1px] before:${direction?direction:'left'}-0 before:border-x-transparent before:border-t-transparent before:border-b-black before:border-x-[12px] before:border-b-[12px]`]: pointer,
    'before:left-0': direction === "left",
    'before:right-0': direction === "right",
    'before:left-1/2': direction === "center",
    'before:-translate-x-1/2': direction === "center",
  })

  const bubblePositionClasses = classNames({
    'left-0': direction === "left",
    'right-0': direction === "right",
    'left-1/2': direction === "center",
    'translate-x-[-50%]': direction === "center",
  })

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setShowDropDown(prev => !prev)}
        className={`${props.className && props.className } flex flex-row items-center gap-2 cursor-pointer`}
      >
        {menuButton} {/* Render the menu button */}
        {arrow && <BsChevronDown className={`text-white transition ${showDropDown? 'rotate-180':'rotate-0'}`} />}
      </div>

      {/* bubble */}
      {showDropDown && (
        <div
          className={`bg-black absolute top-full py-5 flex-col border-2 border-gray-800 flex z-50 ${bubblePositionClasses} ${pointerClasses}`}
          style={{
            minWidth: width? parseInt(width) : undefined,
          }}
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
