"use client";

import { useState } from "react";

const SearchPosts = ({ posts }) => {
  const [textInput, setTextInput] = useState("");
  const [searchedPosts, setSearchedPosts] = useState([{}]);

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput) {
      {
        posts.map((post) => {
          if (post.title.toLowerCase().includes(textInput)) {
            setSearchedPosts([...searchedPosts, post]);
          }
        });
      }

      setTextInput("");
    }
  };

  return (
    <form className="post_search" onSubmit={submitSearch}>
      <input
        onChange={inputHandler}
        value={textInput}
        type="text"
        placeholder="Search for..."
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchPosts;
