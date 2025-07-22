"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 shadow-2xl shadow-black bg-black/80 border-t border-white">
      <div className="flex flex-col md:flex-row items-center justify-center text-center text-white">
        <Link
          href="https://nportifolio.com/"
          className="font-sans text-sm"
          target="_blank"
        >
          Copyright &copy; {currentYear} by Nicolas Alves. All rights reserved.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
