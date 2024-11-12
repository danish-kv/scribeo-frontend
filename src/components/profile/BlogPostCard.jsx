import React from "react";
import { format } from "date-fns";
import { Edit, Eye, Heart, MessageSquare, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ blog, viewMode, onDelete }) => {
  if (!blog) {
    return null;
  }
    const BASE_URL = import.meta.env.VITE_BASE_URL


  return (
    <div
      key={blog.id}
      className={`bg-white rounded-lg shadow overflow-hidden ${
        viewMode === "list" ? "flex" : ""
      }`}
    >
      <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
        <img
          src={`${BASE_URL}${blog.image}`}
          alt={blog.title}
          className={`w-full h-48 object-cover ${
            viewMode === "list" ? "h-full" : ""
          }`}
        />
      </div>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-grow pr-4">
            <h3 className="text-lg font-semibold text-gray-900">
              <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600">
                {blog.title}
              </Link>
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Link to={`/blog/edit/${blog.slug}`}>
              <button
                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all duration-200"
                title="Edit blog post"
              >
                <Edit className="h-4 w-4" />
              </button>
            </Link>
            <button
              onClick={() => onDelete(blog.slug)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
              title="Delete blog post"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-2">{blog.subtitle}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{blog.views}</span>
          </div>
          <div className="flex items-center ml-4">
            <Heart className="h-4 w-4 mr-1" />
            <span>{blog.likes}</span>
          </div>
          <div className="flex items-center ml-4">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{blog.comments}</span>
          </div>
          <div className="ml-auto text-gray-400">
            {format(new Date(blog.created_at), "MMM d, yyyy")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
