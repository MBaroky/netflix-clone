// Navbar.tsx
import React from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import NavBarBg from "./NavBarBg";

const navList = [
  { label: "Home" },
  { label: "Series" },
  { label: "Films" },
  { label: "New & Popular" },
  { label: "My List" },
  { label: "Browse by Languages" },
];

function Navbar() {
  return (
    <nav className='w-full fixed z-40 isolate top-0'>
      <div
        className='
            px-4
            md:px-16
            py-6
            flex
            items-center
            justify-between
            transition
            duration-500
        '>
        <img
          src='/images/logo.png'
          alt='Logo'
          className='h-4 lg:h-7'
        />

        {/* // Desktop Menu */}
        <div
          className='
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
            '>
          {navList?.map((item, index) => (
            <NavbarItem
              key={index}
              label={item.label}
              className='hover:text-gray-300'
            />
          ))}
        </div>

        {/* // Mobile Menu */}
        <MobileMenu data={navList} />

        {/* // Right Menu */}
        <div
          className='
                flex
                flex-row
                ml-auto
                gap-7
                items-center
                justify-end
            '>
          {/* // Search */}
          <div
            className='
                text-gray-200
                hover:text-gray-300
                cursor-pointer
                transition'>
            <BsSearch size={20} />
          </div>

          {/* // Notification */}
          <div
            className='
                text-gray-200
                hover:text-gray-300
                cursor-pointer
                transition'>
            <BsBell size={20} />
          </div>

          {/* // Account Menu */}
          <AccountMenu />
        </div>
      </div>
      <NavBarBg />
    </nav>
  );
}

export default Navbar;
