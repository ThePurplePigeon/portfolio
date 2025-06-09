"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTasks, FaCalendarAlt, FaCode, FaClipboardList } from "react-icons/fa";

export default function TaskerShowcase() {
  return (
    <main
      className="bg-gray-900 text-white min-h-screen p-8"
      style={{
        backgroundImage: "url('/tasker/tasker_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <section className="bg-gray-800/95 rounded-lg px-6 py-10 shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-8"
          >
            {/* Title + tagline */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Tasker
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                A Qt desktop app that converts your Canvas&nbsp;.ics calendar into weighted, color-coded to-dos—built for overloaded students.
              </p>
            </div>

            {/* Optional visual (hidden on small screens) */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/tasker/main_screen.png"   // replace with actual screenshot later
                alt="Tasker main window screenshot"
                width={400}
                height={250}
                className="rounded-md ring-1 ring-gray-700/60 object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* ——— Project Overview ——— */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Project Overview</h2>

            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* What is Tasker? */}
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg border-l-4 border-blue-500 space-y-4">
                <div className="flex items-center mb-2 pb-2 border-b border-blue-500 group">
                  <FaTasks
                    aria-hidden="true"
                    focusable="false"
                    className="text-blue-400 mr-2 text-3xl transition-all duration-300 group-hover:text-blue-300"
                  />
                  <h3 className="text-2xl font-semibold">What is Tasker?</h3>
                </div>
                <p className="text-lg text-gray-300">
                  Tasker is a Qt-based desktop application designed specifically for students, allowing them to organize their assignments, quizzes, and exams into a clear, prioritized task list. A key feature is Tasker's built-in <code className="mx-1">.ics</code> importer, which lets students effortlessly populate their to-do lists by directly importing calendar files exported from Canvas.
                </p>
                <p className="text-lg text-gray-300">
                  Tasks can be categorized by class, assigned custom grade-weight tags, rated by difficulty, and visually distinguished using color-coded labels. With dynamic sorting by due date, importance, or grade impact, Tasker helps students quickly identify and focus on their most critical tasks, simplifying task management even during busy semesters.
                </p>

              </div>

              {/* My Role */}
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg border-l-4 border-purple-500 space-y-4">
                <div className="flex items-center mb-2 pb-2 border-b border-purple-500 group">
                  <FaCode
                    aria-hidden="true"
                    focusable="false"
                    className="text-purple-400 mr-2 text-3xl transition-all duration-300 group-hover:text-purple-300"
                  />
                  <h3 className="text-2xl font-semibold">My Role</h3>
                </div>
                <p className="text-lg text-gray-300">
                  Our team consisted of four members, tasked with building an eLearning-focused application as part of an introductory software engineering course. The primary objective was to gain hands-on experience with Agile methodology rather than solely delivering a complex product. Emphasis was placed on practicing Agile processes: presenting to various stakeholders—including clients, management, and fellow developers—maintaining thorough documentation, and utilizing Agile practices such as storyboarding, sprints, regular scrum meetings, and retrospectives.
                </p>

                <p className="text-lg text-gray-300">
                  As one of two primary developers, my responsibilities centered around the backend functionality related to task management. I designed and implemented the core Task objects, established the custom <code>.tsk</code> file format for task storage, developed the critical <code>.ics</code> file importer, and contributed significantly to parts of the Qt user interface that handled task creation and editing.
                </p>

                <p className="text-lg text-gray-300">
                  Building the user interface was a highly collaborative effort within our team. We frequently engaged in pair programming sessions, collaborating remotely over calls and synchronizing our changes via GitHub. This collaborative approach was particularly beneficial as only one team member initially had prior experience with Qt. Through pair programming, we rapidly gained proficiency in this new framework, facilitating smoother adoption and efficient teamwork.
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Functionality Highlights */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-3xl font-semibold text-center
              bg-white/30 px-4 py-2 rounded-xl inline-block
              shadow-md backdrop-blur
            "
          >
            Functionality Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Import & Filter */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="text-purple-400 text-2xl mt-1" />
                <h3 className="text-xl font-semibold">Import & Filter</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tasker's standout feature is its seamless integration with Canvas. Rather than tackling the complexity of the Canvas API, we utilized Canvas's built-in calendar export feature, which provides comprehensive details on assignments, quizzes, and tests. This streamlined the development process significantly and enabled timely project completion.
              </p>

              <p className="text-gray-300 leading-relaxed">
                One challenge was handling irrelevant calendar entries, such as scheduled Zoom meetings included in the exported files. Fortunately, these meetings had a unique identifier, enabling our parser to accurately filter them out. This ensured users received a clean, focused task list containing only relevant academic tasks.
              </p>

              <p className="text-gray-300 leading-relaxed">
                This practical approach not only simplified our development but also enhanced usability, allowing students to effortlessly import and organize their academic responsibilities.
              </p>
            </div>

            {/* Prioritize & Tag */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaClipboardList className="text-purple-400 text-2xl mt-1" />
                <h3 className="text-xl font-semibold">Prioritize & Tag</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tasker's tagging feature allows users to effectively prioritize and organize their academic responsibilities. Both manually created and imported Canvas tasks can be assigned a difficulty rating based on the user's preferred scale, as well as a grade-weight tag reflecting the task's contribution to their overall course grade. These tags provide additional sorting capabilities, helping students quickly identify the most impactful and critical tasks.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Additionally, Tasker supports class-specific tagging, allowing users to label tasks with course identifiers like CIS1234. Users can further enhance visual clarity by color-coding these class tags, significantly reducing visual clutter and enabling rapid identification of tasks within lengthy lists.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Together, these tagging and sorting options empower students to maintain clear and focused task lists, ensuring that their efforts align with their academic priorities and deadlines.
              </p>
            </div>

            {/* Save & Sync (spans full width on desktop) */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-start gap-3">
                <FaCode className="text-purple-400 text-2xl mt-1" />
                <h3 className="text-xl font-semibold">Save & Sync</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tasker saves all task information in a simple plaintext <code>.tsk</code> file within its directory structure. This approach, fitting for a sophomore project, kept things straightforward. We used no encryption or complex data layers, just readable and easily managed text files.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When closing Tasker, users are prompted with a dialog to either exit without saving, save and exit, or cancel if there are unsaved changes. There's no autosave feature, so if a user makes a mistake or imports the wrong file, they can simply close and reopen the app without saving, effectively rolling back any unwanted changes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack & Tooling */}
        <motion.section
          className="py-16 bg-gray-800 text-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-4xl font-bold text-center">Tech Stack & Tooling</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">Qt (C++)</h3>
                <p className="text-gray-300 leading-relaxed">
                  We chose Qt 6.x for its desktop UI toolkit. All UI elements (task list, import dialogs, settings) use QWidgets, with signals and slots managing real-time updates when a new .ics file is imported.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  C++17
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We chose C++17 as our primary language for Tasker, leveraging Visual Studio for development and Qt Creator for UI design. Since the project was completed shortly after our programming fundamentals coursework, where C++ was heavily emphasized, it was the language most of the team was comfortable and productive with.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  Visual Studio 2019
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We used Visual Studio as our primary IDE for backend development. Its support for C++ projects and partial Qt integration made it easy to manage our codebase and debug core functionality. Once we transitioned to designing the user interface, this setup allowed for a smooth migration to Qt Creator without disrupting our workflow.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  GitHub & CircleCI
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As part of our Agile workflow, we used GitHub to coordinate changes and manage our codebase. To support continuous integration, we set up CircleCI to run automated tests and builds on every commit, ensuring our code remained stable and that issues were caught early in development.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Screenshots */}
        <motion.section
          role="region"
          aria-label="Screenshot Gallery"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-3xl font-semibold text-center
              bg-white/30 px-4 py-2 rounded-xl inline-block
              shadow-md backdrop-blur
            "
          >
            Screenshots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="space-y-2 flex flex-col items-center">
              <Image
                src="/tasker/main_screen.png" // replace with actual path
                alt="Tasker main screen"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-300 text-center">
                Main Tasker screen with imported tasks
              </figcaption>
            </figure>

            <figure className="space-y-2 flex flex-col items-center">
              <Image
                src="/tasker/ics_import.png" // replace with actual path
                alt="Calendar import dialog"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <figcaption className="text-sm text-gray-300 text-center">
                Calendar import dialog with .ics selection
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Challenges & Lessons Learned */}
        <motion.section
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6 space-y-4">
            <div className="flex items-center mb-4">
              <FaClipboardList className="text-purple-400 mr-3 text-xl" />
              <h3 className="text-2xl font-semibold text-purple-300">
                Challenges & Lessons Learned
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Tasker marked my second significant software project involving a graphical user interface. My previous experience was building a Minesweeper game from scratch using SFML, where I handled every pixel and event manually. Tasker, however, was my first time building a GUI within an actual GUI toolkit, using Qt's suite of widgets and layout tools. This leap introduced me to a completely different way of designing user experiences and set the stage for future work—like the Unity-based character creator I built in my Human-Computer Interaction course.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The steepest challenge was adopting a brand-new framework and integrating it with our existing C++ backend. Qt offers many high-level tools, like widgets, lists, and dialog boxes,that don't always mesh intuitively with C++ logic. Building and updating the dynamic task list in Qt was especially tricky, and required a lot of teamwork and experimentation. This experience taught me how to quickly learn and integrate unfamiliar technologies, and reinforced the importance of collaborative problem-solving in a team setting.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I also learned the value of simplicity in software solutions. While we initially considered integrating Tasker with Canvas through its API, we quickly realized that route was far too complex for our timeline and experience. Instead, using Canvas's calendar export proved to be an elegant, lightweight solution that allowed us to focus on core functionality—and gave me valuable practice with file I/O in C++. In the end, Tasker was full of firsts: my first collaborative software project, my first hands-on use of Agile practices, and my first self-taught deep dive into a new framework. Though the project had its imperfections, it built a strong foundation for my later work; most notably, my senior project Prettier-er.
            </p>

          </div>
        </motion.section>
      </section>
    </main>
  );
}
