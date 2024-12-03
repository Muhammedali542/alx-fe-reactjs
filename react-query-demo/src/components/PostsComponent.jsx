import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"], // Unique key for this query
    queryFn: fetchData,
    cacheTime: 5 * 60 * 1000, // Keep data in cache for 5 minutes (default is 5 minutes)
    staleTime: 1 * 60 * 1000, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: false, // Disable automatic refetch when window gains focus
    keepPreviousData: true, // Show previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
