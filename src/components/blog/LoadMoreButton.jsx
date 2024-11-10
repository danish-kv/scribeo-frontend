
import React from 'react';

const LoadMoreButton = ({ onClick, loading }) => (
  <button
    className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={loading}
  >
    {loading ? "Loading..." : "Load more stories"}
  </button>
);

export default LoadMoreButton