import { useEffect, useState } from "react";

const useFetchPosts = (limit, category) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = `/api/posts`;

        if (limit || category) {
          url += "?";
        }

        if (limit) {
          url += `&limit=${limit}`;
        }
        if (category) {
          url += `&category=${category}`;
        }

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Error fetching posts");
        }

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchPosts;
