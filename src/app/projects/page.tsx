"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Prettier-er",
    tagline: "The non-opinionated code formatter.",
    alt: "Prettier-er logo",
    description: "Prettier-er is a VS Code extension that builds on top of Prettier, offering customizable formatting rules and a unique code readability analysis tool. Created as a senior project at UF, it was designed to give developers, new and seasoned, more control over their style choices; making clean, readable code without sacrificing personal or organizational preferences.",
    link: "/projects/prettier-er",
    image: "/prettier-er.png",
  },
  {
    title: "Tasker",
    tagline: "Your academic tasks, organized your way.",
    alt: "Tasker logo",
    description: "Tasker is a QT-based task management app designed to help students organize assignments, quizzes, and other deadlines. Built during an intensive two-month software engineering course, the project emphasized agile practices such as storyboarding and sprint planning. Tasker lets users create detailed tasks with customizable metadata—including class, due date, weight, and difficulty—and provides robust filtering and sorting capabilities. A standout feature is its .ics import tool, enabling seamless integration of existing calendars (such as Canvas exports) to auto-populate task lists. I focused primarily on the GUI development, task data management, and implementing the calendar import feature, making this a rewarding introduction to desktop software development.",
    link: "/projects/tasker",
    image: "/tasker.png",
  },
  {
    title: "SCDB Database & Trends",
    tagline: "Exploring Supreme Court History Through Data Visualization.",
    alt: "SCDB logo",
    description: "This project was developed as part of my Database Management course, showcasing interactive trend queries based on data from the Supreme Court Database (SCDB). We utilized Python scripts to convert SCDB datasets into structured SQL insert commands, constructing a comprehensive Oracle database. Despite tight deadlines and teamwork challenges, we build a web app using Go, HTML, CSS, and JavaScript to interactively query the database and visualize historical trends, like ideological swings among justices, and voting patterns correlated with presidential appointments. This project not only highlighted fascinating judicial insights, but significantly expanded my skills in rapid problem-solving, database design, API integration, and adaptive leadership under pressure.",
    link: "/projects/scdb-database-trends",
    image: "/scdb.png",
  },
];


export default function ProjectsOverview() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">My Projects</h1>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ?'md:flex-row-reverse' :''} items-center gap-6`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-1">{project.title}</h2>
                <h3 className="text-lg italic text-gray-300 mb-3">{project.tagline}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block w-fit px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-shadow"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

