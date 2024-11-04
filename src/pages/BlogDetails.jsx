import React from "react";
import {
  BookmarkIcon,
  Heart,
  MessageCircle,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Clock,
  User,
} from "lucide-react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import QuillContent from "../components/blog/QuillContent";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { slug } = useParams();
  const { datas, error, loading } = useFetch(`posts/${slug}/`);

  if (!datas) {
    return "Loadnig";
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <span className="px-2 py-1 bg-gray-100 rounded-full">
            {datas.category_data.name}
          </span>
          <span>·</span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {datas.reading_time}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{datas.title}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{datas.subtitle}</h2>

        {/* Author info */}
        <div className="flex items-center justify-between py-4 border-t border-b">
          <div className="flex items-center space-x-3">
            {datas.user.profile ? (
              <img
                src={datas.user.profile}
                alt={datas.user.username}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <User className="w-8 h-8 text-gray-600" />
            )}
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{datas.user.username}</h3>
                <button className="text-green-600 text-sm font-medium">
                  Follow
                </button>
              </div>
              <div className="text-sm text-gray-600">
                {/* <span>{datas.user.followers} followers</span> */}
                <span className="mx-2">·</span>
                <span>{datas.published_at}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Twitter className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Linkedin className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Facebook className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <img
          src={datas.image}
          alt={datas.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <article className="prose prose-lg max-w-none">
          <div
            className="mt-1 p-1 text-gray-800"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(datas.content),
            }}
          />
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8">
          {datas.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Engagement bar */}
        <div className="flex items-center justify-between py-4 border-t border-b">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Heart className="h-5 w-5" />
              <span>{datas.likes_count}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <MessageCircle className="h-5 w-5" />
              <span>{datas.comments}</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <BookmarkIcon className="h-5 w-5" />
            <span>Save</span>
          </button>
        </div>

        {/* Author bio */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {datas.user.profile ? (
                <img
                  src={datas.user.profile}
                  alt={datas.user.username}
                  className="h-16 w-16 rounded-full"
                />
              ) : (
                <User />
              )}
              <div>
                <h3 className="font-medium">{datas.user.username}</h3>
                {/* <p className="text-sm text-gray-600">{datas.user.role}</p> */}
              </div>
            </div>
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors">
              Follow
            </button>
          </div>
          {/* <p className="text-gray-600">{datas.user.bio}</p> */}
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
