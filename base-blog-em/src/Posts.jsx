import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryclient = useQueryClient();

  useEffect(() => {
    if(currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryclient.prefetchQuery({ 
        queryKey: "posts", nextPage,
        queryFn: () => fetchPosts(nextPage),
      });
    }
  }, [currentPage, queryclient]);

  // replace with useQuery
  const {data, isError, isLoading} = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
    staleTime: 2000,
  });

  if(isLoading) { 
    return <h3>Loading</h3>
  }

  if(isError) {
    return <h3> Oops, something went wrong</h3>
  }
  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled={currentPage <= 1} onClick={() => {setCurrentPage(previousValue  => previousValue - 1)}}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentPage >= maxPostPage} onClick={() => {setCurrentPage(previousValue => previousValue + 1)}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
