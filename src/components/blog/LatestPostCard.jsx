import React from 'react';
import { Link } from "react-router-dom";
import PostMeta from './PostMeta';
import UserAvatar from './UserAvatar';

const LatestPostCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`}>
    <div className="flex flex-col md:flex-row gap-8 pb-8 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex-1">
        <UserAvatar profile={post.user.profile} username={post.user.username} />
        <h3 className="text-xl font-bold mb-2 hover:text-gray-600">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.subtitle}</p>
        <PostMeta
          createdAt={post.created_at}
          readingTime={post.reading_time}
          category={post.category_data.name}
        />
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
);

export default LatestPostCard;