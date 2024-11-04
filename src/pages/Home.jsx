import React from "react";
import { ArrowRight, Pen, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
    <Header />
    <main className="flex-1 bg-gradient-to-br from-white to-gray-50 flex items-center overflow-hidden">
      {/* Main Content */}
      <div className="w-full">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600">
                <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="hidden sm:inline">Writing platform for modern creators</span>
                <span className="sm:hidden">Modern Writing Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Where good ideas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  find you
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600">
                Read and share new perspectives on just about any topic.
                Everyone's welcome. Let your ideas flow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/create">
                  <span className="inline-flex items-center px-6 sm:px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all transform hover:translate-y-[-2px] shadow-sm hover:shadow w-full sm:w-auto justify-center">
                    Start writing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
                <Link to="/blog" className="w-full sm:w-auto">
                  <span className="inline-flex items-center px-6 sm:px-8 py-3 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all justify-center w-full">
                    Explore blogs
                    <BookOpen className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t">
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Pen className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">Active Writers</span>
                    <span className="sm:hidden">Writers</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">10K+</p>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">Monthly Readers</span>
                    <span className="sm:hidden">Readers</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">2M+</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 transform -rotate-3 transition-transform hover:rotate-0">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-50 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
  );
};

export default Home;