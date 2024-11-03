import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import MainLayout from "./components/layout/MainLayout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <Router>
      <Toaster reverseOrder={false} />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
