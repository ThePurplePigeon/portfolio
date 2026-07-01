import Image from "next/image";
import { FaTasks, FaCalendarAlt, FaCode, FaClipboardList } from "react-icons/fa";

const sectionCardClasses =
  "rounded-lg bg-gray-800/95 p-5 text-white shadow-lg ring-1 ring-white/10 sm:p-8";
const sectionHeadingClasses =
  "mb-6 text-center text-2xl font-bold text-white sm:mb-8 sm:text-4xl";
const featureCardClasses =
  "rounded-lg bg-gray-700/75 p-5 ring-1 ring-white/10 sm:p-8";
const iconHeadingClasses =
  "flex items-start gap-3 border-b pb-2 sm:items-center";
const bodyTextClasses = "text-base leading-relaxed text-gray-300 sm:text-lg";
const inlineCodeClasses =
  "rounded bg-gray-900/70 px-1.5 py-0.5 font-mono text-sm text-purple-200";

export default function TaskerShowcase() {
  return (
    <main className="min-h-screen bg-gray-900 p-4 text-white sm:p-8 md:bg-[url('/tasker/tasker_background.png')] md:bg-cover md:bg-center md:bg-fixed">
      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
        <section className="overflow-hidden rounded-lg bg-gray-800/95 shadow-lg ring-1 ring-white/10">
          <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:items-center">
            <div className="space-y-4 text-center md:text-left">
              <p className="text-sm font-semibold text-purple-300">
                Qt desktop productivity app
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Tasker
              </h1>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:mx-0">
                A Qt desktop app that converts your Canvas .ics calendar into
                weighted, color-coded to-dos, built for overloaded students.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {["C++17", "Qt Widgets", "Canvas .ics", "Agile team project"].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full bg-gray-900/80 px-3 py-1 text-sm text-gray-200 ring-1 ring-white/10"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-lg bg-gray-900/80 p-2 ring-1 ring-gray-700/80">
              <Image
                src="/tasker/main_screen.png"
                alt="Tasker main window screenshot"
                width={795}
                height={626}
                className="h-auto w-full rounded-md object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className={sectionCardClasses}>
          <h2 className={sectionHeadingClasses}>Project Overview</h2>

          <div className="space-y-6 sm:space-y-8">
            <div className={`${featureCardClasses} border-l-4 border-blue-500`}>
              <div className={`${iconHeadingClasses} border-blue-500`}>
                <FaTasks
                  aria-hidden="true"
                  focusable="false"
                  className="shrink-0 text-2xl text-blue-400"
                />
                <h3 className="text-xl font-semibold sm:text-2xl">
                  What is Tasker?
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                <p className={bodyTextClasses}>
                  Tasker is a Qt-based desktop application designed specifically
                  for students, allowing them to organize their assignments,
                  quizzes, and exams into a clear, prioritized task list. A key
                  feature is Tasker&apos;s built-in{" "}
                  <code className={inlineCodeClasses}>.ics</code> importer,
                  which lets students populate their to-do lists by importing
                  calendar files exported from Canvas.
                </p>
                <p className={bodyTextClasses}>
                  Tasks can be categorized by class, assigned custom
                  grade-weight tags, rated by difficulty, and visually
                  distinguished using color-coded labels. With dynamic sorting
                  by due date, importance, or grade impact, Tasker helps
                  students quickly identify and focus on their most critical
                  tasks, simplifying task management during busy semesters.
                </p>
              </div>
            </div>

            <div className={`${featureCardClasses} border-l-4 border-purple-500`}>
              <div className={`${iconHeadingClasses} border-purple-500`}>
                <FaCode
                  aria-hidden="true"
                  focusable="false"
                  className="shrink-0 text-2xl text-purple-400"
                />
                <h3 className="text-xl font-semibold sm:text-2xl">My Role</h3>
              </div>
              <div className="mt-4 space-y-4">
                <p className={bodyTextClasses}>
                  Our team consisted of four members, tasked with building an
                  eLearning-focused application as part of an introductory
                  software engineering course. The primary objective was to gain
                  hands-on experience with Agile methodology rather than solely
                  delivering a complex product. Emphasis was placed on
                  practicing Agile processes: presenting to various stakeholders,
                  including clients, management, and fellow developers,
                  maintaining documentation, and using practices such as
                  storyboarding, sprints, regular scrum meetings, and
                  retrospectives.
                </p>

                <p className={bodyTextClasses}>
                  As one of two primary developers, my responsibilities centered
                  around the backend functionality related to task management. I
                  designed and implemented the core Task objects, established
                  the custom <code className={inlineCodeClasses}>.tsk</code>{" "}
                  file format for task storage, developed the critical{" "}
                  <code className={inlineCodeClasses}>.ics</code> file importer,
                  and contributed to parts of the Qt user interface that handled
                  task creation and editing.
                </p>

                <p className={bodyTextClasses}>
                  Building the user interface was a collaborative effort within
                  our team. We frequently used pair programming sessions,
                  collaborated remotely over calls, and synchronized changes via
                  GitHub. This was especially useful because only one team
                  member initially had prior experience with Qt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionCardClasses}>
          <h2 className={sectionHeadingClasses}>Functionality Highlights</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCalendarAlt
                  aria-hidden="true"
                  focusable="false"
                  className="mt-1 shrink-0 text-2xl text-purple-400"
                />
                <h3 className="text-xl font-semibold">Import & Filter</h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                Tasker&apos;s standout feature is its seamless integration with
                Canvas. Rather than tackling the complexity of the Canvas API,
                we used Canvas&apos;s built-in calendar export feature, which
                provides details on assignments, quizzes, and tests. This
                streamlined development and helped us complete the project on
                time.
              </p>

              <p className="leading-relaxed text-gray-300">
                One challenge was handling irrelevant calendar entries, such as
                scheduled Zoom meetings included in the exported files. These
                meetings had a unique identifier, so our parser could filter
                them out and keep the task list focused on academic work.
              </p>

              <p className="leading-relaxed text-gray-300">
                This practical approach simplified development and improved
                usability, allowing students to import and organize their
                academic responsibilities quickly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaClipboardList
                  aria-hidden="true"
                  focusable="false"
                  className="mt-1 shrink-0 text-2xl text-purple-400"
                />
                <h3 className="text-xl font-semibold">Prioritize & Tag</h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                Tasker&apos;s tagging feature allows users to prioritize and
                organize their academic responsibilities. Both manually created
                and imported Canvas tasks can be assigned a difficulty rating
                and a grade-weight tag reflecting the task&apos;s contribution
                to the overall course grade.
              </p>

              <p className="leading-relaxed text-gray-300">
                Tasker also supports class-specific tagging, allowing users to
                label tasks with course identifiers like CIS1234. Users can
                color-code these class tags, reducing visual clutter and making
                tasks easier to identify in long lists.
              </p>

              <p className="leading-relaxed text-gray-300">
                Together, these tagging and sorting options help students keep
                task lists focused on deadlines, effort, and academic impact.
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <div className="flex items-start gap-3">
                <FaCode
                  aria-hidden="true"
                  focusable="false"
                  className="mt-1 shrink-0 text-2xl text-purple-400"
                />
                <h3 className="text-xl font-semibold">Save & Sync</h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                Tasker saves all task information in a simple plaintext{" "}
                <code className={inlineCodeClasses}>.tsk</code> file within
                its directory structure. This approach, fitting for a sophomore
                project, kept things straightforward. We used no encryption or
                complex data layers, just readable and easily managed text
                files.
              </p>
              <p className="leading-relaxed text-gray-300">
                When closing Tasker, users are prompted with a dialog to either
                exit without saving, save and exit, or cancel if there are
                unsaved changes. There&apos;s no autosave feature, so if a user
                makes a mistake or imports the wrong file, they can close and
                reopen the app without saving.
              </p>
            </div>
          </div>
        </section>

        <section className={sectionCardClasses}>
          <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
            <h2 className={sectionHeadingClasses}>Tech Stack & Tooling</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-1 text-xl font-semibold text-purple-300 sm:text-2xl">
                  Qt (C++)
                </h3>
                <p className="leading-relaxed text-gray-300">
                  We chose Qt 6.x for its desktop UI toolkit. All UI elements
                  (task list, import dialogs, settings) use QWidgets, with
                  signals and slots managing real-time updates when a new .ics
                  file is imported.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-xl font-semibold text-purple-300 sm:text-2xl">
                  C++17
                </h3>
                <p className="leading-relaxed text-gray-300">
                  We chose C++17 as our primary language for Tasker, leveraging
                  Visual Studio for development and Qt Creator for UI design.
                  Since the project was completed shortly after our programming
                  fundamentals coursework, where C++ was heavily emphasized, it
                  was the language most of the team was comfortable and
                  productive with.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-xl font-semibold text-purple-300 sm:text-2xl">
                  Visual Studio 2019
                </h3>
                <p className="leading-relaxed text-gray-300">
                  We used Visual Studio as our primary IDE for backend
                  development. Its support for C++ projects and partial Qt
                  integration made it easy to manage our codebase and debug core
                  functionality. Once we transitioned to designing the user
                  interface, this setup allowed for a smooth migration to Qt
                  Creator without disrupting our workflow.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-xl font-semibold text-purple-300 sm:text-2xl">
                  GitHub & CircleCI
                </h3>
                <p className="leading-relaxed text-gray-300">
                  As part of our Agile workflow, we used GitHub to coordinate
                  changes and manage our codebase. To support continuous
                  integration, we set up CircleCI to run automated tests and
                  builds on every commit, ensuring our code remained stable and
                  that issues were caught early in development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          role="region"
          aria-label="Screenshot Gallery"
          className={sectionCardClasses}
        >
          <h2 className={sectionHeadingClasses}>Screenshots</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure className="mx-auto flex max-w-xl flex-col items-center space-y-2">
              <Image
                src="/tasker/main_screen.png"
                alt="Tasker main screen showing imported tasks"
                width={795}
                height={626}
                className="h-auto w-full rounded-lg object-contain shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-300">
                Main Tasker screen with imported tasks
              </figcaption>
            </figure>

            <figure className="mx-auto flex max-w-xl flex-col items-center space-y-2">
              <Image
                src="/tasker/ics_import.png"
                alt="Tasker calendar import dialog"
                width={799}
                height={631}
                className="h-auto w-full rounded-lg object-contain shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-300">
                Calendar import dialog with .ics selection
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={sectionCardClasses}>
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="mb-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-start sm:gap-3 sm:text-left">
              <FaClipboardList
                aria-hidden="true"
                focusable="false"
                className="shrink-0 text-xl text-purple-400"
              />
              <h2 className="max-w-xs text-xl font-semibold leading-tight text-purple-300 sm:max-w-none sm:text-2xl">
                Challenges & Lessons Learned
              </h2>
            </div>

            <p className="leading-relaxed text-gray-300">
              Tasker marked my second significant software project involving a
              graphical user interface. My previous experience was building a
              Minesweeper game from scratch using SFML, where I handled every
              pixel and event manually. Tasker, however, was my first time
              building a GUI within an actual GUI toolkit, using Qt&apos;s suite
              of widgets and layout tools. This leap introduced me to a
              different way of designing user experiences and set the stage for
              future work, like the Unity-based character creator I built in my
              Human-Computer Interaction course.
            </p>
            <p className="leading-relaxed text-gray-300">
              The steepest challenge was adopting a brand-new framework and
              integrating it with our existing C++ backend. Qt offers many
              high-level tools, like widgets, lists, and dialog boxes, that
              don&apos;t always mesh intuitively with C++ logic. Building and
              updating the dynamic task list in Qt was especially tricky, and
              required a lot of teamwork and experimentation. This experience
              taught me how to quickly learn and integrate unfamiliar
              technologies, and reinforced the importance of collaborative
              problem-solving in a team setting.
            </p>
            <p className="leading-relaxed text-gray-300">
              I also learned the value of simplicity in software solutions.
              While we initially considered integrating Tasker with Canvas
              through its API, we quickly realized that route was far too
              complex for our timeline and experience. Instead, using
              Canvas&apos;s calendar export proved to be an elegant, lightweight
              solution that allowed us to focus on core functionality and gave
              me valuable practice with file I/O in C++. In the end, Tasker was
              full of firsts: my first collaborative software project, my first
              hands-on use of Agile practices, and my first self-taught deep
              dive into a new framework. Though the project had its
              imperfections, it built a strong foundation for my later work,
              most notably my senior project Prettier-er.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
