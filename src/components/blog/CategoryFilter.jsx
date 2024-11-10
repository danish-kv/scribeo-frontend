import React from 'react';
import { PenSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="flex justify-between items-center mb-8">
    <div className="flex items-center">
      <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
        <button
          onClick={() => onCategoryChange("All")}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            activeCategory === "All"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category.name
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>

    <Link
      to="/blog/create"
      className="flex items-center px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
    >
      <PenSquare className="h-5 w-5 mr-2" />
      <span>Write a Story</span>
    </Link>
  </div>
);

export default CategoryFilter