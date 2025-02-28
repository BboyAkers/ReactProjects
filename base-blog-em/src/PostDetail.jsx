import { fetchComments } from "./api";
import { useQuery } from "@tanstack/react-query";
import "./PostDetail.css";

export function PostDetail({ post }) {
  // replace with useQuery
  const {data, isLoading, isError} = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
  });

  if(isLoading) {
    return <h3>Loading comments</h3>
  }

  if(isError) {
    return <h3>Sorry, something went wrong</h3>
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
