import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronDown, LogOut, User } from "lucide-react";
import { LogoutThunk } from "../../redux/thunk/authThunk";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">Scribeo</span>
            </Link>
          </div>

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/blogs" 
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
            >
              <BookOpen className="h-4 w-4" />
              <span>Blogs</span>
            </Link>
            <Link 
              to="/create" 
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
            >
              <PenSquare className="h-4 w-4" />
              <span>Write</span>
            </Link>
          </div> */}

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {profile ? (
                      <img
                        src={`${BASE_URL}${profile}`}
                        alt={user}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <span className="text-gray-700 font-medium hidden md:block">
                    {user}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border">
                     <Link
                      to="/profile"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={() => dispatch(LogoutThunk())}
                      className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;