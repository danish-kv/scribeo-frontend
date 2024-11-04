import { BookOpen, Eye, Heart, MessageSquare } from "lucide-react";
import React from "react";

const StatsSection = ({stats}) => {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-blue-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Posts</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {stats.totalPosts}
          </p>
          <p className="mt-1 text-sm text-gray-500">Total published posts</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <Eye className="h-6 w-6 text-green-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Views</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {stats.totalViews}
          </p>
          <p className="mt-1 text-sm text-gray-500">Total post views</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-red-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Likes</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {stats.totalLikes}
          </p>
          <p className="mt-1 text-sm text-gray-500">Total post likes</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <MessageSquare className="h-6 w-6 text-purple-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">
              Comments
            </h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {stats.totalComments}
          </p>
          <p className="mt-1 text-sm text-gray-500">Total comments received</p>
        </div>
      </div>
    </>
  );
};

export default StatsSection;
