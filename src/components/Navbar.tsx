import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
