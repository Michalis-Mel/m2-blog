import Image from "next/image";

export default function MyProfilePic() {
  return (
    <div className="row profile-img">
      <div className="box">
        <span></span>
        <Image
          src="/images/michael.jpg"
          width={250}
          height={250}
          alt="Michael Meliopoulos"
          priority={true}
        />
      </div>
    </div>
  );
}
