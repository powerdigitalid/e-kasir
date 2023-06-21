import React, { useState } from "react";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col w-64 bg-white border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <span className="font-bold text-xl">Sidebar</span>
        </div>
        <ul className="py-4">
          <li>
            <a
              href="/dashboard"
              className="flex items-center px-6 py-2 text-gray-700 border-b hover:bg-gray-100"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-2 text-gray-700 border-b hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Transaksi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-auto transform ${
                  isDropdownOpen ? "rotate-90" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 6.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 3.414V15a1 1 0 11-2 0V3.414L5.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {isDropdownOpen && (
              <ul className="pl-6 mt-2">
                <li>
                  <a
                    href="/jual"
                    className="flex items-center py-2 text-gray-600 hover:text-gray-800"
                  >
                    Jual
                  </a>
                </li>
                <li>
                  <a
                    href="/beli"
                    className="flex items-center py-2 text-gray-600 hover:text-gray-800"
                  >
                    Beli
                  </a>
                </li>
                <li>
                  <a
                    href="/laba"
                    className="flex items-center py-2 text-gray-600 hover:text-gray-800"
                  >
                    Laba
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
