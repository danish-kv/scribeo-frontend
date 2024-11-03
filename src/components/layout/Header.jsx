import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const {user} = useSelector((state) => state.auth)
  console.log('user ===', user);
  
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">Scribeo</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
