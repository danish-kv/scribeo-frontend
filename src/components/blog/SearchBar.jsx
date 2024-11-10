import React from 'react';
import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, onSearchChange }) => (
  <div className="mb-8">
    <div className="relative">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={onSearchChange}
        className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black"
      />
      <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
    </div>
  </div>
);

export default SearchBar