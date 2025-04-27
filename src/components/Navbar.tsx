'use client';

import Link from 'next/link';
import { Caveat } from "next/font/google"

const caveat = Caveat({ subsets: ["latin"] })

const Navbar = () => {
  return (
    <nav className="pt-6 px-8 flex justify-center mt-5">
        <div className={`font-Ireca-Regular text-primary font-bold text-lg md:text-xl flex gap-2 md:gap-4 items-center`}>
          <Link href="/" className="hover:underline text-primary">
            Home
          </Link>
          <span>-</span>
          <Link href="/statement" className="hover:underline text-primary">
            Statement
          </Link>
          <span>-</span>
          <Link href="/projects" className="hover:underline text-primary">
            Projects
          </Link>
          <span>-</span>
          <Link href="/about" className="hover:underline text-primary">
            About
          </Link>
          <span>-</span>
          <Link href="/contact" className="hover:underline text-primary">
            Contact
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;