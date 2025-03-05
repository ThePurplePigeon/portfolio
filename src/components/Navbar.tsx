"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
        <div className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`hover:text-gray-400 ${
                pathname === item.path ? "underline text-gray-300" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
