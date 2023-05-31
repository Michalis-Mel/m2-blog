"use client";
import ListItem from "./ListItem";
import { useState } from "react";

export default function PostsList({ posts }) {
  const [textInput, setTextInput] = useState("");
  let searchedPosts = [];
  if (textInput) {
    searchedPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(textInput)
    );
  } else {
    searchedPosts = posts;
  }

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div className="post-list">
      <form className="post_search">
        <input
          onChange={inputHandler}
          value={textInput}
          type="text"
          placeholder="Search for a post..."
          autoComplete="off"
        />
      </form>
      {searchedPosts.length ? (
        <ul>
          {searchedPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <span>No posts found!</span>
      )}
    </div>
  );
}
