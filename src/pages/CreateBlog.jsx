import React, { useState } from "react";
import { Upload, X, Image as ImageIcon, Tag } from "lucide-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import api from "../services/api";
import { showToast } from "../utils/showToast";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFetchCategory from "../hooks/useFetchCategory";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [category, setCategory] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const navigate = useNavigate()

  // Sample categories - in a real app, these would come from your backend
  const { categories } = useFetchCategory()

  // Quill modules configuration
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
      setCoverImage(file); // Store the actual file
      // If you want to show a preview, you can create a URL for the image
      const imageUrl = URL.createObjectURL(file);
      // Handle the preview (e.g., setting another state for the preview URL)
      setPreviewImage(imageUrl);
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag && !tags.includes(currentTag) && tags.length < 5) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePublish = async () => {
    setPublishing(true);
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("subtitle", subtitle);
        formData.append("content", content);
        formData.append("image", coverImage); 
        formData.append("category", category);
        tags.forEach(tag => {
            formData.append("tags", tag); 
        });

        console.log(formData);
        
        const res = await api.post("/posts/", formData, {
            headers: {
                "Content-Type": "multipart/form-data" 
            }
        });
        console.log(res);
        showToast(200, 'Blog Created')
        navigate('/blog')
        

      } catch (error) {
        console.error("Error publishing post:", error);
    } finally {
        setPublishing(false);
    }
};

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {showTips && (
        <div className="relative bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="pr-8">
            <p className="font-semibold text-blue-900">
              Tips for a great article:
            </p>
            <ul className="list-disc ml-4 mt-2 text-blue-800">
              <li>Start with a compelling title that captures attention</li>
              <li>Include a high-quality cover image</li>
              <li>Break your content into clear sections</li>
              <li>Add relevant tags to help readers find your content</li>
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
        {/* Cover Image Upload */}
        <div className="relative">
          {coverImage ? (
            <div className="relative w-full h-72 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={previewImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setCoverImage(null)}
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
                  High-quality cover image (recommended: 1600x840)
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

        {/* Tags */}
        {/* <div>
          <h3 className="text-lg font-medium mb-2">Add tags</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
          <form onSubmit={handleAddTag} className="flex items-center">
            <Tag className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              placeholder="Add up to 5 tags..."
              className="flex-1 border-none focus:outline-none focus:ring-0"
              disabled={tags.length >= 5}
            />
            <button
              type="submit"
              disabled={!currentTag || tags.length >= 5}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400"
            >
              Add
            </button>
          </form>
        </div> */}

        <div className="flex items-center justify-between pt-6 border-t">
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900">
            {/* Save as draft */}
          </button>
          <button
            onClick={handlePublish}
            disabled={publishing || !title || !content}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {publishing ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
