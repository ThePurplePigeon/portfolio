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
                A Qt desktop app that converts your Canvas&nbsp;.ics calendar into
                weighted, color-coded to-dos—built for overloaded students.
              </p>
            </div>

            {/* Optional visual (hidden on small screens) */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                src="/tasker/header_preview.png"   // replace with actual screenshot later
                alt="Tasker main window screenshot"
                width={260}
                height={160}
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

                { /*
                  Gonna do some writing here to explain what Tasker is, and the cool things about it.

                  Tasker is a Qt-based windows desktop application that allows students to create and sort tasks by due date, importance, grade weight, and class. Importantly, Tasker has a built-in .ics (calender file) importer that lets students import their canvas calendar, automatically populating their task list with all their assignments, quizzes, and tests. Tasker's goal as an application is to help students prioritize their most important tasks, and to help them stay on top of their assignments.
                */}

                <p className="text-lg text-gray-300">
                  Tasker is a Qt-based desktop application designed specifically for students, allowing them to organize their assignments, quizzes, and exams into a clear, prioritized task list. A key feature is Tasker's built-in <code className="mx-1">.ics</code> importer, which lets students effortlessly populate their to-do lists by directly importing calendar files exported from Canvas.
                </p>
                <p className="text-lg text-gray-300">
                  Tasks can be categorized by class, assigned custom grade-weight tags, rated by difficulty, and visually distinguished using color-coded labels. With dynamic sorting by due date, importance, or grade impact, Tasker helps students quickly identify and focus on their most critical tasks, simplifying task management even during busy semesters.
                </p>

              </div>

              {/* My Role */}

              { /* This section describes my role in the project, what I did, and how I contributed to the project. Like above, i'll write out brain to text here first, then make it sound pretty in the paragraphs.
                  The team was 4 people total. The point of the class, intro to software engineering, was on using Agile methodology. The project was all about putting into practice what we were learning for some eLearning application. As such, the application itself was not the focus, but the process of building it: making different presentations to different types of audiences (one to the client, one to management, and one to developers), making documentation, and using agile practices like storyboarding, sprints, daily scrums (though given it's a class, it was every few days), and retrospectives.
                  My role was one of the 2 developers. I handled the backend of the code with regard to the tasks themselves: creating the task object and related .tsk file format for storing tasks, writing the .ics importer, and creating some of the Qt UI that dealt with specifically making and editing tasks.
                  The UI was the most collaborative part of the project. We spent a few nights in call working on different elements of it together, using github to sync changes. Given one of us had experience with Qt, while the others didn't, we were able to get some nice experience with picking up a new framework and making adoption easier through pair programming.
              */}
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
                Tasker ingests a Canvas .ics export file and automatically identifies
                assignment due dates. It skips over non-task events (e.g., Zoom meetings)
                and builds a clear list of homework and quiz deadlines—no manual copy/paste
                required.
              </p>
            </div>

            {/* Prioritize & Tag */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaClipboardList className="text-purple-400 text-2xl mt-1" />
                <h3 className="text-xl font-semibold">Prioritize & Tag</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                After import, users can assign difficulty ratings and grade-weight tags,
                as well as attach color-coded course labels to each task. Tasker sorts
                tasks by due date, priority, or weight—making it easy to know what's most
                important next.
              </p>
            </div>

            {/* Save & Sync (spans full width on desktop) */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-start gap-3">
                <FaCode className="text-purple-400 text-2xl mt-1" />
                <h3 className="text-xl font-semibold">Save & Sync</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tasker stores data in a simple “.tsk” file in your Documents folder so
                your task list persists between sessions. You can reopen, update, or even
                export back to .ics/CSV if needed. Our CircleCI pipeline on GitHub ensures
                every commit builds successfully and passes unit tests, guarding against
                regressions.
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
                  We chose Qt 5.15 for its cross-platform desktop UI toolkit. All UI elements
                  (task list, import dialogs, settings) use QWidgets, with signals and slots
                  managing real-time updates when a new .ics file is imported. Styling leverages
                  Qt Style Sheets for a dark theme.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  C++17 & JSON
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Core logic—parsing .ics files, filtering events, serializing to “.tsk”—is
                  implemented in modern C++. We use the STL &lt;chrono&gt; library for date/time
                  comparisons and nlohmann/json for simple JSON handling in unit tests.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  Visual Studio 2019
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Visual Studio was our IDE on Windows, with the Qt VS Tools extension for building
                  and debugging. Breakpoints inside signal/slot code helped troubleshoot UI updates
                  when task properties changed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  GitHub & CircleCI
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We managed our backlog with GitHub Projects and tracked two-week sprints via Issues
                  and Pull Requests. CircleCI runs cmake & make on every PR, plus our unit tests
                  (including .ics→task parsing tests). This ensures new UI changes never break core
                  functionality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-1">
                  ICS Parsing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We wrote a minimal .ics parser in C++ (under 150 lines) to extract DTSTART and SUMMARY
                  fields, ignoring non-task events. This lightweight approach reduced binary size
                  by 60 MB and simplified unit testing.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* My Role & Contributions */}
        <motion.section
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <div className="flex items-center mb-4">
              <FaCode className="text-purple-400 mr-3 text-xl" />
              <h3 className="text-2xl font-semibold text-purple-300">My Role & Contributions</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I served as one of three developers on Tasker. My primary focus was the core “task engine”:
                I designed the “.tsk” file format—a simple JSON wrapper—to store tasks persistently. I implemented
                C++ classes (e.g., <code>Task</code>, <code>TaskList</code>, <code>CalendarImporter</code>) to
                parse .ics inputs and serialize back to .tsk. That pipeline became the foundation for everything
                Tasker does.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In parallel, I pair-programmed our Qt UI for the main task list. Together, we created
                a custom <code>QAbstractItemModel</code>/ <code>QTableView</code> setup so each task
                displayed with a colored course tag, a priority icon, and a due date countdown. We mocked up
                the design in Figma first, then translated it into Qt Designer and hand-crafted the C++
                logic to push real-time updates whenever task properties changed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                On the Agile side, I volunteered as the “CI/CD lead,” setting up our CircleCI configuration
                so every push to GitHub ran a <code>cmake && make</code> build and executed unit tests
                (covering .ics parsing and Qt smoke tests). I also coordinated daily standups and sprint
                retrospectives, ensuring our GitHub Issues backlog stayed groomed and each PR received a
                peer review within 24 hours.
              </p>
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
                src="/tasker/screenshot1.png" // replace with actual path
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
                src="/tasker/screenshot2.png" // replace with actual path
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
              Implementing the Qt task list with live updates proved challenging. Our initial
              approach using <code>QStandardItemModel</code> led to memory leaks and UI refresh
              issues. We refactored to a custom <code>QAbstractItemModel</code> backed by a
              <code>QVector&lt;Task*&gt;</code>, which let us emit <code>dataChanged</code>
              correctly and keep the UI stable.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We also learned that pulling in a full iCalendar library created heavy dependencies and
              inflated our binary size by 60 MB. Writing a minimal ics parser (under 150 lines) allowed
              us to filter only the fields we needed—streamlining testing and keeping distribution
              lightweight.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Embracing Agile with two-week sprints and daily standups paid off. We quickly surfaced
              blockers (e.g., broken Qt builds) and resolved them before they derailed our sprint.
              If we rebuilt Tasker today, we'd consider Electron or Flutter for faster UI prototyping,
              while preserving our core .ics→task logic in C++ or WebAssembly.
            </p>
          </div>
        </motion.section>
      </section>
    </main>
  );
}
