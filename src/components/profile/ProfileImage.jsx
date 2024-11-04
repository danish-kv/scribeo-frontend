import React from "react";
import { User, ImageIcon } from "lucide-react";

const ProfileImage = ({ isEditing, previewImage, onImageChange }) => {
  return (
    <div className="absolute -bottom-16 left-8">
      <div className="relative">
        {isEditing ? (
          <label className="cursor-pointer">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImageIcon className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={onImageChange}
            />
          </label>
        ) : (
          <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <User className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
