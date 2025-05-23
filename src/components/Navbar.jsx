import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logo (2).png";
import { Menu, X } from "lucide-react";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-0 sticky w-full h-[50px] z-[100] shadow-md  bg-transparent  text-white">
      <nav className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/">
          <img height="60" width="60" src={Logo} alt="Logo" className="h-14" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 oswald1">
          {["Home", "About", "Classes", "Trainers", "Pricing", "Contact"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="text-white  hover:text-yellow-500 transition duration-300"
                >
                  {item}
                </NavLink>

              </li>
            )
          )}
        </ul>

        {/* Login/Signup/Logout */}
        <div className="hidden lg:flex gap-4">
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <button className="px-3 py-2 border border-white rounded-sm">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="px-3 py-2   rounded-sm border border-white">
                  Sign Up
                </button>
              </NavLink>
            </>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="px-5 py-2 border border-yellow500  rounded-md hover:bg-yellow500  hover:text-white transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="lg:hidden">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] text-white p-6 flex flex-col items-center gap-6 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleNavbar} className="self-end">
          <X size={28} />
        </button>

        {["Home", "About", "Classes", "Trainers", "Pricing", "Contact"].map(
          (item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="text-xl oswald2 hover:text-yellow-400 transition duration-300"
              onClick={toggleNavbar}
            >
              {item}
            </NavLink>
          )
        )}

        {/* Mobile Login/Signup/Logout */}
        {!isLoggedIn ? (
          <>
            <NavLink to="/login">
              <button
                className="w-full px-5 py-2 border border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
                onClick={toggleNavbar}
              >
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button
                className="w-full px-5 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition"
                onClick={toggleNavbar}
              >
                Sign Up
              </button>
            </NavLink>
          </>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
              toggleNavbar();
            }}
            className="w-full px-5 py-2 border border-yellow500  rounded-md hover:bg-yellow500  hover:text-white transition"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
