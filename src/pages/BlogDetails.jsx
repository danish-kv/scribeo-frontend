import React from 'react';
import { 
  BookmarkIcon, 
  Heart, 
  MessageCircle, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook,
  Clock
} from 'lucide-react';

const BlogDetails = () => {
  // Sample blog post data - in a real app, this would come from your API
  const post = {
    title: "The Future of Web Development: What's Next in 2024",
    subtitle: "A deep dive into emerging trends and technologies that will shape web development",
    content: `
      Introduction
      The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move further into 2024, several key trends are becoming increasingly important for developers to understand and adopt.

      AI Integration in Web Development
      Artificial Intelligence is no longer just a buzzword in web development. It's becoming an integral part of how we build and optimize websites. From automated testing to intelligent content management systems, AI is revolutionizing the way we approach web development.

      The Rise of Web Components
      Web Components are becoming increasingly popular as they offer a standardized way to create reusable custom elements. This technology allows developers to build encapsulated, reusable components that work across different frameworks and libraries.
    `,
    publishedDate: "Mar 15, 2024",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      image: "https://picsum.photos/200/300",
      role: "Senior Developer",
      bio: "Sarah is a senior developer with over 10 years of experience in web development. She specializes in frontend architecture and modern JavaScript frameworks.",
      followers: "2.5K"
    },
    category: "Technology",
    tags: ["Web Development", "Technology Trends", "Programming"],
    likes: 234,
    comments: 45,
    thumbnail: "https://picsum.photos/200/300"
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <span className="px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
          <span>·</span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{post.subtitle}</h2>
        
        {/* Author info */}
        <div className="flex items-center justify-between py-4 border-t border-b">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{post.author.name}</h3>
                <button className="text-green-600 text-sm font-medium">Follow</button>
              </div>
              <div className="text-sm text-gray-600">
                <span>{post.author.followers} followers</span>
                <span className="mx-2">·</span>
                <span>{post.publishedDate}</span>
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
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        
        <article className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8">
          {post.tags.map(tag => (
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
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
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
              <img
                src={post.author.image}
                alt={post.author.name}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-sm text-gray-600">{post.author.role}</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors">
              Follow
            </button>
          </div>
          <p className="text-gray-600">{post.author.bio}</p>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;