"use client";

import { ReactTyped } from 'react-typed'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="relative flex flex-col items-center justify-center h-[80vh] p-6 overflow-hidden">
        {/*background animation*/}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 animate-infinity">
            <svg
              width="400"
              height="400"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M300,50C370,50 430,110 430,180C430,250 370,310 300,310C230,310 170,250 170,180C170,110 230,50 300,50Z"
                  fill="url(#paint0_linear)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f"
                  x="0"
                  y="0"
                  width="600"
                  height="600"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="170"
                  y1="50"
                  x2="430"
                  y2="310"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#3b82f6">
                    <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#3b82f6" dur="10s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="1" stopColor="#8b5cf6">
                    <animate attributeName="stop-color" values="#8b5cf6;#3b82f6;#8b5cf6" dur="10s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/*hero*/}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Hello, I'm Joshua</h1>
          <ReactTyped
            className="mt-4 text-xl text-gray-400"
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
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transition-transform transform duration-150 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/*intro with image*/}
      <section className="bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:gap-8">
          {/* Image Column */}
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <Image
              src="/me.jpg"
              alt="Picture of Joshua"
              width={192}
              height={192}
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="max-w-2xl mx-auto text-lg">
              I'm a passionate software developer focused on user-centered design
              and writing maintainable, extensible code. Check out my About page for
              more info!
            </p>
            <div className="mt-4">
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
          </div>
        </div>
      </section>


      {/* Featured Projects */}
      <section className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Prettier-er */}
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Prettier-er</h3>
            <p className="text-gray-400 text-sm">
              A VS-Code extension enhancing Prettier with custom user preferences and readability analysis.
            </p>
            <Link
              href="/projects/prettier-er"
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View Project →
            </Link>
          </div>

          {/* Tasker */}
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Tasker</h3>
            <p className="text-gray-400 text-sm">
              A QT-based task management application tailored for students, featuring calendar integration.
            </p>
            <Link
              href="/projects/tasker"
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View Project →
            </Link>
          </div>

          {/* SCDB Database & Trends */}
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">SCDB Database & Trends</h3>
            <p className="text-gray-400 text-sm">
              A web app using Python and SQL to visualize complex trends from SCDB data through interactive queries.
            </p>
            <Link
              href="/projects/scdb-database-trends"
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View Project →
            </Link>
          </div>
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
