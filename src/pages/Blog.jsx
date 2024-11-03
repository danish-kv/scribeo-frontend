import React, { useState } from "react";
import { BookmarkIcon, TrendingUp, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Sample categories - in a real app, these would come from your backend
  const categories = [
    "All",
    "Technology",
    "Writing",
    "Programming",
    "Design",
    "Business",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  // Sample blog posts data - in a real app, this would come from your API
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2024",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web development, from AI integration to new frameworks...",
      author: {
        name: "Sarah Johnson",
        image: "https://picsum.photos/200/300",
        role: "Senior Developer",
      },
      category: "Technology",
      readTime: "8 min read",
      date: "Mar 15, 2024",
      thumbnail: "https://picsum.photos/200/300",
      likes: 234,
      isFeatured: true,
    },
    {
      id: 2,
      title: "Building Scalable Applications with Modern Architecture",
      excerpt:
        "Learn the best practices for creating scalable, maintainable applications using modern architectural patterns...",
      author: {
        name: "Michael Chen",
        image: "https://picsum.photos/200/300",
        role: "Software Architect",
      },
      category: "Programming",
      readTime: "12 min read",
      date: "Mar 14, 2024",
      thumbnail: "https://picsum.photos/200/300",
      likes: 189,
      isFeatured: true,
    },
    {
      id: 3,
      title: "The Art of Technical Writing",
      excerpt:
        "Master the craft of technical writing and learn how to communicate complex ideas effectively...",
      author: {
        name: "Emily Rodriguez",
        image: "https://picsum.photos/200/300",
        role: "Technical Writer",
      },
      category: "Writing",
      readTime: "6 min read",
      thumbnail: "https://picsum.photos/200/300",
      date: "Mar 13, 2024",
      likes: 156,
    },
    // Add more sample posts as needed
  ];

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

      {/* Categories */}
      <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Posts */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-bold">Featured Stories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts
            .filter((post) => post.isFeatured)
            .map((post) => (
              <Link to={`/blog/${post.id}`}>
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <BookmarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest Stories</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`}>
              <div
                key={post.id}
                className="flex flex-col md:flex-row gap-8 pb-8 border-b last:border-b-0"
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span>·</span>
                      <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                        {post.category}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="md:w-1/4">
                  <img
                    src={post.thumbnail}
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
