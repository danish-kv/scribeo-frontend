import React from 'react';
import { Clock, BookmarkIcon } from "lucide-react";
import { formatDate } from '../../utils/format'; 

const PostMeta = ({ createdAt, readingTime, category }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4 text-sm text-gray-500">
      <span>{formatDate(createdAt)}</span>
      <span>·</span>
      <span className="flex items-center">
        <Clock className="h-4 w-4 mr-1" />
        {readingTime}
      </span>
      {category && (
        <>
          <span>·</span>
          <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            {category}
          </span>
        </>
      )}
    </div>
    <button className="text-gray-400 hover:text-gray-600">
      <BookmarkIcon className="h-5 w-5" />
    </button>
  </div>
);

export default PostMeta