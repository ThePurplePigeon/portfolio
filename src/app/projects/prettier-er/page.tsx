"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Timeline from "@/app/projects/components/Timeline";
import Features from "@/app/projects/components/Features";
import { AnimatePresence, motion } from "framer-motion";
import { FaInfoCircle, FaLightbulb } from "react-icons/fa";

const screenshots = [
  {
    label: "Original (unformatted)",
    file: "test_unformatted.png",
    alt: "Screenshot: original unformatted JavaScript snippet",
    width: 296,
    height: 344,
  },
  {
    label: "Prettier default",
    file: "test_prettier_formatted.png",
    alt: "Screenshot: same snippet after default Prettier formatting",
    width: 244,
    height: 455,
  },
  {
    label: "Prettier-er custom (All settings enabled)",
    file: "test_prettierer_formatted.png",
    alt: "Screenshot: same snippet after Prettier-er custom formatting",
    width: 297,
    height: 536,
  },
];

const heroPreviewIndex = 2;

const keyFeatures = [
  {
    title: "Personalized One-Click Formatting",
    body: "Apply formatting preferences through VS Code's built-in settings, without adding separate config files. The goal was to keep the workflow close to normal Prettier while still letting users choose a few style details.",
  },
  {
    title: "Real-Time Readability Analysis",
    body: "Run a readability check from the editor and see where a file may be getting harder to scan. Prettier-er looks at issues like long lines and deep nesting, then reports the areas that may need attention.",
  },
];

const outcomeCards = [
  {
    title: "What We Accomplished",
    headingClass: "text-blue-300 border-blue-500",
    items: [
      {
        id: "shipped",
        content: "Shipped v1.0 to the VS Code Marketplace.",
      },
      {
        id: "toggles",
        content:
          "Added eight zero-config style toggles including Allman, matrix arrays, and blank-line retention.",
      },
      {
        id: "readability",
        content:
          "Built a research-backed readability analyzer with 7 tunable metrics.",
      },
      {
        id: "tests",
        content:
          "Maintained 100% unit-test pass rate across core, types, and extension repos.",
      },
    ],
  },
  {
    title: "What We Learned",
    headingClass: "text-purple-300 border-purple-500",
    items: [
      {
        id: "ast-printer",
        content:
          'Deep diving into Prettier\'s AST printer taught us that even "opinionated" tools can stay flexible with the right hooks.',
      },
      {
        id: "publishing",
        content:
          "Publishing to the marketplace highlighted the value of CI/CD and signed VSIX pipelines.",
      },
      {
        id: "teamwork",
        content:
          "Agile ceremonies, peer reviews, and two-week sprints kept 5 developers and a mentor in sync while keeping merge conflicts low.",
      },
    ],
  },
];

const sectionHeadingClass =
  "mx-auto block w-fit rounded-xl bg-white/30 px-4 py-2 text-center text-2xl font-semibold shadow-md backdrop-blur sm:text-3xl";

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PrettierErShowcase() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const closePreviewButtonRef = useRef<HTMLButtonElement>(null);
  const preview = previewIndex === null ? null : screenshots[previewIndex];

  useEffect(() => {
    if (previewIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closePreviewButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewIndex]);

  return (
    <main className="min-h-screen bg-gray-900 p-4 text-white sm:p-8 md:bg-[url('/prettier-er/prettierer_background.png')] md:bg-cover md:bg-center md:bg-fixed">
      <section className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
        <motion.section
          className="overflow-hidden rounded-lg bg-gray-800/95 shadow-lg ring-1 ring-white/10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:items-center">
            <div className="space-y-5 text-center md:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                  Prettier-er
                </h1>
                <p className="text-lg italic text-gray-200 sm:text-xl md:text-2xl">
                  Your code, your style, on your terms.
                </p>
                <p className="mx-auto max-w-xl text-gray-300 md:mx-0">
                  Customize Prettier&apos;s formatter to match your style, and
                  stay readable with a single click.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <a
                  title="VS Code Extension Download Count"
                  href="https://marketplace.visualstudio.com/items?itemName=omp.prettier-er"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://vsmarketplacebadges.dev/downloads/omp.prettier-er.svg"
                    alt="VS Code Marketplace Downloads"
                    width={106}
                    height={20}
                    unoptimized
                  />
                </a>
                <a
                  title="VS Code Extension Install Count"
                  href="https://marketplace.visualstudio.com/items?itemName=omp.prettier-er"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://vsmarketplacebadges.dev/installs/omp.prettier-er.svg"
                    alt="VS Code Marketplace Installs"
                    width={86}
                    height={20}
                    unoptimized
                  />
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  title="Open GitHub Repo"
                  aria-label="Open GitHub Repo"
                  href="https://github.com/OpenMindedPrettier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gray-900/70 px-6 py-3 font-semibold text-white shadow-lg transition duration-150 hover:bg-gray-700 sm:w-auto"
                >
                  View on GitHub
                </a>
                <a
                  title="Open VS Code Marketplace"
                  aria-label="Open VS Code Marketplace"
                  href="https://marketplace.visualstudio.com/items?itemName=omp.prettier-er"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-150 hover:shadow-[0_0_18px_rgba(99,102,241,0.65)] sm:w-auto"
                >
                  Get it on Marketplace
                </a>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-md rounded-lg bg-gray-950/75 p-3 shadow-2xl ring-1 ring-white/10">
              <button
                type="button"
                aria-label="Open larger preview: custom formatting preview"
                onClick={() => setPreviewIndex(heroPreviewIndex)}
                className="group flex w-full cursor-zoom-in items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              >
                <Image
                  src="/prettier-er/test_prettierer_formatted.png"
                  alt="Prettier-er custom formatting output preview"
                  width={297}
                  height={536}
                  className="mx-auto max-h-64 w-auto max-w-full rounded-md object-contain transition duration-150 group-hover:scale-[1.02] sm:max-h-80 md:max-h-[360px]"
                  priority
                />
              </button>
              <figcaption className="mt-3 text-center text-sm text-gray-300">
                Custom formatting preview
              </figcaption>
            </figure>
          </div>
        </motion.section>

        <section className="rounded-lg bg-gray-800/95 py-8 text-white shadow-lg sm:py-16">
          <div className="mx-auto px-4 sm:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl">
              Project Overview
            </h2>

            <div className="space-y-8 sm:space-y-10">
              <motion.div
                className="space-y-4 rounded-lg border-l-4 border-blue-500 bg-gray-700 p-5 shadow-lg sm:p-8"
                {...cardMotion}
                transition={{ duration: 0.6 }}
              >
                <div className="group flex items-start border-b border-blue-500 pb-2">
                  <FaInfoCircle
                    aria-hidden="true"
                    focusable="false"
                    className="mr-2 mt-0.5 flex-none text-2xl text-blue-400 transition-all duration-300 group-hover:text-blue-300 sm:text-3xl"
                  />
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    What is Prettier-er?
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                  Prettier-er is a Visual Studio Code extension built on top of
                  the popular Prettier formatter. While Prettier solves endless
                  debates about code style by sticking to a single opinion, it
                  leaves out anyone who wants even a bit of customization. If
                  your preferred formatting style doesn&apos;t match Prettier&apos;s,
                  you&apos;re usually stuck searching for workarounds or giving up
                  altogether.
                </p>
                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                  Prettier-er lets you control your code&apos;s appearance using
                  simple VS Code workspace settings. Choose options like
                  Allman-style braces, matrix-style arrays, or force objects and
                  arrays to span multiple lines. These changes take effect
                  instantly, and need no config files to manage.
                </p>
                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                  On top of formatting, Prettier-er includes a Readability
                  Analysis tool that reviews your code for potential problem
                  areas. It checks things like average line length and nesting
                  depth, and then offers suggestions to make your code easier to
                  read.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4 rounded-lg border-l-4 border-purple-500 bg-gray-700 p-5 shadow-lg sm:p-8"
                {...cardMotion}
                transition={{ duration: 0.6 }}
              >
                <div className="group flex items-start border-b border-purple-500 pb-2">
                  <FaLightbulb
                    aria-hidden="true"
                    focusable="false"
                    className="mr-2 mt-0.5 flex-none text-2xl text-purple-400 transition-all duration-300 group-hover:text-purple-300 sm:text-3xl"
                  />
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    Motivation
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                  For our senior project, we wanted to solve a real problem, not
                  just another web app demo. Prettier was an obvious target: its
                  strict, one-size-fits-all approach annoyed anyone who needed
                  even minor tweaks, while more flexible alternatives demanded
                  heavy setup that most developers avoid.
                </p>

                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                  Our answer was Prettier-er: an extension that keeps everything
                  easy but gives you control over your formatting. Now, anyone
                  can quickly set their favorite code style in VS Code and get
                  real feedback on code clarity, whether they&apos;re a beginner or
                  a seasoned dev.
                </p>
              </motion.div>

              <section id="development-journey" className="py-1 sm:py-2">
                <Timeline />
              </section>

              <motion.div
                className="rounded-lg bg-gray-700 p-5 shadow-lg sm:p-8"
                {...cardMotion}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="mb-5 border-b border-purple-500 pb-2 text-xl font-semibold sm:text-2xl">
                  Project Impact
                </h3>
                <Features />
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section
          role="region"
          aria-label="Screenshot Gallery"
          className="space-y-6 text-center sm:space-y-8"
          {...cardMotion}
          transition={{ duration: 0.5 }}
        >
          <h2 className={sectionHeadingClass}>Screenshots</h2>

          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
            {screenshots.map(({ label, file, alt, width, height }, index) => (
              <figure
                key={file}
                className="flex w-full max-w-md flex-col items-center space-y-2 md:max-w-none"
              >
                <button
                  type="button"
                  aria-label={`Open larger preview: ${label}`}
                  onClick={() => setPreviewIndex(index)}
                  className="group flex h-72 w-full cursor-zoom-in items-center justify-center rounded-lg bg-gray-950/75 p-3 shadow-lg ring-1 ring-white/10 transition hover:ring-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 sm:h-80 md:h-72"
                >
                  <Image
                    src={`/prettier-er/${file}`}
                    alt={alt}
                    width={width}
                    height={height}
                    className="max-h-full w-auto max-w-full rounded-md object-contain transition duration-150 group-hover:scale-[1.02]"
                  />
                </button>
                <figcaption className="rounded-lg bg-black/70 px-3 py-1 text-center text-sm text-white shadow backdrop-blur">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-6 text-center sm:space-y-8"
          {...cardMotion}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className={sectionHeadingClass}>Key Features</h2>

          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-8">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="w-full max-w-xl space-y-3 rounded-lg bg-gray-700 p-5 text-left shadow-lg sm:p-6"
              >
                <h3 className="text-xl font-semibold text-purple-200">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-300">{feature.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-6 text-center sm:space-y-8"
          {...cardMotion}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className={sectionHeadingClass}>Outcomes &amp; Reflections</h2>

          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-8">
            {outcomeCards.map((card) => (
              <div
                key={card.title}
                className="w-full max-w-xl space-y-4 rounded-lg bg-gray-700 p-5 text-left shadow-lg sm:p-6"
              >
                <h3
                  className={`border-b pb-2 text-xl font-semibold ${card.headingClass}`}
                >
                  {card.title}
                </h3>
                <ul className="ml-5 list-disc space-y-2 leading-relaxed text-gray-300">
                  {card.items.map((item) => (
                    <li key={item.id}>{item.content}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          {...cardMotion}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/projects/prettier-er/docs"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition duration-150 hover:shadow-[0_0_18px_rgba(99,102,241,0.65)]"
          >
            View Technical Documentation
          </Link>
        </motion.section>
      </section>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              aria-label="Close screenshot preview"
              className="absolute inset-0 cursor-default bg-black/85"
              onClick={() => setPreviewIndex(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="screenshot-preview-title"
              className="relative flex max-h-[88vh] max-w-[94vw] flex-col rounded-lg bg-gray-900 shadow-2xl ring-1 ring-white/15"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                <h3
                  id="screenshot-preview-title"
                  className="text-left text-base font-semibold text-white sm:text-lg"
                >
                  {preview.label}
                </h3>
                <button
                  type="button"
                  ref={closePreviewButtonRef}
                  onClick={() => setPreviewIndex(null)}
                  className="inline-flex min-h-10 items-center justify-center rounded-md bg-gray-800 px-3 text-sm font-semibold text-gray-100 transition hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  Close
                </button>
              </div>

              <div className="overflow-auto p-3 sm:p-5">
                <Image
                  src={`/prettier-er/${preview.file}`}
                  alt={preview.alt}
                  width={preview.width}
                  height={preview.height}
                  className="h-auto max-w-none rounded-md object-contain"
                  style={{ width: "min(88vw, 760px)" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
