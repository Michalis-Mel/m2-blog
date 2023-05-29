"use client";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";
import Tilt from "react-parallax-tilt";

export default function ListItem({ post }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <Tilt className="listItem">
      <Link href={`/posts/${id}`}>
        <li>
          <h4>{title}</h4>
          <p>{formattedDate}</p>
        </li>
      </Link>
    </Tilt>
  );
}
