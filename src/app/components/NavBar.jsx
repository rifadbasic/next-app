import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="w-11/12 mx-auto">
      <nav className="flex justify-center">
        <ul className="flex justify-between items-center w-1/2">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/">
          <li>Home</li>
        </Link>
        </ul>
      </nav>
    </div>
  );
}
