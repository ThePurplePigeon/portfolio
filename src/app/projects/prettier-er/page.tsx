"use client";
import Link from "next/link";
import Image from "next/image";
import Timeline from "@/app/projects/components/Timeline";
import Features from "@/app/projects/components/Features";
import { motion } from "framer-motion";
import { FaLightbulb, FaInfoCircle } from "react-icons/fa";


export default function PrettierErShowcase() {


  return (
    <main className="bg-gray-900 text-white min-h-screen p-8"
      style={{
        backgroundImage: "url('/prettier-er/prettierer_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="max-w-5xl mx-auto space-y-12">

        <section
          className="
            relative flex flex-col items-center justify-center h-screen overflow-hidden
            bg-gradient-to-br from-[#181a37] via-[#332d7c] to-[#384af2]
          "
        >
          <div className="relative z-10 text-center px-4 space-y-6">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Prettier-er
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl italic text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Your code, your style, on your terms.
            </motion.p>

            <motion.p
              className="max-w-xl mx-auto text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Customize Prettier's formatter to match your style, and stay readable with a single click.
            </motion.p>

            <motion.div
              className="flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                title="VS Code Extension Download Count"
                href="https://marketplace.visualstudio.com/items?itemName=omp.prettier-er"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://img.shields.io/visual-studio-marketplace/d/omp.prettier-er"
                  alt="VS Code Marketplace Downloads"
                  width={120}
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
                  src="https://img.shields.io/visual-studio-marketplace/i/omp.prettier-er"
                  alt="VS Code Marketplace Installs"
                  width={100}
                  height={20}
                  unoptimized
                />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                title="Open GitHub Repo"
                aria-label="Open GitHub Repo"
                href="https://github.com/OpenMindedPrettier"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 bg-opacity-60 rounded-full text-white font-semibold shadow-lg transition transform duration-150 hover:scale-110 hover:bg-gray-700"
              >
                View on GitHub
              </a>
              <a
                title="Open VS Code Marketplace"
                aria-label="Open VS Code Marketplace"
                href="https://marketplace.visualstudio.com/items?itemName=omp.prettier-er"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transform transition duration-150 hover:scale-105"
              >
                Get it on Marketplace
              </a>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-6 md:bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <svg
              role="img"
              aria-label="Scroll down"
              className="w-6 h-6 text-gray-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </section>

        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Project Overview</h2>

            <div className="space-y-12">

              <motion.div
                className="bg-gray-700 p-8 rounded-lg shadow-lg border-l-4 border-blue-500 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2 pb-2 border-b border-blue-500 group">
                  <FaInfoCircle
                    aria-hidden="true" focusable="false"
                    className="text-blue-400 mr-2 text-3xl transition-all duration-300 group-hover:text-blue-300"
                  />
                  <h3 className="text-2xl font-semibold">What is Prettier-er?</h3>
                </div>

                <p className="text-lg text-gray-300">
                  Prettier-er is a Visual Studio Code extension built on top of the popular Prettier formatter. While Prettier solves endless debates about code style by sticking to a single opinion, it leaves out anyone who wants even a bit of customization. If your preferred formatting style doesn't match Prettier's, you're usually stuck searching for workarounds or giving up altogether.
                </p>
                <p className="text-lg text-gray-300">
                  Prettier-er lets you control your code's appearance using simple VS Code workspace settings. Choose options like Allman-style braces, matrix-style arrays, or force objects and arrays to span multiple lines. These changes take effect instantly, and need no config files to manage.
                </p>
                <p className="text-lg text-gray-300">
                  On top of formatting, Prettier-er includes a Readability Analysis tool that reviews your code for potential problem areas. It checks things like average line length and nesting depth, and then offers suggestions to make your code easier to read.
                </p>
              </motion.div>



              <motion.div
                className="bg-gray-700 p-8 rounded-lg shadow-lg border-l-4 border-purple-500 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2 pb-2 border-b border-purple-500 group">
                  <FaLightbulb
                    aria-hidden="true" focusable="false"
                    className="text-purple-400 mr-2 text-3xl transition-all duration-300 group-hover:text-purple-300"
                  />
                  <h3 className="text-2xl font-semibold">Motivation</h3>
                </div>

                <p className="text-lg text-gray-300">
                  For our senior project, we wanted to solve a real problem, not just another web app demo. Prettier was an obvious target: its strict, one-size-fits-all approach annoyed anyone who needed even minor tweaks, while more flexible alternatives demanded heavy setup that most developers avoid.
                </p>

                <p className="text-lg text-gray-300">
                  Our answer was Prettier-er: an extension that keeps everything easy but gives you control over your formatting. Now, anyone can quickly set their favorite code style in VS Code and get real feedback on code clarity, whether they're a beginner or a seasoned dev.
                </p>
              </motion.div>



              <section id="development-journey" className="py-16">
                <Timeline />
              </section>


              <motion.div
                className="bg-gray-700 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold border-b border-purple-500 pb-2 mb-4">
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
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="
            text-3xl font-semibold text-center
            bg-white/30 px-4 py-2 rounded-xl
            inline-block
            shadow-md
            backdrop-blur
            ">Screenshots</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Original (unformatted)", file: "test_unformatted.png", alt: "Screenshot: original unformatted JavaScript snippet" },
              { label: "Prettier default", file: "test_prettier_formatted.png", alt:"Screenshot: same snippet after default Prettier formatting" },
              { label: "Prettier-er custom (All settings enabled)", file: "test_prettierer_formatted.png", alt:"Screenshot: same snippet after Prettier-er custom formatting" },
            ].map(({ label, file, alt }) => (
              <figure key={file} className="space-y-2 flex flex-col items-center">
                <Image
                  src={`/prettier-er/${file}`}
                  alt={alt}
                  width={700}
                  height={460}
                  className="rounded-lg shadow-lg object-cover"
                />
                <figcaption className="
                  text-sm text-white text-center
                  bg-black/70 px-3 py-1 rounded-lg
                  shadow
                  backdrop-blur
                ">
                  {label}
                </figcaption>

              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="
            text-3xl font-semibold text-center
            bg-white/30 px-4 py-2 rounded-xl
            inline-block
            shadow-md
            backdrop-blur
            ">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-3">
              <h3 className="text-xl font-semibold text-purple-200">
                Personalized One-Click Formatting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Instantly apply your favorite formatting styles directly through VS Code's built-in settings—no configuration files, no hassle. Customize your coding environment effortlessly, exactly the way you like it.
              </p>
            </div>


            <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-3">
              <h3 className="text-xl font-semibold text-purple-200">
                Real-Time Readability Analysis
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Get instant, actionable feedback on how readable your code really is. Prettier-er flags issues like excessive line length or confusing nesting, and offers tips to help you make your code clearer for yourself and your team.
              </p>
            </div>
          </div>
        </motion.section>



        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="
            text-3xl font-semibold text-center
            bg-white/30 px-4 py-2 rounded-xl
            inline-block
            shadow-md
            backdrop-blur
            ">Outcomes & Reflections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-blue-300 border-b border-blue-500 pb-2">
                What We Accomplished
              </h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-300 leading-relaxed">
                <li>
                  <strong>Shipped v1.0</strong> to the VS Code Marketplace.
                </li>
                <li>
                  Added <strong>eight zero-config style toggles</strong> (Allman, matrix arrays, blank-line retention …).
                </li>
                <li>
                  Built a <strong>research-backed readability analyzer </strong> with 7 tunable metrics.
                </li>
                <li>
                  Maintained <strong>100% unit-test pass rate</strong> across core, types & extension repos.
                </li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-purple-300 border-b border-purple-500 pb-2">
                What We Learned
              </h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-300 leading-relaxed">
                <li>
                  Deep dive into <strong>Prettier's AST printer</strong> taught us
                  that even “opinionated” tools can stay flexible with the right
                  hooks.
                </li>
                <li>
                  Publishing to the marketplace highlighted the value of
                  <strong> CI/CD & signed VSIX</strong> pipelines.
                </li>
                <li>
                  Agile ceremonies (two-week sprints, peer reviews) kept
                  5 developers and a mentor in sync & cut merge conflicts to near-zero.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>


        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects/prettier-er/docs"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-transform transform duration-150 hover:scale-105"
          >
            View Technical Documentation
          </Link>
        </motion.section>
      </section>
    </main>
  );
}
