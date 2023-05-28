import Image from "next/image";

export default function MyProfilePic() {
  return (
    <div className="row profile-img">
      <Image
        src="/images/michael.jpg"
        width={300}
        height={300}
        alt="Michael Meliopoulos"
        priority={true}
      />
    </div>
  );
}
