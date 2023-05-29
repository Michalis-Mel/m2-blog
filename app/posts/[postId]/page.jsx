import getFormattedDate from "../../../lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post?.title,
  };
}

export default async function Post({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="post">
      <div className="row">
        <h1>{title}</h1>
        <h4>{pubDate}</h4>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <Link href="/" className="back">
          ← Back
        </Link>
      </div>
    </main>
  );
}
