import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    <main className="home">
      <div className="row">
        <div className="welcome">
          <MyProfilePic />
          <h1>Hello and Welcome!</h1>
          <p>
            My name is Michael Meliopoulos and this is my personal blog. Get
            ready to explore a world of ideas, inspiration, and insights. Join
            me on this exciting journey as I share my thoughts and experiences
            on various topics. Whether it&apos;s technology, travel, or personal
            growth, there&apos;s something for everyone here. Thank you for
            visiting, and I hope you enjoy your time on my blog.
          </p>
        </div>
        <Posts />
      </div>
    </main>
  );
}
