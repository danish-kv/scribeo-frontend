import React, { useState, useEffect } from 'react';
import { User, Image as ImageIcon, X, Edit3 } from 'lucide-react';
import api from "../../services/api";
import { showToast } from "../../utils/showToast";
import { useSelector } from 'react-redux';

const ProfileManager = ({ profile, fetchProfile }) => {
    console.log('======', profile);
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProfile, setEditProfile] = useState({
    username: profile?.username || '',
    email: profile?.email || '',
    bio: profile?.bio || '',
    profile: null
  });
  const [previewImage, setPreviewImage] = useState(profile?.profile || null);
  const {userID} = useSelector((state) => (state.auth))
  // Update form when profile changes
  useEffect(() => {
    if (profile) {
      setEditProfile({
        username: profile.username || '',
        email: profile.email || '',
        bio: profile.bio || '',
        profile: null
      });
    }
  }, [profile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditProfile(prev => ({...prev, profile: file}));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      // Append all profile fields
      Object.keys(editProfile).forEach((key) => {
        if (editProfile[key] !== null) {
          formData.append(key, editProfile[key]);
        }
      });

      // Make API call to update profile
      await api.patch(`profile/${userID}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      showToast(200, 'Profile updated successfully');
      setIsModalOpen(false);
      fetchProfile(); // Refresh profile data

      // Cleanup preview image
      if (previewImage && previewImage !== profile.profile) {
        URL.revokeObjectURL(previewImage);
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
      showToast(400, 'Failed to update profile');
    }
  };

  // Cleanup preview image URL when component unmounts
  useEffect(() => {
    return () => {
      if (previewImage && previewImage !== profile?.profile) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage, profile]);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="relative h-48 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500">
        {/* Edit Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <Edit3 className="h-5 w-5 text-gray-700" />
        </button>

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-8">
          <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
            {profile?.profile ? (
              <img
                src={profile.profile}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                <User className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-8 pb-8">
        <h2 className="text-2xl font-bold text-gray-900">{profile?.username || 'Username'}</h2>
        <p className="text-gray-600 mt-1">{profile?.email || 'email@example.com'}</p>
        <p className="text-gray-700 mt-4">{profile?.bio || 'No bio provided'}</p>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Edit Profile</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Image Upload */}
                <div className="flex justify-center">
                  <label className="cursor-pointer">
                    <div className="h-32 w-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
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
                      onChange={handleImageChange}
                    />
                    <p className="text-sm text-gray-500 text-center mt-2">
                      Click to upload profile picture
                    </p>
                  </label>
                </div>

                {/* Form Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={editProfile.username}
                    onChange={(e) => setEditProfile(prev => ({...prev, username: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editProfile.email}
                    onChange={(e) => setEditProfile(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={editProfile.bio}
                    onChange={(e) => setEditProfile(prev => ({...prev, bio: e.target.value}))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-black rounded-lg hover:bg-black transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileManager;