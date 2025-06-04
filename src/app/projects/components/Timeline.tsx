"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* timeline entries */
const journey = [
  {
    title: "Origin",
    body: `Prettier-er began as an effort to create a senior project that stood apart from typical web apps or trendy AI demos. We wanted something challenging yet widely useful. Given our shared frustrations with Prettier's inflexible formatting rules, a customizable formatter quickly emerged as an ideal choice. After briefly considering a document translation tool, we ultimately selected Prettier-er for its practicality, technical depth, and potential for real-world impact via the VS Code marketplace.`,
  },
  {
    title: "Preliminary Research",
    body: (
      <>
        Before coding, we researched formatting styles that differed from Prettier's defaults and explored methods to measure code readability objectively. Our process included reviewing academic papers and industry best practices to ensure the Readability Analysis feature had a strong research foundation. Additionally, we unified the three official Prettier repositories under{" "}
        <a
          href="https://github.com/OpenMindedPrettier"
          className="text-purple-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          a single GitHub organization
        </a>{" "}
        to streamline collaboration across the forked core, types, and extension repos.
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


export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      className="bg-gray-700 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold border-b border-purple-500 pb-2 mb-6">
        Development Journey
      </h3>

      {/* ⅓ / ⅔ layout */}
      <div className="flex flex-col md:flex-row md:items-center">
        {/* left column (timeline) */}
        <div className="md:w-2/5 relative pr-2 mb-8 md:mb-0">
          <span className="hidden md:block absolute left-3 top-0 h-full w-[2px] bg-purple-500/40" />

          <ul
            className="space-y-8 md:max-h-[420px] md:overflow-y-auto pl-8 md:pl-10"
            role="listbox"
          >
            {journey.map((item, idx) => {
              const isActive = idx === active;
              return (
                <li
                  key={item.title}
                  role="option"
                  aria-selected={isActive}
                  tabIndex={0}
                  className="group cursor-pointer select-none flex items-start"
                  onClick={() => setActive(idx)}
                >
                  {/* dot */}
                  <span
                    className={`mt-1.5 mr-3 h-4 w-4 rounded-full transition-all ${
                      isActive
                        ? "bg-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]"
                        : "bg-gray-500 group-hover:bg-purple-300 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]"
                    }`}
                  />

                  {/* label */}
                  <h4
                    className={`font-semibold transition-all ${
                      isActive
                        ? "text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                        : "text-gray-200 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                    }`}
                  >
                    {item.title}
                  </h4>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right column (details) */}
        <div className="md:w-3/5 mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold text-purple-300 mb-2">
                {journey[active].title}
              </h4>
              <div className="text-gray-300 leading-relaxed">
                {journey[active].body}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
