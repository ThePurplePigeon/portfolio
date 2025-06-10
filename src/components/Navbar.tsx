"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md h-14 p-4 z-50"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
        >
          <Image
            src="/favicon.ico"
            alt="JH Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded"
            style={{ boxShadow: "0 2px 8px 0 rgba(91, 33, 182, 0.11)" }}
            priority
          />
          Joshua Hughes
        </Link>


        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className="hidden md:flex space-x-4" role="menubar">
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <Link
                href={item.path}
                role="menuitem"
                className={`
                  px-3 py-1 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                  ${pathname === item.path
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-md"
                    : "hover:text-gray-400"}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul
          id="mobile-menu"
          ref={menuRef}
          role="menu"
          className="md:hidden absolute top-full left-0 w-full bg-gray-800 mt-0 space-y-2 py-2 shadow-lg"
        >
          {navItems.map((item) => (
            <li key={item.path} role="none">
              <Link
                href={item.path}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-2 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
                  ${pathname === item.path
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-md"
                    : "hover:bg-gray-700"}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
