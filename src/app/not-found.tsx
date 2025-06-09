"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-center max-w-lg w-full">
        <h1 className="text-6xl font-bold text-purple-400 mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6 text-center">
          Sorry, the page you're looking for doesn't exist or has moved.<br/>
          If you think this is a mistake, you can <a href="mailto:joshua@hughesonthenet.com" className="underline text-purple-400 hover:text-purple-300">email me</a>.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)] transition"
        >
          <FaArrowLeft className="mr-2" /> Go Home
        </Link>
      </div>
    </main>
  );
}
