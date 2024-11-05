import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { SignupThunk } from "../../redux/thunk/authThunk";
import { showToast } from "../../utils/showToast";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.username.trim()) {
      setError("Username can't be empty.");
      return;
    } else if (!formData.password.trim()) {
      setError("Password can't be empty.");
      return;
    } else if (!formData.email.trim()) {
      setError("Email can't be empty.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await dispatch(SignupThunk(formData));
      console.log("ress ====", res);
      if (res.payload.status === 400) {
        const errorEmail = res.payload.response.data.email[0];
        const errorPassword = res.payload.response.data.username[0];
        if (errorEmail) {
          showToast(400, errorEmail);
          return;
        } else if (errorPassword) {
          showToast(400, errorPassword);
          return;
        }
      }


      navigate("/login");
    } catch (error) {
      console.log("error catch ====", error);

      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-lg p-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-black rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Join Scribeo
          </h2>
          <p className="text-gray-500">
            Create your account and start blogging
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Choose a username"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm 
                     text-sm font-medium text-white bg-black hover:bg-black 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Create Account"
            )}
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-black hover:text-black"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
