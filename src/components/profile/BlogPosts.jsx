import React from "react";
import { Link } from "react-router-dom";
import { Grid, List, BookOpen } from "lucide-react";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = ({
  blogs,
  viewMode,
  setViewMode,
  handleDeleteBlog,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your blog posts...</p>
      </div>
    );
  }

  if (!blogs) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <BookOpen className="h-12 w-12 text-gray-400 mx-auto" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          No blog posts yet
        </h3>
        <p className="mt-2 text-gray-600">
          Start writing your first blog post today!
        </p>
        <Link
          to="/blog/create/"
          className="mt-6 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Create New Post
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Blog Posts</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <List className="h-5 w-5" />
          </button>
          <Link
            to="/blog/create"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Post
          </Link>
        </div>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
        }
      >
        {blogs && blogs.my_blogs.map((blog) => (
          <BlogPostCard
            key={blog.id}
            blog={blog}
            viewMode={viewMode}
            onDelete={handleDeleteBlog}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPosts;
