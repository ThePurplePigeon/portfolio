"use client"

import { motion } from'framer-motion'

export default function DocsPage () {

  return (
    <div className="bg-[#0f172a] min-h-screen w-full">
      <main className="text-gray-200 py-16 px-6 md:px-12 max-w-5xl mx-auto space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Prettier-er
            </span>
            Internals & Documentation
          </h1>

<p className="mt-6 text-lg text-gray-400"> A technical walkthrough of how Prettier-er extends formatting behavior and evaluates readability, with implementation notes, analysis metrics, and usage examples. </p>
        </motion.div>

        <section id="table-of-contents" className="mt-16">
          <h2 className="text-2xl font-bold text-purple-300 border-b border-gray-700 pb-2 mb-4">
            Table of Contents
          </h2>
          <ul className="list-disc text-gray-400 ml-6 space-y-1">

            <li>
              <a href="#formatting-additions" className="hover:text-purple-400">
                Formatting Additions
              </a>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li><a href="#how-formatting-works" className="hover:text-purple-400">How Formatting Works</a></li>
                <li>
                  <a href="#formatting-features" className="hover:text-purple-400">Formatting Features</a>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li><a href="#allman-style" className="hover:text-purple-400">Allman Style</a></li>
                    <li><a href="#force-object-style" className="hover:text-purple-400">Force Object Literals</a></li>
                    <li><a href="#matrix-arrays" className="hover:text-purple-400">Matrix-style Arrays</a></li>
                    <li><a href="#one-line-getters-setters" className="hover:text-purple-400">One-line Getters/Setters</a></li>
                    <li><a href="#newline-else" className="hover:text-purple-400">New Line Else</a></li>
                    <li><a href="#keep-multiple-blank-lines" className="hover:text-purple-400">Block Padding</a></li>
                    <li><a href="#retain-blank-lines" className="hover:text-purple-400">General Whitespace</a></li>
                    <li><a href="#same-line-selectors" className="hover:text-purple-400">Same-Line Selectors</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#analysis-additions" className="hover:text-purple-400">
                Readability Analysis
              </a>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li><a href="#readability-how" className="hover:text-purple-400">How It Works</a></li>
                <li><a href="#readability-options" className="hover:text-purple-400">Metric Options</a></li>
                <li>
                  <a href="#metric-interpretations" className="hover:text-purple-400">Metric Interpretations</a>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li><a href="#line-length" className="hover:text-purple-400">Line Length</a></li>
                    <li><a href="#nesting-count" className="hover:text-purple-400">Nesting Count</a></li>
                    <li><a href="#member-accessor" className="hover:text-purple-400">Member Accessor Count</a></li>
                    <li><a href="#comment-to-code" className="hover:text-purple-400">Comment to Code Ratio</a></li>
                    <li><a href="#whitespace-ratio" className="hover:text-purple-400">Whitespace Ratio</a></li>
                    <li><a href="#identifier-count" className="hover:text-purple-400">Identifier Count</a></li>
                    <li><a href="#identifier-min-length" className="hover:text-purple-400">Identifier Min Length</a></li>
                  </ul>
                </li>
              </ul>
            </li>

          </ul>
        </section>



        <section id="formatting-additions" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-purple-300 border-b border-gray-700 pb-2 mb-6">
              Formatting Additions
            </h2>
<p className="text-gray-400 text-lg"> Prettier-er's primary contribution is a set of new formatting behaviors that replicate popular code styles not supported by default. The following section details how these options were implemented at the code level, and how users can configure them directly in their VS Code workspace settings. </p>
          </div>

          <section id="how-formatting-works" className="max-w-5xl mx-auto mt-16 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-purple-400 border-b border-gray-700 pb-2 mb-6">
                How Formatting Works
              </h3>

              {/* Chapter 1: Repositories & Their Roles */}
              <section id="repos-and-roles" className="mb-12">
                <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                  1. Repositories & Their Roles
                </h4>
                <div className="text-lg text-gray-300 space-y-4">
                  Prettier-er uses three components to make the extension work, stored in three separate repositories. These are:
                  <ul className="list-disc ml-8 space-y-2">
                    <li>
                      <a
                        href="https://github.com/OpenMindedPrettier/prettier-vscode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-purple-300 underline hover:text-blue-300"
                      >
                        VS Code Extension: 
                      </a>
                      A fork of the Prettier extension repo, which integrates the core into VS Code, allowing it to be called by the user. It loads user settings, resolves configuration, invokes the core formatter, and returns the formatted result to the editor.
                    </li>
                    <li>
                      <a
                        href="https://github.com/OpenMindedPrettier/types-prettier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-purple-300 underline hover:text-blue-300"
                      >
                        Custom Types Definitions: 
                      </a>
                      TypeScript definitions that describe all Prettier-er options, keeping both the extension and the core in sync.
                    </li>
                    <li>
                      <a
                        href="https://github.com/OpenMindedPrettier/prettier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-purple-300 underline hover:text-blue-300"
                      >
                        Prettier Core:
                      </a>
                      A fork of Prettier that contains the formatting engine. The core implements all formatting logic; from parsing the AST to printing the formatted code.
                    </li>
                  </ul>

                  <h4 className="text-xl font-bold text-blue-300 mt-8 mb-2">
                    Prettier-er Core: The Formatting Engine
                  </h4>
<p className="text-gray-400 mb-6"> The Prettier-er core is the engine that actually formats code. It is directly forked from Prettier's architecture, but includes several optional formatting features. Its responsibilities are to parse the source text sent by the extension and reformat using the passed through settings. </p>
<p className="text-gray-400 mb-6"> Prettier-er doesn't change how Prettier parses the text. Rather, it adds new logic that changes how the text is reprinted after being converted into an AST. These will be discussed in the next section. </p>
<p className="text-gray-400 mb-6"> The Core's formatting logic checks against several settings sent by VS Code when invoked, which are used to customize the output. For example, if <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-base">options.allmanStyle</code> is true (meaning the user has enabled their Allman Style setting), then when printing compatible language blocks, like JavaScript and CSS, Prettier uses that true value to add a new line character before opening braces. </p>

                  <h4 className="text-xl font-bold text-blue-300 mt-8 mb-2">
                    Types Definitions: Option Contracts & Synchronization
                  </h4>
<p className="text-gray-400 mb-6"> This repository contains the TypeScript type definitions for Prettier-er. Since the core formatter is written in JavaScript, a separate .d.ts file provides static types for its API and options. These definitions ensure that all parts of the system agree on option names and types. </p>
<p className="text-gray-400 mb-6"> This was the least changed of the three repositories, only serving as a place we added any new setting that the formatter needed to care about. It exports interfaces/types for the Prettier-er API, including the new fields, like forceObjectBreak, allmanStyle, matrixArray, and the others, all with the appropriate types to match the allowed values. </p>
<p className="text-gray-400 mb-6"> The extension also consumes these definitions by referencing @types/prettier. In fact, in the extension's package.json, the dependency for @types/prettier is pointed to the repository. This means that when the extension's TS code imports prettier, it takes in the custom .d.ts, so the new options are recognized, keeping the extension in sync with the core. </p>
<p className="text-gray-400 mb-6"> For example: if the extension calls the format command, and passes in <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-base">{`{allmanStyle: true}`}</code>, the types ensure that allmanStyle is accepted with no type errors, and is the correct type (boolean). If the type definitions weren't updated, the extension either wouldn't compile, or would be forced to cast all those fields to any. </p>
<p className="text-gray-400 mb-6"> In summary, types-prettier makes the extension and the core communicate smoothly, working like a contract between the two. </p>

                  <h4 className="text-xl font-bold text-blue-300 mt-8 mb-2">
                    VS Code Extension: User Interface & Integration
                  </h4>
<p className="text-gray-400 mb-6"> This is the repository that stores all the code for the extension itself, meaning technically the source code for the other two repositories is also present here, tucked away in <code>node_modules</code> and compiled <code>index.js</code> files. This component acts as the glue that connects VS Code to the rest of the system, allowing the user to invoke Prettier-er formatting, change style settings, and run Readability Analysis (explained in its own section later). </p>
<p className="text-gray-400 mb-6"> The responsibilities of this component are: </p>
                  <ul className="list-disc ml-8 space-y-2">
                    <li>
                      <span className="font-semibold text-purple-300">Settings UI:</span>
                      Declare and document configuration options in VS Code's workspace settings UI.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-300">Configuration Resolution:</span>
                      Read and merge user configuration from both VS Code settings and Prettier config files.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-300">Formatter Selection:</span>
                      Decide which Prettier module to run.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-300">Formatter Invocation:</span>
                      Invoke the Prettier-er formatter with the resolved options.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-300">Editor Integration:</span>
                      Apply the formatted result to the active editor window.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-300">Command Registration:</span>
                      Implement editor commands like <code>Format Document</code> and <code>Analyze Document (Metrics)</code>.
                    </li>
                  </ul>
<p className="text-gray-400 mb-6"> In short, this component handles acquiring all the relevant data from the editor and workspace settings, packages it up, and sends it to the core formatter. Once the formatted string is returned, it updates the open document in the editor with the new text. For more details on how Readability Analysis works in this component, see the dedicated section below. </p>
                </div>
              </section>

              {/* Chapter 2: Formatting Pipeline */}
              <section id="formatting-pipeline">
                <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                  2. Formatting Pipeline
                </h4>
                <div className="text-lg text-gray-300 space-y-4">
<p className="text-gray-400 mb-6"> Now that we've covered the structure of the system, let's look at how a document actually moves through it, from unformatted source to clean, styled output. </p>
<p className="text-gray-400 mb-6"> Below is a general overview of the full data pipeline of Prettier-er, from when the user calls for a format, to when the user sees the formatted document. </p>
<p className="text-gray-400 mb-6"> The process begins with the user's settings. For Prettier-er's custom formatting logic, the important source for these are VS Code's workspace settings. These settings are defined in the extension's package manifest. </p>
<p className="text-gray-400 mb-6"> The extension, running within VS Code, reads in the config. It prioritizes local settings over global config. When finished, it has a complete set of option values, including any defaults for values not set explicitly by the user in any of the sources. </p>
<p className="text-gray-400 mb-6"> The extension then determines the appropriate Prettier module, and ensures that any needed plugins are also loaded. </p>
<p className="text-gray-400 mb-6"> The extension can finally call the Core using <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-base">prettier.format</code> with the source code and the options object. Thanks to the custom types, the extension passes exactly the fields Prettier-er expects, including base Prettier and custom Prettier-er options, in the correct types. From here, control moves to the Prettier-er Core. </p>
<p className="text-gray-400 mb-6"> The Prettier-er Core parses the document text from the extension into an AST, then unfolds the tree back into a string. This unfolding, or "printing" as it's called in the code, is where the formatting occurs. For example, if <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-base">options.allmanStyle</code> is enabled, then Prettier-er will insert a newline character before any <span className="font-mono text-green-400">{'{'}</span> in the code. But, this is only done in the printing process; nothing is done to the document when being converted into the AST. </p>
<p className="text-gray-400 mb-6"> After printing is complete, the Core sends back a formatted string to the extension, as the return value of <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-base">prettier.format</code>. The extension compares this string to the original text. If it's different, it creates a text edit. It then applies the edit to the editor buffer, and the user's document is updated with the formatted code. </p>
<p className="text-gray-400 mb-6"> The cycle ends here. The user has their newly formatted code, and can choose to save the changes, or with an undo action, can revert to the code prior to formatting. </p>
                </div>
              </section>
            </motion.div>
          </section>

          <section id="formatting-features" className="max-w-5xl mx-auto mt-16 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-purple-400 border-b border-gray-700 pb-2 mb-6">
                Formatting Features
              </h3>
              <div className="text-lg text-gray-300 space-y-4">
<p className="text-gray-400"> Prettier-er's primary goal is to give developers a simple way to make their code clean and uniquely their own. Below you'll find each formatting enhancement introduced by Prettier-er, with real examples of how they affect your code. </p>

                {/* Allman Style */}
                <section id="allman-style" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1">
                    Allman Style
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> This option places opening braces <b>on their own line</b> rather than immediately after the preceding statement. This is known as Allman style. It's a classic approach for making code feel more spacious without relying on extra blank lines. </p>
<p> Prettier-er introduces an <b>Allman Style</b> toggle for JavaScript, TypeScript, and even a “pseudo Allman” for CSS. When enabled, you'll see a newline before opening braces in compatible structures like functions, loops, and conditionals. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Prettier Default</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code className="text-white font-mono">{`function foo() {\n  bar();\n}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">With Allman Style Enabled</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code className="text-white font-mono">{`function foo()\n{\n  bar();\n}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Force Object Literals */}
                <section id="force-object-style" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Force Object Literals to One or Multiple Lines
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> By default, Prettier formats object literals by expanding or collapsing based on where you've placed line breaks. This means objects are styled literal by literal, which can be annoying to manage, especially across a large codebase.{''} <a href="https://prettier.io/docs/rationale#multi-line-objects" target="_blank" rel="noopener noreferrer" className="text-purple-300 underline hover:text-blue-300" > (See Prettier's rationale) </a> </p>
<p> Prettier-er introduces the <code className="text-green-400">forceObjectBreak</code> setting, which lets you decide: <span className="text-purple-300 font-semibold">preserve</span> (default, follows Prettier's logic), <span className="text-purple-300 font-semibold">forceSingleLine</span> (all objects on one line), or <span className="text-purple-300 font-semibold">forceMultiLine</span> (every property gets its own line). </p>
<p> This makes it easy to enforce a consistent style, especially for teams or in projects where object formatting is a code review sticking point. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Force Single Line</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const options = { foo: 1, bar: 2 };`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Force Multi-Line</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const options = {\n  foo: 1,\n  bar: 2\n};`}</code>
                        </pre>
                      </div>
                      <div className="pt-4 border-t border-gray-700">
                        <p className="text-sm text-purple-300 mb-1">Preserve: Before (expands to multi-line)</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const user = {\n name: "John Doe", age: 30 };`}</code>
                        </pre>
                        <p className="text-sm text-purple-300 mb-1">Preserve: After</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const user = {\n  name: "John Doe",\n  age: 30,\n};`}</code>
                        </pre>
                        <p className="text-sm text-purple-300 mt-6 mb-1">Preserve: Before (compacts to single line)</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const user = {  name: "John Doe",\n  age: 30\n};`}</code>
                        </pre>
                        <p className="text-sm text-purple-300 mb-1">Preserve: After</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const user = { name: "John Doe", age: 30 };`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Matrix-style Arrays */}
                <section id="matrix-arrays" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Matrix-style Arrays
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> Multi-dimensional data is much easier to scan when formatted visually as a matrix. Prettier-er's <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm mx-1">matrixArray</code> option enables this, <b>but only when you signal it</b> with line breaks in your source. </p>
<p> With <b>Matrix Array</b> enabled, any array that already includes newlines between elements will be formatted as a “grid,” preserving the visual structure. Arrays written on a single line (or with no manual matrix intent) remain unchanged. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Standard Array</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const grid = [1, 2, 3, 4];`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Matrix Array Formatting</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`const grid = [\n  1, 2,\n  3, 4,\n];`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* One-line Getters/Setters */}
                <section id="one-line-getters-setters" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    One-line Getters &amp; Setters
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> This toggle compresses trivial getter and setter functions to a single line. If a getter/setter has only one short statement and no internal comments, Prettier-er collapses it for readability. </p>
<p> For longer, multi-statement, or commented functions, this setting won't apply. The focus is on cutting down vertical clutter for boilerplate code. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Before</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`get name() {\n  return this._name;\n}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">After (One-line)</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`get name() { return this._name; }`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* New Line Else */}
                <section id="newline-else" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    New Line Else Statement
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> Normally, Prettier places <code className="text-green-400">else</code> or <code className="text-green-400">else if</code> directly after the closing brace of the preceding <code className="text-green-400">if</code>. Prettier-er's toggle inserts a newline before these keywords, emphasizing branch boundaries for more readable logic. </p>
<p> This is particularly helpful in large or complex conditionals. When used with Allman Style, <code className="text-green-400">else</code> ends up on its own line, further clarifying the structure. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Prettier Default</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`if (x > 0) {\n  doSomething();\n} else {\n  doSomethingElse();\n}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">With New Line Else Enabled</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`if (x > 0) {\n  doSomething();\n}\nelse {\n  doSomethingElse();\n}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Keep Multiple Blank Lines */}
                <section id="keep-multiple-blank-lines" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Keep Multiple Blank Lines (Block Padding)
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> By default, Prettier collapses consecutive blank lines down to one, even if the developer inserted them intentionally. Prettier-er's <b>Keep Multiple Blank Lines</b> toggle preserves those blank lines at the <b>start</b> or <b>end</b> of code blocks (like functions or classes). </p>
<p> This is helpful when you want visual separation around important logic, or to group code by intention. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Before (with blank lines, MBL on)</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`function example() {\n\n\n  const x = 5;\n}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Prettier Default</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`function example() {\n  const x = 5;\n}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Retain Blank Lines */}
                <section id="retain-blank-lines" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Retain Blank Lines (General Whitespace)
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> <b>Retain Blank Lines</b> expands on block padding: it tells Prettier-er to preserve consecutive blank lines <b>anywhere</b> in your code, including between top-level declarations, imports, and function definitions. </p>
<p> For large files, this is an easy way to visually segment unrelated sections or functions, without constantly fighting the formatter. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Before (with blank lines, RBL on)</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`function foo() {\n  return 1;\n}\n\n\n\n\nfunction bar() {\n  return 2;\n}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Prettier Default</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`function foo() {\n  return 1;\n}\n\nfunction bar() {\n  return 2;\n}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Same-Line Selectors */}
                <section id="same-line-selectors" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Same-Line Selectors (CSS)
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 text-gray-400 space-y-4">
<p> In CSS, selectors are usually listed one per line for clarity, especially when deeply nested. But this can be a bit much for simple rulesets. </p>
<p> Prettier-er's toggle enables a compact style: <b>multiple selectors on the same line</b>, separated by commas. Useful for short, related selectors that share a rule and don't need individual emphasis. </p>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <div>
                        <p className="text-sm text-purple-300 mb-1">Prettier Default</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`h1,\nh2,\nh3 {\n  font-weight: bold;\n}`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm text-purple-300 mb-1">With Same-Line Selectors Enabled</p>
                        <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                          <code>{`h1, h2, h3 {\n  font-weight: bold;\n}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </section>




        </section>

        <section id="analysis-additions" className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-purple-300 border-b border-gray-700 pb-2 mb-6">
              Readability Analysis Tool
            </h2>
<p className="text-gray-400 text-lg"> In addition to formatting, Prettier-er offers a research-backed readability analysis tool. It scans your code for subtle patterns—like long lines, dense nesting, or poor spacing—that can quietly reduce clarity. The following sections explain how the analysis works and how to interpret its results. </p>



          </div>

          <section id="readability-how" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
              How Readability Analysis Works
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-full text-gray-400 space-y-4 text-lg">
<p> The analysis is performed entirely within the VS Code extension, without ever invoking the Prettier core. When run, it processes your code line by line, using structural metrics from the literature to highlight patterns that might increase cognitive overhead—not to enforce arbitrary rules, but to help you write clearer, more maintainable code. </p>


<p> The process begins when VS Code passes the document to the analysis tool via a command, just as it does for formatting. The tool reads the document line by line, constructing lightweight objects for each line that record its type and any relevant metrics. </p>

<p> Once all lines are processed, the analysis tool calculates averages for most metrics and tracks counts for ratio-based metrics (such as empty lines or comment lines). These are then divided as appropriate to produce the final ratios. More details on the calculation of each metric appear later in this documentation. </p>

<p> After computing the metrics, the tool checks each against user-defined thresholds in the workspace settings, allowing full control over analysis strictness. Any thresholds that are exceeded are reported, along with suggestions for improvement. The tool also performs a simple statistical check to flag outlier lines that may be disproportionately affecting a given metric. </p>

<p> The resulting analysis is written to a string and displayed in a new, unsaved tab in the editor window, ensuring that reports don't clutter your workspace. </p>

              </div>
            </div>
          </section>

          <section id="readability-options" className="max-w-5xl mx-auto mt-16 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-purple-400 border-b border-gray-700 pb-2 mb-6">
                Readability Analysis Options
              </h3>
              <div className="text-lg text-gray-300 space-y-4">

<p> Every analysis metric in Prettier-er is fully configurable through your workspace settings, just like its formatting options. When you run readability analysis, each metric is checked against your chosen thresholds (with sensible defaults that work for most projects). But true to Prettier-er's philosophy, you're free to tighten or relax any rule to fit your team or personal style. Below you'll find every available option and what it controls. Guidance for interpreting the results comes in the next section. </p>


                {/* Individual Options */}
                <section id="line-length-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Line Length Threshold <span className="text-sm text-gray-400 ml-4">(default: 40)</span>
                  </h4>
<p> Average characters per line. Raise to allow longer lines; lower to encourage wrapping. (Blank and comment lines count toward the average.) </p>
                </section>

                <section id="nesting-count-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Nesting Count Threshold <span className="text-sm text-gray-400 ml-4">(default: 1)</span>
                  </h4>
<p> Average opening curly braces {'{'} per line. Raise to permit deeper inline nesting; lower to flatten code. </p>
                </section>

                <section id="member-accessor-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Member Accessor Threshold <span className="text-sm text-gray-400 ml-4">(default: 1)</span>

                  </h4>
<p> Average identifier-following dots (.) per line. Raise to permit longer chains; lower to split them up. </p>
                </section>

                <section id="comment-to-code-ratio-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Comment-to-Code Ratio Threshold <span className="text-sm text-gray-400 ml-4">(default: 0.3)</span>
                  </h4>
<p> Ratio of comment-only lines to code-only lines. Raise the value to make the rule stricter; lower it if you're comfortable with fewer comments. (The analysis warns when the ratio drops <strong>below</strong> this value) </p>
                </section>

                <section id="whitespace-ratio-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Whitespace Ratio Threshold <span className="text-sm text-gray-400 ml-4">(default: 0.2)</span>
                  </h4>
<p> Ratio of empty lines to non-empty lines. Raise the value to force more whitespace; lower it to allow denser code. (The analysis warns when the ratio drops <strong>below</strong> this value) </p>
                </section>

                <section id="identifier-count-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Identifier Count Threshold <span className="text-sm text-gray-400 ml-4">(default: 2)</span>
                  </h4>
<p> Average identifiers per line. Raise to tolerate denser expressions; lower for simpler lines. </p>
                </section>

                <section id="identifier-min-length-threshold" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1 flex items-center">
                    Identifier Minimum Length Threshold <span className="text-sm text-gray-400 ml-4">(default: 2)</span>
                  </h4>
<p> Shortest allowed identifier length. Raise to flag longer names; lower to allow shorter ones. </p>
                </section>
              </div>
            </motion.div>
          </section>

          <section id="metric-interpretations" className="max-w-5xl mx-auto mt-16 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-purple-400 border-b border-gray-700 pb-2 mb-6">
                Interpreting Readability Metrics
              </h3>
              <div className="text-lg text-gray-300 space-y-4">
<p> When a metric in your code breaks its configured threshold, it doesn't mean you've made a mistake. A flag isn't a failure, it simply means one of your metrics exceeded its threshold. Because all thresholds are yours to tune, treat the report as a suggestion, not a verdict. </p>

                <section id="line-length" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1">
                    Line Length
                  </h4>
                  <div className="text-gray-400 space-y-4">
<p> Unlike Prettier's classic “print width” (which defaults to 80 and controls only the longest allowed line), this setting watches for a pattern of generally long lines. Here, the default threshold is 40. Because the metric is an <strong>average</strong>, a single long line won't break it, and blank lines even pull the number down. </p>
<p> If you get flagged for high average line length, look for places where you can break up dense code into smaller chunks. Try adding newlines inside long function calls, splitting up complex expressions, or moving chained method calls to separate lines. Often, just reformatting long conditionals—by using temporary variables or breaking up ternaries—can do a lot to improve clarity (and lower your average). Additionally, if a single line is dramatically longer than the rest, it's flagged as an outlier, so you can quickly identify the biggest offenders. </p>
<p> Remember, this is a style guideline, not a hard rule. The goal is to make your code easier to read at a glance, not to force everything onto separate lines. Adjust the threshold higher or lower to match your team's preferences or your own style. </p>
                  </div>
                </section>

                <section id="nesting-count" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1">
                    Nesting Count
                  </h4>
                  <div className="text-gray-400 space-y-4">
<p> High nesting scores generally mean you're wrapping several layers of code together on a single line, which can quickly make logic hard to follow. This is most common with nested loops, functions within functions, or deeply chained callbacks. Keep in mind this only counts nesting on one line, not multiple. This is intentional, because breaking up a series of opening braces on one line into multiple is a good way to fix this issue. </p>
<p> If you're flagged here, try breaking out your logic: use newlines to spread out nested code blocks, and consider whether any deeply nested functions or loops can be pulled out or refactored. A good rule of thumb: if you have to count the nesting level on your fingers, it's time to break things up. Editors with vertical line guides for nesting will thank you! The tool also calls out lines whose nesting is far above the file's norm, to help you quickly spot potential problem areas. </p>
<p> Like all metrics here, it's not a hard limit. Sometimes deep nesting is justified, but the goal is to keep each logical step as clear and approachable as possible. </p>
                  </div>
                </section>

                <section id="member-accessor" className="mb-10">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-2 border-b border-purple-400 pb-1">
                    Member Accessor Count
                  </h4>
                  <div className="text-gray-400 space-y-4">
<p> This flag is most common in object-oriented code or complex data structures, where you might see things like <span className="font-mono text-green-400">user.profile.settings.theme</span>. When you chain several properties or methods in a row, it can be hard to keep track of where everything is coming from, especially if you need to debug or revisit your code later. </p>
<p> If your code is breaking this threshold, try breaking up long chains into multiple variables, with each representing a logical step. For example, instead of writing everything in one expression, you could do something like: </p>
                    <pre tabIndex={0} className="bg-gray-900 p-4 rounded text-sm overflow-x-auto mt-2 mb-2">
                      <code className="text-white font-mono">{`const settings = user.profile.settings;\nconst theme = settings.theme;`}</code>
                    </pre>
<p> This approach makes your code easier to read and debug, and clarifies what each step in the chain represents. </p>
<p> The analysis also includes an outlier detector, so if one or two lines are responsible for most of the chaining, those specific lines will be called out in the report. This helps you quickly spot the biggest offenders. </p>
<p> As always, some chaining is perfectly fine—just keep an eye out for places where breaking things up can make your code more readable and less error-prone. </p>
                  </div>
                </section>

                <section id="comment-to-code" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Comment-to-Code Ratio
                  </h4>
                  <div className="text-gray-400 space-y-4">
<p> Unlike other metrics, Comment-to-Code doesn't look at individual lines or compute an average. It's a document-wide ratio, which means outlier detection doesn't apply. The assumption is that comments play a key role in improving long-term readability, both for teammates and for your future self. </p>
<p> A low comment ratio suggests that your code might be hard to understand without context. Even if the logic is simple now, that clarity fades quickly with time. This metric nudges you to be proactive: adding context, explanations, or clarifying intent, all so that your code is easier to follow down the line. </p>
                  </div>
                </section>

                <section id="whitespace-ratio" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Whitespace Ratio
                  </h4>
                  <div className="text-gray-400 space-y-4">
<p> Dense code is hard to scan. Without whitespace breaks, logic can blend together, making debugging harder and contributing to visual fatigue. This metric encourages breaking your code into chunks that are easier to read and follow at a glance. </p>
                  </div>
                </section>

                <section id="identifier-count" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Identifier Count
                  </h4>
                  <div className="text-gray-400 space-y-4">
<p> An identifier is any named reference—like variables, function names, object keys, and so on. If a line contains multiple distinct names, it increases the mental load required to understand what the line is doing. </p>
<p> The threshold is set to 2 by default. That means if, across your document, your average line contains more than two identifiers, you'll receive a warning. Outlier detection is also used, so if a specific line has far more identifiers than the rest, it may be called out directly. </p>
<p> A high identifier count is often a sign that your code is trying to do too much in a single line, forcing the reader to juggle too many references at once. This can make the logic harder to follow and the code more error-prone when revisiting later. Breaking up logic into simpler steps often improves both readability and maintainability. </p>
                  </div>
                </section>

                <section id="identifier-min-length" className="mb-12">
                  <h4 className="text-2xl font-semibold text-gray-200 mb-4 border-b border-purple-400 pb-1">
                    Identifier&nbsp;Minimum&nbsp;Length
                  </h4>

                  <div className="text-gray-400 space-y-4">
<p> This is the only metric that does <em>not</em> rely on file-wide averages. Instead, it checks each <strong>declared</strong> identifier on the current line and asks a simple question: “Is this name <em>shorter than</em> the threshold?”&nbsp; The default threshold is&nbsp;<code>2</code>, so only single-letter declarations (<code className="text-green-400">i</code>, <code className="text-green-400">j</code>, <code className="text-green-400">x</code>, …) trigger a flag. </p>

<p> When a line triggers the check, the report lists <em>every</em> short name found on that line, so you can fix them in one pass. </p>

<p> Short loop counters are sometimes fine, but overusing microscopic names outside tight loops can hurt readability. Treat each flag as a nudge to choose something more descriptive (or lower the threshold if your team is happy with terse names). </p>

<p> Note that only <strong>declarations</strong> are used to decide whether a line is flagged; merely&nbsp;<em>using</em>&nbsp;a short variable won't trip the check unless that variable is also declared on the same line. </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </section>
        </section>
      </main>
    </div>
  )
}
