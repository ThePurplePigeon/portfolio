"use client";

import { motion } from "framer-motion";
import { FaSlidersH, FaChartBar } from "react-icons/fa";

const toggles = [
  "Allman-style braces",
  "Force single/multi-line objects",
  "Matrix-style arrays",
  "One-line getters/setters",
  "New-line else/else-if",
  "Keep multi blank lines",
  "Retain blank lines anywhere",
  "Same-line CSS selectors",
];

const metrics = [
  "Average line length",
  "Average bracket depth",
  "Dot-chain length",
  "Identifiers per line",
  "Whitespace ratio",
  "Comment-to-code ratio",
  "Identifier-length check",
];

const Pill = ({ text }: { text: string }) => (
  <span
    className="
      inline-flex items-center justify-center
      whitespace-nowrap
      bg-gray-800 text-purple-100 text-sm
      px-3 py-1 rounded-full
      hover:bg-purple-600 hover:text-white
      focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500
      transition
      md:flex-1 md:basis-[48%]
    "
  >
    {text}
  </span>
);

export default function ProjectImpact() {
  return (
    <motion.section
      className="bg-gray-700 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <section aria-labelledby="toggles-heading">
          <div className="bg-gray-800/60 rounded-lg p-4">
            <header className="flex items-center mb-3">
              <FaSlidersH
                aria-hidden="true"
                focusable="false"
                className="text-purple-400 mr-3 text-xl"
              />
              <div>
                <h4 id="toggles-heading" className="text-xl font-semibold">
                  Custom Toggles
                </h4>
                <p className="text-sm text-gray-400 leading-tight">
                  Instant style tweaks
                </p>
              </div>
            </header>

            <div className="flex flex-wrap gap-3">
              {toggles.map((t) => (
                <Pill key={t} text={t} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="metrics-heading">
          <div className="bg-gray-800/60 rounded-lg p-4">
            <header className="flex items-center mb-3">
              <FaChartBar
                aria-hidden="true"
                focusable="false"
                className="text-purple-400 mr-3 text-xl"
              />
              <div>
                <h4 id="metrics-heading" className="text-xl font-semibold">
                  Readability Metrics
                </h4>
                <p className="text-sm text-gray-400 leading-tight">
                  Objective code checks
                </p>
              </div>
            </header>

            <div className="flex flex-wrap gap-3">
              {metrics.map((m) => (
                <Pill key={m} text={m} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
