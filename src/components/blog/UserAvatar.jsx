import React from 'react';

const UserAvatar = ({ profile, username }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        {profile ? (
          <img
            src={profile}
            alt={`${username}'s avatar`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">
              {username?.charAt(0)?.toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <span className="text-sm text-gray-600">{username}</span>
    </div>
  );
};

export default UserAvatar;