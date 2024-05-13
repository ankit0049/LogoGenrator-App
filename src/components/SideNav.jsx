import { Image, PencilRuler, Shield, icons } from "lucide-react";
import React from "react";
import { useState } from "react";
function SideNav({ selectedIndex }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const menulist = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menulist.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`flex  items-center  gap-2 p-3 text-lg px-7 text-gray-700 my-2 cursor-pointer hover:bg-blue-300 hover:text-black  font-serif hover:font-medium ${
              activeIndex == index && "bg-blue-300 text-black font-medium"
            }`}
            key={index}
          >
            {" "}
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
