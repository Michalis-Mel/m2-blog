import { Oswald } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import logoImg from "../../public/images/logo-small.png";

const oswald = Oswald({
  weight: "500",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav>
      <div className="row">
        <Link href="/" className={`logo ${oswald.className}`}>
          <Image src={logoImg} width={80} height={80} alt="logo" />
          M² Blog
        </Link>
        <div className="nav-links">
          <Link href="https://github.com/Michalis-Mel" target="_blank">
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mixalis-meliopoulos/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/mixalis.meliopoulos/"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/mixalis__meliopoulos/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
}
