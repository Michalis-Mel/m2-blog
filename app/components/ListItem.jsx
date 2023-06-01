"use client";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";
import Tilt from "react-parallax-tilt";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function ListItem({ post }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <Tilt className="listItem">
      <Link href={`/posts/${id}`}>
        <li>
          <h4>{title}</h4>
          <p>{formattedDate}</p>
          <div className="share_btns">
            <FacebookShareButton url={`https://m2-blog.vercel.app/posts/${id}`}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <LinkedinShareButton url={`https://m2-blog.vercel.app/posts/${id}`}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
          </div>
        </li>
      </Link>
    </Tilt>
  );
}
