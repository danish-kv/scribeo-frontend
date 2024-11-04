import React, { useState, useEffect } from "react";
import {
  User,
  Image as ImageIcon,


} from "lucide-react";
import { Link } from "react-router-dom";
import StatsSection from "../components/profile/StatsSection";
import BlogPosts from "../components/profile/BlogPosts";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileHeader from "../components/profile/ProfileHeader";
import api from "../services/api";
import { showToast } from "../utils/showToast";
import useFetchProfile from "../hooks/useFetchProfile";
import useFetchBlogs from "../hooks/useFetchBlogs";
import ProfileManager from "../components/profile/ProfileManager";

const UserProfile = () => {
  // Profile States
  const [isEditing, setIsEditing] = useState(false);
  const { profile, fetchProfile } = useFetchProfile()
  
  
  // Blog Posts States
  const { blogs, fetchBlogs, loading } = useFetchBlogs()
  const [viewMode, setViewMode] = useState("grid");
  

  useEffect(() => {
    fetchProfile();
    fetchBlogs();
  }, []);

  if (loading || !profile) {
    return <div>Loading profile...</div>; 
  }


  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(profile).forEach((key) => {
        formData.append(key, profile[key]);
      });
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsEditing(false);
      fetchProfile();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  
  const handleDeleteBlog = async (blogId) => {
    try {
      const res = await api.delete(`posts/${blogId}/`)
      console.log(res);
      showToast(200, 'Blog deleted successfully...')
      fetchBlogs()
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
          blogs={blogs}
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
