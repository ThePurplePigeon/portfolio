"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-gray-800 text-white text-center">
      <p>© {new Date().getFullYear()} Joshua Hughes. All rights reserved.</p>

      <div className="flex justify-center space-x-4 mt-2">
        {/* GitHub */}
        <a
          href="https://github.com/ThePurplePigeon"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span
            className="
              inline-block 
              text-3xl 
              text-white 
              fill-current 
              transition-all 
              duration-150
              group-hover:gradient-text 
              group-hover:filter 
              group-hover:drop-shadow-[0_0_10px_#8b5cf6]
            "
          >
            <FaGithub />
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/joshua-r-hughes"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span
            className="
              inline-block 
              text-3xl 
              text-white 
              fill-current 
              transition-all 
              duration-150
              group-hover:gradient-text 
              group-hover:filter 
              group-hover:drop-shadow-[0_0_10px_#8b5cf6]
            "
          >
            <FaLinkedin />
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:joshua@hughesonthenet.com"
          className="group"
        >
          <span
            className="
              inline-block 
              text-3xl 
              text-white 
              fill-current 
              transition-all 
              duration-150
              group-hover:gradient-text 
              group-hover:filter 
              group-hover:drop-shadow-[0_0_10px_#8b5cf6]
            "
          >
            <FaEnvelope />
          </span>
        </a>
      </div>

      <div className="mt-4 space-x-2">
        <Link href="/" className="hover:text-gray-400">Home |</Link>
        <a href="/about" className="hover:text-gray-400">About |</a>
        <a href="/projects" className="hover:text-gray-400">Projects |</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </div>

      <p className="mt-2 text-sm text-gray-400">
        "The most important step a man can take. It"s not the first one, is it? It"s the next one." - Brandon Sanderson
      </p>
    </footer>
  );
}
