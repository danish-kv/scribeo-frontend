import { useState, useEffect } from "react";
import api from "../services/api";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get(url);
        console.log(res.data);
        
        setDatas(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { datas, loading, error };
};

export default useFetch;
