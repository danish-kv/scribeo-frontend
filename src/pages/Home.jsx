import React from "react";
import {
  ArrowRight,
  Feather,
  Users,
  Sparkles,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const Home = () => {
  const featuredPosts = [
    {
      title: "The Art of Creative Writing",
      excerpt:
        "Discover the secrets behind crafting compelling narratives that captivate readers...",
      author: "Sarah Johnson",
      readTime: "6 min read",
      category: "Writing",
      authorImage: "/api/placeholder/32/32",
    },
    {
      title: "Building a Personal Brand",
      excerpt:
        "Learn how to establish your unique voice and grow your audience in the digital age...",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "Marketing",
      authorImage: "/api/placeholder/32/32",
    },
    {
      title: "The Future of Technology",
      excerpt:
        "Exploring the latest trends and innovations shaping our digital landscape...",
      author: "Alex Rivera",
      readTime: "5 min read",
      category: "Technology",
      authorImage: "/api/placeholder/32/32",
    },
  ];

  const features = [
    {
      icon: <Feather className="h-6 w-6" />,
      title: "Start Writing",
      description: "Share your ideas with our easy-to-use editor",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Build Community",
      description: "Connect with readers and fellow writers",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Grow Audience",
      description: "Reach millions of engaged readers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Where good ideas find you
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Read and share new perspectives on just about any topic.
              Everyone's welcome. Share your thinking.
            </p>
            <a
              href="/register"
              className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800"
            >
              Start writing
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">
              Trending on Scribeo
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-500">{post.readTime}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                  {post.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why writers choose Scribeo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-black text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Writing CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start your writing journey today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of others and share your stories, ideas, and expertise
            with readers worldwide.
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Create your account
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
