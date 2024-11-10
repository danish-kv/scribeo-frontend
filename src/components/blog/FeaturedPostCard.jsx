import React from 'react';
import { Link } from "react-router-dom";

const FeaturedPostCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`}>
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <UserAvatar profile={post?.user?.profile} username={post.user.username} />
        <h3 className="text-xl font-bold mb-2 hover:text-gray-600">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.subtitle}</p>
        <PostMeta createdAt={post.created_at} readingTime={post.reading_time} />
      </div>
    </div>
  </Link>
);


export default FeaturedPostCard