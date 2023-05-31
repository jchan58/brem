import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="white">
        <div className="flex px-4 sm:px-6">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                   className="h-16 w-16"
                  src="https://pbs.twimg.com/profile_images/1158476160210210817/5L23zHvW_400x400.jpg"
                  alt="UWP"
                />
              </Link>
            </div>
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-2 text-lg font-medium">
                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white text-gray-300 px-3 py-2 rounded-md "
                >
                  Home
                </Link>
                <Link
                  to="/game"
                  className="black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                >
                  Projects
                </Link>
                <Link
                  to="/"
                  className="black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                >
                  Team
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center">
          </div>
        </div>
        <div className="h-2 bg-gray-900"></div>
      </nav>
    </div>
  );
}

export default NavBar;
