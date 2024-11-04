import React, { useState } from "react";
import {
  BookmarkIcon,
  TrendingUp,
  Clock,
  Search,
  PenSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFetchCategory from "../hooks/useFetchCategory";
import { formatDate } from "../utils/format";

const Blog = () => {
  const { categories } = useFetchCategory();
  const [activeCategory, setActiveCategory] = useState("All");

  const { datas } = useFetch("posts/");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black"
          />
          <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No categories available</p>
            )}
          </div>
        </div>

        {/* Write a Story Button */}
        <Link
          to="/blog/create"
          className="flex items-center px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          <PenSquare className="h-5 w-5 mr-2" />
          <span>Write a Story</span>
        </Link>
      </div>

      {/* Featured Posts Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-bold">Featured Stories</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {datas && datas.filter((post) => post.featured).length > 0 ? (
            datas
              .filter((post) => post.featured)
              .map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {post.user.image ? (
                          <img
                            // src={post.author.image}
                            alt={post.user.username}
                            className="h-10 w-10 rounded-full"
                          />
                        ) : (
                          <User className="w-5 h-5 bg-gray-200 text-gray-600"/>
                        )}
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {post.user.username}
                          </p>
                          <p className="text-sm text-gray-500">
                            {/* {post.author.role} */}
                          </p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-gray-600">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{formatDate(post?.created_at) || "N/A"}</span>

                          <span>·</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.reading_time}
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <BookmarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <p className="text-gray-500">No featured stories available</p>
          )}
        </div>
      </div>

      {/* Latest Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest Stories</h2>
        <div className="space-y-8">
          {datas &&
            datas.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <div className="flex flex-col md:flex-row gap-8 pb-8 border-b last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                    {post.user.image ? (
                          <img
                            // src={post.author.image}
                            alt={post.user.username}
                            className="h-10 w-10 rounded-full"
                          />
                        ) : (
                          <User className="w-5 h-5 text-gray-600"/>
                        )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {post.user.username}
                        </p>
                        <p className="text-sm text-gray-500">
                          {/* {post.username.role} */}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{formatDate(post?.created_at) || "N/A"}</span>{" "}
                        <span>·</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.reading_time}
                        </span>
                        <span>·</span>
                        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          {post.category_data.name}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <BookmarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
          Load more stories
        </button>
      </div>
    </div>
  );
};

export default Blog;
