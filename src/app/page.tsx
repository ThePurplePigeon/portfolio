"use client";

import { ReactTyped } from 'react-typed'
import Image from 'next/image'
import Link from 'next/link'
import { FaReact, FaPython, FaJava, FaGithub, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { SiQt, SiCplusplus, SiJavascript, SiTypescript, SiUnrealengine, SiUnity } from "react-icons/si";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[55vh] py-8 px-4 bg-gray-900 overflow-hidden">
        {/* Profile image */}
        <Image
          src="/me.jpg"
          alt="Picture of Joshua"
          width={200}
          height={200}
          className="rounded-full border-4 border-purple-400 shadow-lg mb-4"
        />
        <h1 className="text-5xl font-bold mb-2">Hello, I'm Joshua</h1>
        <ReactTyped
          className="mb-3 text-xl text-gray-400"
          strings={[
            "C++ Apologist",
            "Full-Stack Developer",
            "Software Engineer",
            "Aspiring Game Developer"
          ]}
          cursorChar="_"
          typeSpeed={40}
          backSpeed={60}
          backDelay={2000}
          loop
        />
        <a
          href="/projects"
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg mt-4 transition-transform transform duration-150 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]"
        >
          View My Work
        </a>
      </section>

      {/* Quick Stats */}
      <section className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3 py-4 mb-3">
        {/* Language Badges */}
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-purple-300 gap-2 shadow-sm">
          <SiCplusplus className="text-blue-400" /> C++
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-yellow-300 gap-2 shadow-sm">
          <FaPython className="text-yellow-300" /> Python
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-yellow-400 gap-2 shadow-sm">
          <SiJavascript className="text-yellow-400" /> JavaScript
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-300 gap-2 shadow-sm">
          <FaJava className="text-blue-300" /> Java
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 gap-2 shadow-sm">
          <SiTypescript className="text-blue-400" /> TypeScript
        </span>
        {/* Framework Badges */}
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-cyan-300 gap-2 shadow-sm">
          <FaReact className="text-cyan-300" /> React
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-green-400 gap-2 shadow-sm">
          <SiQt className="text-green-400" /> Qt
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-purple-300 gap-2 shadow-sm">
          <SiUnrealengine className="text-purple-300" /> Unreal
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 gap-2 shadow-sm">
          <SiUnity className="text-gray-300" /> Unity
        </span>
        {/* Location/Status */}
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-300 gap-2 shadow-sm">
          <FaMapMarkerAlt className="text-pink-400" /> North Carolina
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-blue-200 gap-2 shadow-sm">
          <FaGraduationCap className="text-blue-400" /> UF '24 BS CS
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-green-400 gap-2 shadow-sm">
          <FaGithub className="text-gray-200" /> Open to Work
        </span>
      </section>

      {/* Currently doing */}
      <section className="max-w-2xl mx-auto text-center mt-4 mb-6">
        <div className="inline-block bg-gray-800/90 rounded-xl px-6 py-4 shadow-md border border-purple-500/30">
          <h3 className="text-lg font-semibold mb-1 text-purple-300">
            Currently Focusing On
          </h3>
          <p className="text-gray-200">
            Learning React and deploying my first portfolio site.<br />
            Next up: CompTIA A+ certification; studying starts July!
          </p>
        </div>
      </section>


      {/*intro with image*/}
      <section className="bg-gray-900 p-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Who am I?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a software developer with a love for <span className="text-purple-400 font-semibold">user-focused design</span> and writing <span className="text-blue-400 font-semibold">clean, maintainable code</span>. Whether building desktop, web, or data-driven projects, I care about code that's both practical and a joy to work with.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Outside of code, I thrive on learning new frameworks, exploring how technology shapes our lives, and collaborating with people who challenge me to be a better man. I believe great software isn't just about what it does, but how it feels to build and use. If you want to talk shop, brainstorm, or just talk about new tech, I'm always up for a conversation.
          </p>

          <a
            href="/about"
            className="
              inline-block
              px-6
              py-2
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              rounded-full
              text-white
              font-semibold
              shadow-lg
              mt-2
              transition-transform
              transform
              duration-150
              hover:scale-105
              hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]
            "
          >
            Learn More About Me
          </a>
        </div>
      </section>



      {/* Featured Projects */}
      <section className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Project Card */}
          {[
            {
              title: "Prettier-er",
              tagline: "Customizable VS Code formatter",
              desc: "A VS Code extension enhancing Prettier with custom preferences and code readability metrics.",
              tech: ["JavaScript", "TypeScript", "VS Code Ext. API"],
              link: "/projects/prettier-er",
              img: "/prettier-er.png"
            },
            {
              title: "Tasker",
              tagline: "Academic To-Do Manager",
              desc: "Qt-based task manager for students, with .ics calendar import and metadata-driven task lists.",
              tech: ["C++", "Qt", "Visual Studio"],
              link: "/projects/tasker",
              img: "/tasker.png"
            },
            {
              title: "SCDB Trends",
              tagline: "Supreme Court Data Visualization",
              desc: "Python/SQL web app for querying and visualizing Supreme Court Database trends interactively.",
              tech: ["Go", "Python", "SQL", "HTML", "JavaScript"],
              link: "/projects/scdb-database-trends",
              img: "/scdb_home.png"
            },
          ].map((proj) => (
            <div key={proj.title} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition group flex flex-col items-start">
              {/* Optional: Project image/logo */}
              {proj.img && (
                <Image
                  src={proj.img}
                  alt={`${proj.title} logo`}
                  width={56}
                  height={56}
                  className="mb-2 rounded shadow-lg object-contain"
                />
              )}
              <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-400 transition">{proj.title}</h3>
              <p className="text-sm italic text-gray-400 mb-2">{proj.tagline}</p>
              <p className="text-gray-300 text-sm flex-1">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map((t) => (
                  <span key={t} className="bg-gray-700 text-xs px-2 py-1 rounded text-purple-300">{t}</span>
                ))}
              </div>
              <Link
                href={proj.link}
                className="inline-block mt-3 text-blue-400 hover:underline font-semibold"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transition-transform transform duration-150 hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </section>




      {/*contact cta*/}
      <section className="bg-gray-900 p-6 text-center border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-2">Want to chat?</h2>
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transition-transform transform duration-150 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]"
        >
          Let's Talk
        </a>
      </section>


    </main>
  );
}
