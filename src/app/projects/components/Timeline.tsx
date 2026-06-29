"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const journey: Array<{ title: string; body: ReactNode }> = [
  {
    title: "Origin",
    body: `Prettier-er began as an effort to create a senior project that stood apart from typical web apps or trendy AI demos. We wanted something challenging yet widely useful. Given our shared frustrations with Prettier's inflexible formatting rules, a customizable formatter quickly emerged as an ideal choice. After briefly considering a document translation tool, we ultimately selected Prettier-er for its practicality, technical depth, and potential for real-world impact via the VS Code marketplace.`,
  },
  {
    title: "Preliminary Research",
    body: (
      <>
        Before coding, we researched formatting styles that differed from
        Prettier&apos;s defaults and explored methods to measure code readability
        objectively. Our process included reviewing academic papers and industry
        best practices to ensure the Readability Analysis feature had a strong
        research foundation. Additionally, we unified the three official
        Prettier repositories under{" "}
        <a
          href="https://github.com/OpenMindedPrettier"
          className="text-purple-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          a single GitHub organization
        </a>{" "}
        to streamline collaboration across the forked core, types, and
        extension repos.
      </>
    ),
  },
  {
    title: "Sprint 1: Foundations",
    body: `Our first sprint established the project's foundations. We set up our forks of Prettier and ensured seamless communication between the core, types, and extension layers. We also defined the scope for our customization features and pinpointed exactly where changes needed to be made within Prettier's source code. This initial deep dive set the stage for rapid development in subsequent sprints.`,
  },
  {
    title: "Sprint 2: Initial Customizations",
    body: `With our repos integrated and foundational work complete, we implemented the first batch of customization options. These included straightforward yet impactful toggles, such as line breaks before braces (Allman style) or before else statements. We maintained momentum by updating Jira storyboards, conducting regular scrums, and emphasizing pair programming and thorough pull request reviews to keep code quality high.`,
  },
  {
    title: "Sprint 3: Readability Prep",
    body: `Sprint 3 focused on groundwork for our Readability Analysis feature. Over spring break, we divided research tasks among the team. Some members examined readability metrics, while others, myself included, began creating a pipeline to extract relevant data directly from active files in the editor. Although technically challenging, this pipeline became essential infrastructure for our more advanced readability features.`,
  },
  {
    title: "Sprint 4: Readability Analysis",
    body: `Utilizing our earlier research, we fully developed the Readability Analysis tool. We implemented logic to collect metrics like line length, identifier density, and nesting depth, all backed by empirical evidence. These metrics were then tied to user-defined thresholds within VS Code settings. When triggered, our tool generated a detailed report highlighting any readability issues and providing actionable suggestions, representing a significant collaborative achievement for our team.`,
  },
  {
    title: "Finalizing the Project",
    body: `In the final sprint, we shifted focus to refinement and polish. We created automated tests to ensure our customization didn't disrupt existing Prettier functionality, conducted usability tests to gather early feedback, and thoroughly reviewed, documented, and cleaned up our codebase. This stage underscored the critical importance of testing, code clarity, and documentation, particularly in collaborative environments with tight deadlines.`,
  },
  {
    title: "Publishing & Showcase",
    body: `Our final goal was to successfully publish Prettier-er on the VS Code marketplace, which was a milestone surprisingly few teams reached. We documented the publishing process thoroughly, addressed minor bugs, and packaged the extension professionally. At the live project showcase, we demonstrated Prettier-er's capabilities and received overwhelmingly positive feedback for its practical value, completeness, and presentation quality. Ultimately, Prettier-er was a clear success, both as a software product and as an example of effective teamwork and execution.`,
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
