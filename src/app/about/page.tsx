"use client";

import { 
  FaTools, FaUsers, FaUniversity, 
  FaGraduationCap, FaBookReader, FaLaptopCode, FaCertificate, FaExternalLinkAlt
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AUTO_SCROLL_INTERVAL_MS = 10000;

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const courses = [
  {
    title: "Intro to Software Engineering",
    description: "Collaborated within a 4-person Agile Scrum team to create a student assistant tool, mastering iterative development, sprint planning, user story creation, and continuous integration (CI/CD) practices. Developed effective team workflows, conducted regular stand-ups, sprint retrospectives, and delivered functional software increments consistently.",
  },
  {
    title: "Operating Systems",
    description: "Gained practical experience navigating and extending the Linux kernel codebase. Completed multiple hands-on projects involving system calls, memory management, inter-process communication, and concurrency control, strengthening my skills in debugging, system-level programming, and understanding core OS principles.",
  },
  {
    title: "Human-Computer Interaction",
    description: "Built a strong foundation in UX/UI design through comprehensive usability studies. Conducted three detailed usability tests - one involving controlled experimental methodologies - and rigorously analyzed collected data with tools like R and MAXQDA. Applied insights directly into UI improvements, enhancing user satisfaction and product accessibility.",
  },
  {
    title: "Professional Communication for Engineers",
    description: "Enhanced technical communication skills through rigorous practice creating detailed failure analyses, technical research reports, user manuals, and project proposals. Improved my ability to clearly translate complex technical information into actionable documentation for diverse audiences.",
  },
  {
    title: "Information & Database Systems",
    description: "Designed and built a robust web-based database application capable of efficiently handling over 800,000 records. Applied principles of database design, normalization, indexing, and optimization. Integrated frontend and backend functionality, ensuring excellent performance and seamless user experience at scale.",
  },
] as const;

const languageSkills = ["C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"] as const;
const frameworkSkills = ["React", "Qt", "Unreal", "Unity"] as const;
const toolSkills = ["GitHub", "Jira", "MATLAB", "VS Code", "Visual Studio"] as const;
const methodologySkills = ["Agile", "Unit Testing", "CI/CD", "Usability Testing"] as const;

const sectionPanelClasses =
  "bg-gray-800 p-3 rounded-xl shadow-lg shadow-purple-700/20 relative overflow-hidden sm:p-6";
const skillCardClasses = "bg-gray-900 p-4 rounded-lg shadow-md";
const skillChipClasses = "bg-gray-700 px-3 py-1 rounded text-sm text-gray-300";

export default function About() {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const resumeAutoScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!autoScroll) return;

    const timer = setInterval(() => {
      setCurrentCourse((prevIndex) => (prevIndex + 1) % courses.length);
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [autoScroll]);

  useEffect(() => {
    return () => {
      if (resumeAutoScrollTimer.current) {
        clearTimeout(resumeAutoScrollTimer.current);
      }
    };
  }, []);

  const handleManualChange = (newIndex: number) => {
    setCurrentCourse(newIndex);
    setAutoScroll(false);

    if (resumeAutoScrollTimer.current) {
      clearTimeout(resumeAutoScrollTimer.current);
    }

    resumeAutoScrollTimer.current = setTimeout(() => {
      setAutoScroll(true);
      resumeAutoScrollTimer.current = null;
    }, AUTO_SCROLL_INTERVAL_MS);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen p-3 sm:p-6">
      <section className="max-w-4xl mx-auto space-y-8">
        <section className="bg-gray-800 rounded-xl p-3 shadow-lg shadow-purple-700/20 relative overflow-hidden sm:p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/me.jpg"
                alt="Joshua Hughes"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <h1 className="text-4xl font-bold sm:text-5xl">About Me</h1>
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

        <section className={`${sectionPanelClasses} space-y-4`}>
          <h2 className="text-3xl font-bold flex items-center">
            <FaUniversity className="text-blue-500 mr-3" /> Education
          </h2>

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
              <p className="text-sm text-gray-500">August 2020 - May 2024</p>
            </div>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-700 p-2 rounded-lg shadow-xl relative overflow-hidden sm:p-6"
          >
            <h3 className="text-xl font-bold flex items-center mb-4">
              <FaLaptopCode className="mr-2 text-purple-400" /> Highlighted Coursework
            </h3>

            <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-1 sm:flex sm:justify-between sm:gap-4">
              <button
                onClick={() => handleManualChange((currentCourse - 1 + courses.length) % courses.length)}
                className="
                  h-10 w-10 sm:h-auto sm:w-auto
                  text-purple-400 hover:text-white
                  text-2xl
                  bg-gray-800 hover:bg-purple-700
                  p-2
                  rounded-full
                  transition
                  hover:scale-110
                  ring-1 ring-purple-400/40 focus:ring-purple-400/90
                  focus:outline-none
                  sm:mx-2
                "
                aria-label="Previous Course"
              >
                &#10094;
              </button>

              <div className="min-w-0 flex-1" aria-live="polite">
                <motion.div
                  key={courses[currentCourse].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-h-64 overflow-y-auto overscroll-contain bg-gray-800 rounded-lg p-3 shadow-md sm:max-h-none sm:overflow-visible sm:p-4"
                >
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">
                    {courses[currentCourse].title}
                  </h4>
                  <p className="text-gray-300">{courses[currentCourse].description}</p>
                </motion.div>
              </div>

              <button
                onClick={() => handleManualChange((currentCourse + 1) % courses.length)}
                className="
                  h-10 w-10 sm:h-auto sm:w-auto
                  text-purple-400 hover:text-white
                  text-2xl
                  bg-gray-800 hover:bg-purple-700
                  p-2
                  rounded-full
                  transition
                  hover:scale-110
                  ring-1 ring-purple-400/40 focus:ring-purple-400/90
                  focus:outline-none
                  sm:mx-2
                "
                aria-label="Next Course"
              >
                &#10095;
              </button>
            </div>

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

        <section className={`${sectionPanelClasses} space-y-4`}>
          <h2 className="text-3xl font-bold flex items-center">
            <FaCertificate className="text-blue-500 mr-3" /> Professional Certification
          </h2>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
            className="grid grid-cols-1 gap-6 bg-gray-900 p-5 rounded-lg shadow-md md:grid-cols-[auto,1fr]"
          >
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-lg bg-[#f4f4f4] p-4 shadow-inner md:mx-0">
              <Image
                src="/certifications/comptia-a-plus.png"
                alt="CompTIA A+ ce certification logo"
                width={120}
                height={120}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-200">CompTIA A+ ce Certification</h3>
                <p className="mt-2 text-gray-300">
                  Earned through the CompTIA A+ Core 1 and Core 2 exams, validating foundational IT support,
                  hardware, networking, operating systems, and troubleshooting knowledge.
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-800 p-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400">Issued</dt>
                  <dd className="text-gray-100">June 25, 2026</dd>
                </div>
                <div className="rounded-lg bg-gray-800 p-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400">Valid Through</dt>
                  <dd className="text-gray-100">June 25, 2029</dd>
                </div>
                <div className="rounded-lg bg-gray-800 p-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400">Exams</dt>
                  <dd className="text-gray-100">220-1201 and 220-1202</dd>
                </div>
                <div className="rounded-lg bg-gray-800 p-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400">Credential ID</dt>
                  <dd className="text-gray-100">COMP001023018439</dd>
                </div>
                <div className="rounded-lg bg-gray-800 p-3 sm:col-span-2">
                  <dt className="text-xs uppercase tracking-wide text-gray-400">Verification Code</dt>
                  <dd className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span
                      className="min-w-0 break-all font-mono text-sm text-gray-100 sm:truncate"
                      title="afad4807cf364e85976d4b301882acdc"
                    >
                      afad4807cf364e85976d4b301882acdc
                    </span>
                    <a
                      href="https://cp.certmetrics.com/CompTIA/en/public/verify/credential/afad4807cf364e85976d4b301882acdc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition-transform duration-150 hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.45)] focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Verify Credential
                      <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </section>

        <div className={sectionPanelClasses}>
          <h2 className="flex items-center text-3xl font-bold mb-4">
            <FaTools className="mr-2 text-blue-500" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={skillCardClasses}>
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {languageSkills.map(s => (
                  <span
                    key={s}
                    className={skillChipClasses}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className={skillCardClasses}>
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {frameworkSkills.map(s => (
                  <span
                    key={s}
                    className={skillChipClasses}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className={skillCardClasses}>
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {toolSkills.map(s => (
                  <span
                    key={s}
                    className={skillChipClasses}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-6 sm:flex-row">
            <div className={`${skillCardClasses} w-full sm:w-auto`}>
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Methodologies</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {methodologySkills.map(s => (
                  <span
                    key={s}
                    className={skillChipClasses}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${skillCardClasses} w-full sm:w-auto`}>
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Certifications</h3>
              <div className="flex justify-center">
                <span className={skillChipClasses}>
                  CompTIA A+ ce Certified
                </span>
              </div>
            </div>
          </div>
        </div>






        <div className={sectionPanelClasses}>
          <h2 className="flex items-center text-3xl font-bold mb-4">
            <FaUsers className="mr-2 text-blue-500" />
            Soft Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Teamwork & Collaboration</h3>
              <p className="text-gray-300 text-sm text-center">
                Successfully contributed to 4 Agile software projects, consistently promoting clear communication, mutual accountability, and a supportive team environment to deliver high-quality results.
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Problem-Solving</h3>
              <p className="text-gray-300 text-sm text-center">
                Proven ability to analyze complex challenges, design effective software architectures, and implement thorough unit testing and debugging processes, ensuring robust and reliable software solutions.
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 text-center mb-3">Leadership</h3>
              <p className="text-gray-300 text-sm text-center">
                Effectively managed Agile teams of 3-5 members, facilitating collaborative sprint planning, guiding daily stand-ups, and fostering a productive environment that motivates teams to consistently meet project goals.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-3 shadow-lg shadow-purple-500/20 text-center sm:p-6">
          <h2 className="text-2xl font-bold text-white mb-3">Interested in collaborating?</h2>
          <p className="text-gray-300 mb-4">I'd love to hear from you. Let's build something great together!</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-110 shadow-lg shadow-purple-600/40"
          >
            Get in Touch
          </Link>
        </div>

      </section>
    </main>
  );
}
