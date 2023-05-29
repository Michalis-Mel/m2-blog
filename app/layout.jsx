import { Poppins } from "next/font/google";

import "./styles/app.scss";

import Navbar from "./components/Navbar";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "M² Blog",
  description: "My blog page build with next.js 13",
  keywords: ["blog", "app", "next.js 13", "sass", "scss"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
