import { getSortedPostsData } from "../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <div className="posts">
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
