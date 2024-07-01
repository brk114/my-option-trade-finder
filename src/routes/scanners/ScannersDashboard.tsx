import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";

export default function ScannersDashboard() {
  const [activeItem, setActiveItem] = useState("CPR");


  const navigation = [
    { name: "CPR", href: "CPR" },
    { name: "Bullish Hammer", href: "bullish-hammer" },
    { name: "Bearish Hammer", href: "bearish-hammer" },
  ];

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="bg-gray-600 px-4 py-6 sm:pt-6 sm:pb-4 pb-5 mx-auto max-w-screen-xl lg:px-6 lg:py-4 rounded-lg shadow-lg">
        <ul className="flex space-x-12 justify-center">
          {
          navigation.map((item : {name: string, href:string}) => (
          <li>
            <Link
              to={item.href}
              onClick={() => handleItemClick(item.href)}
              className={`text-blue-300 ${
                activeItem === item.href && "font-bold text-blue-300 px-5 py-5 shadow-lg"
              }`}
            >
              {item.name}
            </Link>
          </li>))
          }
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
