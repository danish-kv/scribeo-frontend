import React, { useState, useMemo } from "react";
import useFetchCategory from "../hooks/useFetchCategory";
import useFetchBlogs from "../hooks/useFetchBlogs";
import SearchBar from "../components/blog/SearchBar";
import CategoryFilter from "../components/blog/CategoryFilter";
import FeaturedPosts from "../components/blog/FeaturedPosts";
import LatestPosts from "../components/blog/LatestPosts";
import LoadMoreButton from "../components/blog/LoadMoreButton";

const Blog = () => {
  const { categories } = useFetchCategory();
  const { blogs, loadMoreBlogs, nextPage, loading, resetBlogs } =
    useFetchBlogs();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    resetBlogs();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    resetBlogs();
  };

  const filteredPosts = useMemo(() => {
    if (!blogs) return [];

    return blogs.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || post.category_data.name === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, activeCategory]);

  const featuredPosts = useMemo(
    () => filteredPosts.filter((post) => post.featured),
    [filteredPosts]
  );

  const latestPosts = useMemo(
    () => filteredPosts.filter((post) => !post.featured),
    [filteredPosts]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <FeaturedPosts posts={featuredPosts} />
      <LatestPosts posts={latestPosts} />

      {nextPage && !loading && filteredPosts.length > 0 && (
        <div className="mt-12 text-center">
          <LoadMoreButton onClick={loadMoreBlogs} loading={loading} />
        </div>
      )}

      {loading && (
        <div className="mt-12 text-center">
          <p className="text-gray-500">Loading stories...</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
