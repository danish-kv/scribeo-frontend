import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <AlertCircle className="h-24 w-24 text-gray-400 animate-pulse" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for seems to have wandered off. Perhaps it's
          gathering inspiration for its next story.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Blog
          </Link>
        </div>

        {/* Footer Message */}
        <p className="mt-8 text-sm text-gray-500">
          If you believe this is a mistake, please{' '}
          <Link to="/contact" className="text-black hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;