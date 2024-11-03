import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">Scribeo</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Where words matter.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
              <li><Link to="/features" className="hover:text-gray-900">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/writers" className="hover:text-gray-900">Writers</Link></li>
              <li><Link to="/blog" className="hover:text-gray-900">Blog</Link></li>
              <li><Link to="/discussions" className="hover:text-gray-900">Discussions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/help" className="hover:text-gray-900">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Scribeo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;