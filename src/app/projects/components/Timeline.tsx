"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const journey: Array<{ title: string; body: ReactNode }> = [
  {
    title: "Origin",
    body: `Prettier-er started as a senior project idea. We wanted to build something more technical than a standard class web app, and Prettier gave us a concrete problem to work on: its defaults are useful, but they do not leave much room for teams that prefer a different style. After comparing a few ideas, we chose a customizable formatter because it was practical, technically interesting, and publishable as a VS Code extension.`,
  },
  {
    title: "Preliminary Research",
    body: (
      <>
        Before coding, we researched formatting styles that differed from
        Prettier&apos;s defaults and looked for measurable ways to discuss code
        readability. We reviewed academic papers and common readability
        guidelines, then used that research to shape the analyzer. We also moved
        the three Prettier forks under{" "}
        <a
          href="https://github.com/OpenMindedPrettier"
          className="underline decoration-gray-400 underline-offset-2 hover:decoration-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          a single GitHub organization
        </a>{" "}
        so the core, types, and extension repos were easier to manage together.
      </>
    ),
  },
  {
    title: "Sprint 1: Foundations",
    body: `Our first sprint was setup-heavy. We forked the Prettier projects, connected the core, types, and extension layers, and narrowed the first set of customization options. We also spent time reading through Prettier's source so we knew where formatting changes would need to happen.`,
  },
  {
    title: "Sprint 2: Initial Customizations",
    body: `With the repositories connected, we implemented the first formatting toggles. Those included options such as Allman-style braces and line breaks before else statements. We kept the work moving with Jira boards, regular scrums, pair programming, and pull request reviews.`,
  },
  {
    title: "Sprint 3: Readability Prep",
    body: `Sprint 3 focused on the readability analyzer. Over spring break, we split the research work across the team. Some members looked into readability metrics, while I worked on extracting useful data from the active file in VS Code. That pipeline became the base for the analyzer.`,
  },
  {
    title: "Sprint 4: Readability Analysis",
    body: `We then built the readability report itself. The extension collected metrics such as line length, identifier density, and nesting depth, then compared them against thresholds from the user's VS Code settings. Running the command produced a report showing which parts of the file were likely to be harder to read.`,
  },
  {
    title: "Finalizing the Project",
    body: `In the final sprint, we focused on testing, documentation, and cleanup. We added automated tests around the formatting changes, ran usability checks, and reviewed the codebase before packaging the extension.`,
  },
  {
    title: "Publishing & Showcase",
    body: `The last step was publishing Prettier-er to the VS Code Marketplace. We documented the publishing process, fixed the last small bugs we found, and packaged the extension for release. At the project showcase, we demonstrated the formatter, the VS Code settings, and the readability report.`,
  },
];

function JourneyPanel({ active }: { active: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25 }}
        className="rounded-lg bg-gray-800 p-5 shadow-lg sm:p-6"
      >
        <h4 className="mb-2 text-lg font-semibold text-purple-300 sm:text-xl">
          {journey[active].title}
        </h4>
        <div className="leading-relaxed text-gray-300">
          {journey[active].body}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Timeline() {
  const [active, setActive] = useState(0);
  const isFirst = active === 0;
  const isLast = active === journey.length - 1;

  return (
    <motion.div
      className="rounded-lg bg-gray-700 p-5 shadow-lg sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="mb-5 border-b border-purple-500 pb-2 text-xl font-semibold sm:mb-6 sm:text-2xl">
        Development Journey
      </h3>

      <div className="space-y-4 md:hidden">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous journey phase"
            disabled={isFirst}
            onClick={() => setActive((current) => Math.max(0, current - 1))}
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-md bg-gray-800 text-purple-200 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronLeft aria-hidden="true" focusable="false" />
          </button>

          <select
            aria-label="Select journey phase"
            value={active}
            onChange={(event) => setActive(Number(event.target.value))}
            className="min-w-0 flex-1 rounded-md border border-purple-500/40 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {journey.map((item, index) => (
              <option key={item.title} value={index}>
                {index + 1}. {item.title}
              </option>
            ))}
          </select>

          <button
            type="button"
            aria-label="Next journey phase"
            disabled={isLast}
            onClick={() =>
              setActive((current) => Math.min(journey.length - 1, current + 1))
            }
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-md bg-gray-800 text-purple-200 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaChevronRight aria-hidden="true" focusable="false" />
          </button>
        </div>

        <p className="text-center text-xs text-gray-400">
          Step {active + 1} of {journey.length}
        </p>

        <JourneyPanel active={active} />
      </div>

      <div className="hidden md:flex md:items-start md:gap-8">
        <nav className="relative md:w-2/5" aria-label="Development phases">
          <span className="absolute left-3 top-0 h-full w-[2px] bg-purple-500/40" />

          <ol className="max-h-[420px] space-y-2 overflow-y-auto pl-9 pr-2">
            {journey.map((item, index) => {
              const isActive = index === active;

              return (
                <li key={item.title}>
                  <button
                    type="button"
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => setActive(index)}
                    className={`group flex w-full items-start rounded-md py-2 pr-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isActive
                        ? "text-purple-300"
                        : "text-gray-200 hover:text-purple-200"
                    }`}
                  >
                    <span
                      className={`mr-3 mt-1.5 h-4 w-4 flex-none rounded-full transition-all ${
                        isActive
                          ? "bg-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]"
                          : "bg-gray-500 group-hover:bg-purple-300 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]"
                      }`}
                    />

                    <span
                      className={`font-semibold transition-all ${
                        isActive
                          ? "drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                          : "group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="md:w-3/5">
          <JourneyPanel active={active} />
        </div>
      </div>
    </motion.div>
  );
}
