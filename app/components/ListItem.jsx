import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

export default function ListItem({ post }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li>
      <Link href={`/posts/${id}`}>{title}</Link>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
}
