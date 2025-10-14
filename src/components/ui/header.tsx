import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItems } from "@/components/utils/data";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  // Toggles the sidebar's open/closed state
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div
      className={`absolute top-5 z-50 left-5 ${
        openSidebar && "shadow-lg bg-white rounded-xl"
      } pl-2 py-1 flex gap-2`}
    >
      {openSidebar ? (
        <IoMdClose
          onClick={handleSidebar}
          className="text-3xl text-purple-500"
        />
      ) : (
        <GiHamburgerMenu
          onClick={handleSidebar}
          className="text-3xl text-purple-500"
        />
      )}
      {openSidebar && (
        <ul className="px-3 py-1 flex cursor-pointer items-center">
          {navItems?.map((item, index) => (
            <li className="mx-3 hover:text-purple-500" key={index}>
              {item?.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
