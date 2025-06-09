"use client";

import { 
  FaTools, FaUsers, FaUniversity, 
  FaGraduationCap, FaBookReader, FaLaptopCode 
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const cardVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const courses = [
    {
      title: "Intro to Software Engineering",
      description: "Collaborated within a 4-person Agile Scrum team to create a student assistant tool, mastering iterative development, sprint planning, user story creation, and continuous integration (CI/CD) practices. Developed effective team workflows, conducted regular stand-ups, sprint retrospectives, and delivered functional software increments consistently."
    },
    {
      title: "Operating Systems",
      description: "Gained practical experience navigating and extending the Linux kernel codebase. Completed multiple hands-on projects involving system calls, memory management, inter-process communication, and concurrency control, strengthening my skills in debugging, system-level programming, and understanding core OS principles."
    },
    {
      title: "Human-Computer Interaction",
      description: "Built a strong foundation in UX/UI design through comprehensive usability studies. Conducted three detailed usability tests—one involving controlled experimental methodologies—and rigorously analyzed collected data with tools like R and MAXQDA. Applied insights directly into UI improvements, enhancing user satisfaction and product accessibility."
    },
    {
      title: "Professional Communication for Engineers",
      description: "Enhanced technical communication skills through rigorous practice creating detailed failure analyses, technical research reports, user manuals, and project proposals. Improved my ability to clearly translate complex technical information into actionable documentation for diverse audiences."
    },
    {
      title: "Information & Database Systems",
      description: "Designed and built a robust web-based database application capable of efficiently handling over 800,000 records. Applied principles of database design, normalization, indexing, and optimization. Integrated frontend and backend functionality, ensuring excellent performance and seamless user experience at scale."
    },
  ];

  const [currentCourse, setCurrentCourse] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll) return;

    const timer = setInterval(() => {
      setCurrentCourse((prevIndex) => (prevIndex + 1) % courses.length);
    }, 10000); // Auto-scroll every 10 seconds

    return () => clearInterval(timer);
  }, [autoScroll, courses.length, currentCourse]);

  const handleManualChange = (newIndex: number) => {
    setCurrentCourse(newIndex);
    setAutoScroll(false); // temporarily pause autoscroll

    // Restart auto-scroll after user interaction
    setTimeout(() => setAutoScroll(true), 10000); // pauses for 10 seconds
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen p-6">
      <section className="max-w-4xl mx-auto space-y-8">
        {/* Intro */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-lg shadow-purple-700/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <Image
                src="/me.jpg"
                alt="Joshua Hughes"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <h1 className="text-5xl font-bold">About Me</h1>
            </div>
            <blockquote className="border-l-4 border-purple-500 italic text-gray-300 pl-4 my-4">
              "The most important step a man can take... It's the next one."
            </blockquote>
            <p className="text-lg">
              I'm Joshua Hughes, a{" "}
              <span className="gradient-text font-semibold">passionate software developer</span>{" "}
              from Hope Mills, North Carolina. I recently graduated with a Bachelor of Science in Computer Science from the University of Florida, where I also minored in Philosophy. My academic journey and hands-on project experience have provided me with a strong foundation in both theoretical knowledge and practical development.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 shadow-purple-700/20 relative overflow-hidden">
          <h2 className="text-3xl font-bold flex items-center">
            <FaUniversity className="text-blue-500 mr-3" /> Education
          </h2>

          {/* Degree */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-gray-900 p-4 rounded-lg shadow-md flex items-center"
          >
            <FaGraduationCap className="text-purple-400 mr-3 text-2xl" />
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-400">University of Florida, Gainesville</p>
              <p className="text-sm text-gray-500">August 2020 – May 2024</p>
            </div>
          </motion.div>

          {/* Minor */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
            className="bg-gray-700 p-4 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold flex items-center">
              <FaBookReader className="mr-2 text-purple-400" /> Minor
            </h3>
            <p className="text-gray-300">Philosophy</p>
          </motion.div>

          {/* Relevant Coursework Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-700 p-6 rounded-lg shadow-xl relative overflow-hidden"
          >
            <h3 className="text-xl font-bold flex items-center mb-4">
              <FaLaptopCode className="mr-2 text-purple-400" /> Highlighted Coursework
            </h3>

            {/* Carousel */}
            <div className="flex items-center justify-between gap-4">
              {/* Previous */}
              <button
                onClick={() => handleManualChange((currentCourse - 1 + courses.length) % courses.length)}
                className="
                  text-purple-400 hover:text-white
                  text-2xl
                  bg-gray-800 hover:bg-purple-700
                  p-2
                  rounded-full
                  transition
                  hover:scale-110
                  ring-1 ring-purple-400/40 focus:ring-purple-400/90
                  focus:outline-none
                  mx-2
                "
                aria-label="Previous Course"
              >
                &#10094;
              </button>

              {/* Course Content */}
              <div className="flex-1" aria-live="polite">
                <motion.div
                  key={courses[currentCourse].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-lg p-4 shadow-md"
                >
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">
                    {courses[currentCourse].title}
                  </h4>
                  <p className="text-gray-300">{courses[currentCourse].description}</p>
                </motion.div>
              </div>

              {/* Next */}
              <button
                onClick={() => handleManualChange((currentCourse + 1) % courses.length)}
                className="
                  text-purple-400 hover:text-white
                  text-2xl
                  bg-gray-800 hover:bg-purple-700
                  p-2
                  rounded-full
                  transition
                  hover:scale-110
                  ring-1 ring-purple-400/40 focus:ring-purple-400/90
                  focus:outline-none
                  mx-2
                "
                aria-label="Next Course"
              >
                &#10095;
              </button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              {courses.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleManualChange(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentCourse === idx ? "bg-purple-400" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Technical Skills*/}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-purple-700/20 relative overflow-hidden">
          <h2 className="flex items-center text-3xl font-bold mb-4">
            <FaTools className="mr-2 text-blue-500" />
            Technical Skills
          </h2>

          {/* Top row: three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["C++","C#","Java","Python","JavaScript","TypeScript","SQL"].map(s => (
                  <span
                    key={s}
                    className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libs */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["React","Qt","Unreal","Unity"].map(s => (
                  <span
                    key={s}
                    className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["GitHub","Jira","MATLAB","VS Code","Visual Studio"].map(s => (
                  <span
                    key={s}
                    className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: centered two cards */}
          <div className="mt-6 flex justify-center gap-6">
            {/* Methodologies */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Methodologies</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Agile","Unit Testing","CI/CD","Usability Testing"].map(s => (
                  <span
                    key={s}
                    className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Certifications</h3>
              <div className="flex justify-center">
                <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                  CompTIA A+ (in progress, est. Sept 2025)
                </span>
              </div>
            </div>
          </div>
        </div>






        {/* Soft Skills*/}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-purple-700/20 relative overflow-hidden">
          <h2 className="flex items-center text-3xl font-bold mb-4">
            <FaUsers className="mr-2 text-blue-500" />
            Soft Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Teamwork & Collaboration */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Teamwork & Collaboration</h3>
              <p className="text-gray-300 text-sm text-center">
                Successfully contributed to 4 Agile software projects, consistently promoting clear communication, mutual accountability, and a supportive team environment to deliver high-quality results.
              </p>
            </div>

            {/* Problem-Solving */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Problem-Solving</h3>
              <p className="text-gray-300 text-sm text-center">
                Proven ability to analyze complex challenges, design effective software architectures, and implement thorough unit testing and debugging processes, ensuring robust and reliable software solutions.
              </p>
            </div>

            {/* Leadership */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Leadership</h3>
              <p className="text-gray-300 text-sm text-center">
                Effectively managed Agile teams of 3-5 members, facilitating collaborative sprint planning, guiding daily stand-ups, and fostering a productive environment that motivates teams to consistently meet project goals.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action*/}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg shadow-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Interested in collaborating?</h2>
          <p className="text-gray-300 mb-4">I'd love to hear from you. Let's build something great together!</p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-110 shadow-lg shadow-purple-600/40"
          >
            Get in Touch
          </a>
        </div>

      </section>
    </main>
  );
}
