import React from "react";

// Components
import NavbarItem from "./NavbarItem";
import DropDownMenu from "./DropDownMenu";

type MobileMenuProps = {
  // Define any props you need for the MobileMenu component
  data: { label: string }[] | undefined;
};

const MobileButton = () => {
  return (
      <p className='text-white text-sm'>Browse</p>
  );
};

const MobileMenu = ({ data }: MobileMenuProps) => {
  // Check if the menu should be visible
  // If not, return null to avoid rendering
  return (
    <>
      <DropDownMenu
        arrow
        menuButton={<MobileButton />}
        width='200'
        className='
          lg:hidden
          flex
          flex-row
          items-center
          gap-2
          ml-8
          cursor-pointer
          relative
          '>
        {data?.map((item, index) => (
          <NavbarItem
            label={item.label}
            key={index}
            className='text-white hover:underline cursor-pointer px-3'
          />
        ))}
      </DropDownMenu>
    </>
  );
};

export default MobileMenu;
