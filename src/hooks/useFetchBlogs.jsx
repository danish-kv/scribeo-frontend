import { useState, useEffect } from "react";
import api from "../services/api";

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchBlogs = async (url = "posts/", reset = false) => {
    setLoading(true);
    try {
      const res = await api.get(url);
      setBlogs(prev => reset ? res.data.results : [...prev, ...res.data.results]);
      setNextPage(res.data.next);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset everything when component mounts
    setBlogs([]);
    setPage(1);
    fetchBlogs("posts/", true);
  }, []);

  const loadMoreBlogs = () => {
    if (nextPage && !loading) {
      setPage(prev => prev + 1);
      fetchBlogs(nextPage);
    }
  };

  const resetBlogs = () => {
    setBlogs([]);
    setPage(1);
    setNextPage(null);
    fetchBlogs("posts/", true);
  };

  return { 
    blogs, 
    loading, 
    error, 
    fetchBlogs, 
    loadMoreBlogs, 
    resetBlogs, 
    nextPage, 
    page 
  };
};

export default useFetchBlogs;