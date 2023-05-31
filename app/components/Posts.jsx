import { getSortedPostsData } from "../../lib/posts";
import PostsList from "./PostsList";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <div className="posts">
      <h2>Blog</h2>
      <PostsList posts={posts} />
    </div>
  );
}
