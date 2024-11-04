import React, { useState, useEffect } from "react";
import { Upload, X } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import api from "../services/api";
import { showToast } from "../utils/showToast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchCategory from "../hooks/useFetchCategory";
import useFetchBlogDetails from "../hooks/useFetchBlogDetails";
import { useSelector } from "react-redux";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [category, setCategory] = useState("");
  const [updating, setUpdating] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const {user} = useSelector((state) => state.auth)

  const navigate = useNavigate();
  const { slug } = useParams();
  const { categories } = useFetchCategory();

  useEffect(() => {
    if(!user){
      navigate('/login')
      showToast(100, 'Please Login')
      return
    }
  }, [])
  
  // Fetch blog details
  const fetchBlogDetails = async () => {
    try {
      const response = await api.get(`/posts/${slug}/`);
      const blogData = response.data;
      console.log('edti data ===',blogData);
      
      
      setTitle(blogData.title || "");
      setSubtitle(blogData.subtitle || "");
      setContent(blogData.content || "");
      setCategory(blogData.category || "");
      setPreviewImage(blogData.image || null);
      setInitialized(true);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      showToast(error.response?.status || 500, 'Error loading blog');
    }
  };

  useEffect(() => {
    if (slug && !initialized) {
      fetchBlogDetails();
    }
  }, [slug]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("content", content);
      formData.append("category", category);
      
      // Only append image if a new one was selected
      if (coverImage) {
        formData.append("image", coverImage);
      }

      const response = await api.put(`/posts/${slug}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      showToast(200, 'Blog Updated Successfully');
      navigate(`/blog/${response.data.slug}`);
    } catch (error) {
      console.error("Error updating post:", error);
      showToast(error.response?.status || 500, 'Error updating blog');
    } finally {
      setUpdating(false);
    }
  };

  if (!initialized) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center">Loading blog details...</div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {showTips && (
        <div className="relative bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="pr-8">
            <p className="font-semibold text-blue-900">
              Tips for editing your article:
            </p>
            <ul className="list-disc ml-4 mt-2 text-blue-800">
              <li>Review your title and subtitle for clarity</li>
              <li>Update your cover image if needed</li>
              <li>Check your content formatting</li>
              <li>Verify your category selection</li>
            </ul>
          </div>
          <button
            onClick={() => setShowTips(false)}
            className="absolute top-2 right-2 p-2 text-blue-500 hover:text-blue-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="space-y-6">
        <div className="relative">
          {previewImage ? (
            <div className="relative w-full h-72 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={previewImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => {
                  setCoverImage(null);
                  setPreviewImage(null);
                }}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-72 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  Update cover image (recommended: 1600x840)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your article title"
          className="w-full text-4xl font-bold border-none focus:outline-none focus:ring-0 placeholder-gray-300"
        />

        {/* Subtitle */}
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Add a subtitle (optional)"
          className="w-full text-xl text-gray-600 border-none focus:outline-none focus:ring-0 placeholder-gray-300"
        />

        {/* Category Selection */}
        <div className="flex flex-wrap gap-2">
          {categories && categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm ${
                category === cat.id
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Editor */}
        <div className="min-h-[500px] border rounded-lg">
          <div className="p-4 text-gray-500">
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Tell your story..."
              className="h-[400px]"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={updating || !title || !content}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {updating ? "Updating..." : "Update Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;