import { useState, useEffect } from "react";
import api from "../services/api";

const useFetchBlogDetails = (slug) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await api.get(`posts/${slug}/`);
      console.log(res.data);
      setBlogs(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlogs();
    }
  }, [slug]);

  return { blogs, loading, error, fetchBlogs };
};

export default useFetchBlogDetails;
