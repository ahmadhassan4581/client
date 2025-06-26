import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import logos from "/logo.png"; // Make sure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      // Real search functionality to be implemented here
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-700 text-white text-xs text-center py-2">
        Avail free shipping National Worldwide for orders above PRK 3000!
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between px-4 md:px-12 py-4 relative">
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logos} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4 text-xl ml-auto">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border px-3 py-1 text-sm rounded-full pr-8"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  <FaSearch size={14} />
                </button>
              </div>
            )}
            <FaSearch
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer hover:text-black"
            />
            <Link to="/login">
              <FaUser className="cursor-pointer hover:text-black" />
            </Link>
            <Link to="/admin">
              <FaShoppingBag className="cursor-pointer hover:text-black" />
            </Link>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex justify-center gap-10 text-sm font-medium pb-3">
          <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link to="/women" className="hover:text-gray-600">Women</Link></li>
          <li><Link to="/stitched" className="hover:text-gray-600">Stitched</Link></li>
          <li><Link to="/unstitched" className="hover:text-gray-600">Unstitched</Link></li>
          <li><Link to="/topsales" className="hover:text-gray-600">Top Sales</Link></li>
          <li><Link to="/about" className="hover:text-gray-600">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gray-600">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col items-center gap-4 pb-6 md:hidden text-base font-semibold">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/women" onClick={() => setIsOpen(false)}>Women</Link></li>
            <li><Link to="/stitched" onClick={() => setIsOpen(false)}>Stitched</Link></li>
            <li><Link to="/unstitched" onClick={() => setIsOpen(false)}>Unstitched</Link></li>
            <li><Link to="/topsales" onClick={() => setIsOpen(false)}>Top Sales</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>

            {/* Mobile Icons */}
            <div className="flex gap-4 items-center mt-2">
              {showSearch && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border px-3 py-1 text-sm rounded-full pr-8"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                  >
                    <FaSearch size={14} />
                  </button>
                </div>
              )}
              <FaSearch
                onClick={() => setShowSearch(!showSearch)}
                className="text-xl cursor-pointer"
              />
              <Link to="/login">
                <FaUser className="text-xl cursor-pointer" />
              </Link>
              <Link to="/admin">
                <FaShoppingBag className="text-xl cursor-pointer" />
              </Link>
            </div>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
