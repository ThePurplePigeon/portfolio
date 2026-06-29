"use client";

import { FaChartBar, FaSlidersH } from "react-icons/fa";

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
  <span className="inline-flex min-h-8 max-w-full items-center justify-center whitespace-normal break-words rounded-full bg-gray-800 px-3 py-1 text-center text-sm leading-snug text-purple-100 transition hover:bg-purple-600 hover:text-white sm:whitespace-nowrap md:flex-1 md:basis-[48%]">
    {text}
  </span>
);

export default function ProjectImpact() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
      <section aria-labelledby="toggles-heading" className="h-full">
        <div className="h-full rounded-lg bg-gray-800/60 p-4 sm:p-5">
          <header className="mb-4 flex items-start gap-3">
            <FaSlidersH
              aria-hidden="true"
              focusable="false"
              className="mt-1 flex-none text-xl text-purple-400"
            />
            <div>
              <h4 id="toggles-heading" className="text-lg font-semibold sm:text-xl">
                Custom Toggles
              </h4>
              <p className="text-sm leading-tight text-gray-400">
                Instant style tweaks
              </p>
            </div>
          </header>

          <div className="flex flex-wrap justify-center gap-2.5 sm:justify-start sm:gap-3">
            {toggles.map((toggle) => (
              <Pill key={toggle} text={toggle} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="metrics-heading" className="h-full">
        <div className="h-full rounded-lg bg-gray-800/60 p-4 sm:p-5">
          <header className="mb-4 flex items-start gap-3">
            <FaChartBar
              aria-hidden="true"
              focusable="false"
              className="mt-1 flex-none text-xl text-purple-400"
            />
            <div>
              <h4 id="metrics-heading" className="text-lg font-semibold sm:text-xl">
                Readability Metrics
              </h4>
              <p className="text-sm leading-tight text-gray-400">
                Objective code checks
              </p>
            </div>
          </header>

          <div className="flex flex-wrap justify-center gap-2.5 sm:justify-start sm:gap-3">
            {metrics.map((metric) => (
              <Pill key={metric} text={metric} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
