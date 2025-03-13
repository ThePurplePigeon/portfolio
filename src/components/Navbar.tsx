"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md h-14 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Joshua Hughes</h1>

        {/*hamburger for mobile screens*/}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/*desktop size menu*/}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-1 rounded transition duration-200 ${
                pathname === item.path
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-md"
                  : "hover:text-gray-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/*mobile size menu*/}
      {isOpen && (
        <div className="md:hidden bg-gray-800 mt-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded transition duration-200 ${
                pathname === item.path
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-md"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
