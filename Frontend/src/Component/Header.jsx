import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoClose,
  IoSearch,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-black w-full h-12 flex items-center relative px-4 lg:px-[135px]">
        <div className="text-white hidden sm:flex items-center gap-2 justify-center w-full">
          <p className="lg:text-sm xl:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <span className="font-semibold text-sm underline cursor-pointer">
            Shop Now
          </span>
        </div>
        <div className="absolute right-4 lg:pr-[120px]">
          <select name="language" className="bg-black text-white border-b w-20">
            <option value="English">English</option>
            <option value="Spain">Spain</option>
            <option value="Nepali">Nepali</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full h-16 flex justify-between items-center gap-12 px-4 lg:px-[135px] xl:gap-32">
        <div className="font-bold text-2xl">Exclusive</div>

        {/* Hamburger/Menu Toggle */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer text-2xl lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        {/* Menu for Large Screens */}
        <div className="hidden lg:flex lg:items-center lg:justify-center w-full">
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
            <li className="cursor-pointer hover:text-gray-500">About</li>
            <li className="cursor-pointer hover:text-gray-500">Sign Up</li>
          </ul>
        </div>

        {/* Search Input and Icons */}
        <div className="hidden lg:flex relative items-center justify-center gap-4 ">
          <div className="relative">
            <input
              type="text"
              className="border px-4 py-2 border-gray-300 h-[40px] w-[250px] rounded"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <IoSearch className="absolute top-[10px] right-2 text-xl" />
          </div>
          <div className="flex items-center gap-4">
            <IoHeartOutline className="text-2xl" title="Wishlist" />
            <IoCartOutline className="text-2xl" title="Cart" />
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-white z-10 lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Sign Up</li>
            {/* Search Input in Small Screens */}
            <li>
              <div className="relative">
                <input
                  type="text"
                  className="border px-4 py-2 border-gray-300 h-[40px] w-[250px] rounded"
                  placeholder="What are you looking for?"
                  aria-label="Search"
                />
                <IoSearch className="absolute top-[10px] right-2 text-xl" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <IoHeartOutline className="text-2xl" />
                <IoCartOutline className="text-2xl" />
              </div>
            </li>
          </ul>
        </div>
      )}

      <hr className="bg-gray-400 border" />
    </div>
  );
}

export default Header;
