import { fetchComments } from "./api";
import { useQuery } from "@tanstack/react-query";
import "./PostDetail.css";

export function PostDetail({ post, deleteMutation, updatePostMutation }) {
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
      <div>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending && <p className="loading">Deleting the post</p>}
        {deleteMutation.isError && <p className="error">Error deleting the post: {deleteMutation.error.toString()}</p>}
        {deleteMutation.isSuccess && <p className="success"> Post was (not) deleted</p>}
      </div>
      <div>
      <button onClick={() => updatePostMutation.mutate(post.id)}>Update title</button>
      {updatePostMutation.isPending && <p className="loading">Updating the post</p>}
      {updatePostMutation.isError && <p className="error">Error updating the post: {updatePostMutation.error.toString()}</p>}
      {updatePostMutation.isSuccess && <p className="success"> Post was (not) updated</p>}
      </div>
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
