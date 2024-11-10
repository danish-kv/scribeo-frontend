import React from 'react';
import { TrendingUp } from "lucide-react";
import FeaturedPostCard from './FeaturedPostCard';

const FeaturedPosts = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
        <h2 className="text-2xl font-bold">Featured Stories</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <FeaturedPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts