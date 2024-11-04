import { useState, useEffect } from "react";
import api from "../services/api";

const useFetchProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await api.get('profile/');
      console.log(res.data);
      
      setProfile(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, loading, error, fetchProfile };
};

export default useFetchProfile;
