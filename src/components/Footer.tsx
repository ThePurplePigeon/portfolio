"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-gray-800 text-white text-center">
      <p className="text-base">
        © {new Date().getFullYear()} Joshua Hughes. All rights reserved.
      </p>

      {/* Socials */}
      <div className="flex justify-center gap-6 mt-3 mb-1">
        <a
          href="https://github.com/ThePurplePigeon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group"
        >
          <FaGithub className="text-3xl text-white group-hover:text-purple-400 transition-all duration-150 drop-shadow" />
        </a>
        <a
          href="https://linkedin.com/in/joshua-r-hughes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group"
        >
          <FaLinkedin className="text-3xl text-white group-hover:text-purple-400 transition-all duration-150 drop-shadow" />
        </a>
        <a
          href="/contact"
          aria-label="Contact"
          className="group"
        >
          <FaEnvelope className="text-3xl text-white group-hover:text-purple-400 transition-all duration-150 drop-shadow" />
        </a>
      </div>

      {/* Nav Links */}
      <div className="mt-3 flex justify-center flex-wrap gap-x-2 text-sm">
        <Link href="/" className="hover:text-purple-400 transition">Home</Link>
        <span className="text-gray-500">|</span>
        <Link href="/about" className="hover:text-purple-400 transition">About</Link>
        <span className="text-gray-500">|</span>
        <Link href="/projects" className="hover:text-purple-400 transition">Projects</Link>
        <span className="text-gray-500">|</span>
        <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
      </div>

      {/* Quote */}
      <p className="mt-3 text-sm text-gray-400 italic max-w-xl mx-auto">
        "The most important step a man can take. It's not the first one, is it? It's the next one." – Brandon Sanderson
      </p>
    </footer>
  );
}
