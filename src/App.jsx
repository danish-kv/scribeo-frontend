import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
// import PostList from './components/posts/PostList';
// import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <Router>
      <Toaster reverseOrder={false} />{" "}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/posts" element={<PostList />} />
                <Route path="/create-post" element={<CreatePost />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
