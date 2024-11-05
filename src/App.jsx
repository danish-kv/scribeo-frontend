import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import MainLayout from "./components/layout/MainLayout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/Profile";
import EditBlog from "./pages/EditBlog";
import AuthProtection from "./route/AuthProtection";

function App() {
  return (
    <Router>
      <Toaster reverseOrder={false} />
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/login"
          element={<AuthProtection element={<Login />} redirectTo={"/"} />}
        />
        <Route
          path="/register"
          element={<AuthProtection element={<Register />} redirectTo={"/"} />}
        />

        {/* Main Layout Route */}
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/blog/create" element={<CreateBlog />} />
          <Route path="/blog/edit/:slug" element={<EditBlog />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
