import React from "react";
import LatestPostCard from "./LatestPostCard";

const LatestPosts = ({ posts }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Latest Stories</h2>
    <div className="space-y-8">
      {posts.length > 0 ? (
        posts.map((post) => <LatestPostCard key={post.id} post={post} />)
      ) : (
        <p className="text-gray-500">No stories found matching your criteria</p>
      )}
    </div>
  </div>
);
export default LatestPosts;
