import { Inter } from "next/font/google";
import "./styles/app.scss";

import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M² Blog",
  description: "My blog page build with next.js 13",
  keywords: ["blog", "app", "next.js 13", "sass", "scss"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
