import React, { useState, useEffect } from "react";
import BlogPosts from "../components/profile/BlogPosts";
import api from "../services/api";
import { showToast } from "../utils/showToast";
import useFetchProfile from "../hooks/useFetchProfile";
import ProfileManager from "../components/profile/ProfileManager";

const UserProfile = () => {
  const { profile, fetchProfile, loading } = useFetchProfile()
  const [viewMode, setViewMode] = useState("grid");
  

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading || !profile) {
    return <div>Loading profile...</div>; 
  }


  const handleDeleteBlog = async (blogId) => {
    try {
      const res = await api.delete(`posts/${blogId}/`)
      console.log(res);
      showToast(200, 'Blog deleted successfully...')
      fetchProfile()
      } catch (error) {
        console.error("Failed to delete blog:", error);
      }
    
  };
  if(!profile){
    return null
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Section */}
      <ProfileManager 
        profile={profile[0]} 
        fetchProfile={fetchProfile}
      />

      {/* <StatsSection stats={stats} /> */}

      <div className="mt-8">
        <BlogPosts
          blogs={profile.my_blog}
          viewMode={viewMode}
          setViewMode={setViewMode}
          handleDeleteBlog={handleDeleteBlog}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default UserProfile;
