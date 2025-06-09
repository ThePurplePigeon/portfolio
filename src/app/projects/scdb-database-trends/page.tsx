"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaChartLine,
  FaBug,
  FaGavel,
  FaCodeBranch,
  FaMapSigns,
} from "react-icons/fa";

export default function ScdbShowcase() {
  return (
    <main
      className="bg-gray-900 text-white min-h-screen p-8"
    >
      <section className="max-w-5xl mx-auto space-y-12">
        {/* Intro */}
        <motion.section
          className="bg-gray-800/95 rounded-lg px-6 py-8 shadow-lg flex items-center gap-6"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              SCDB Trend Explorer
            </h1>
            <p className="text-gray-300 mt-2">
              Built as part of an Introduction to Database Systems course, this project is a database and web app for analyzing trends in the Supreme Court Database (SCDB).
            </p>
          </div>

          <Image
            src="/scdb_header.svg"
            alt="Intro illustration"
            width={180}
            height={110}
            className="hidden md:block rounded-md object-cover ring-1 ring-gray-700/60"
            priority
          />
        </motion.section>

        {/* Description */}
        <section className="py-14 bg-gray-800 rounded-lg shadow-lg">
          <div className="px-6 space-y-6">
            <div className="flex items-center gap-3 border-b border-blue-500 pb-2">
              <FaGavel className="text-blue-400 text-3xl" />
              <h2 className="text-2xl font-semibold">Description</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              As part of my Introduction to Database Systems course, I led a team of five developers to build a database system and a web application frontend for analyzing the Supreme Court Database (SCDB), which is a comprehensive collection of Supreme Court cases from the court's founding through 2023, hosted by Washington University Law.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our goal was to design a database system with at least 500,000 tuples and demonstrate at least five complex trend queries. This meant we needed a rich, intersecting dataset that would let us explore a variety of data combinations and analyze trends over time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              After some deliberation, we chose the SCDB because of its strong chronological structure, wealth of data points, and the many possibilities it offered for running meaningful trend queries. I cover some of them in later sections.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The project spanned the entire semester and was broken down into several major tasks. We needed to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Convert the SCDB CSV files into SQL insert commands</li>
              <li>Design a relational schema to support complex trend queries</li>
              <li>Write and test those queries</li>
              <li>Set up and use an API to connect the frontend to the database for querying and data retrieval</li>
              <li>Build a web frontend to visualize and interact with the trends, allowing users to adjust certain parameters</li>
              <li>Create a JavaScript tool to turn the database output into custom graphs</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              We divided these tasks among the five of us. I'll go into detail about my specific contributions in the next section. Despite some bumps along the way, we ended up with a fully functional database of over 800,000 records and a frontend that surfaced genuinely fascinating insights.
            </p>

          </div>
        </section>

        {/* My Role */}
        <motion.section
          className="bg-gray-700 p-8 rounded-lg shadow-lg border-l-4 border-purple-500"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-purple-500">
            <FaCodeBranch className="text-purple-400 text-3xl" />
            <h3 className="text-2xl font-semibold">My Role</h3>
          </div>
          <div className="px-6 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              My main responsibilities were designing the relational schema for the database and converting the SCDB CSV files into SQL insert commands.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I started by designing the schema itself. We chose to focus on the “vote” CSVs from the SCDB, where each row represents a single justice's vote on a single case. This helped us easily reach the minimum tuple count, but more importantly, gave us the flexibility for complex trend queries.
            </p>
            <p className="text-gray-300 leading-relaxed">
              One key detail in the SCDB is its “ideology” value: either 2 (Liberal) or 1 (Conservative) for each decision. Because of how I structured our tables, we were able to make full use of this in our queries.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Once the schema was in place, I wrote a Python script to parse each row of the CSVs and generate the corresponding insert commands. This was my first major challenge on the project.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The SCDB actually consists of two datasets: modern and legacy. While both use the same columns, the legacy data is much less consistent. I quickly realized I couldn't assume data would always be present, so I adapted the schema, adjusted which values were keys, and added composite keys where needed. After some iteration, the script was reliably parsing the data and outputting a complete SQL file with insert commands.
            </p>
            <p className="text-gray-300 leading-relaxed">
              But that wasn't the end of it. Some insert commands still failed; my assumptions about data types didn't always hold up, and with a dataset this size, fixing these issues wasn't straightforward. If a mistake slipped through, I'd have to clear out the database and reload all 800,000 rows, which was a slow process. Changing the schema meant even more reloading.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This part of the project was all about trial and error: running each new batch of insert commands, tracking down errors, figuring out the fix, regenerating the script, and starting over.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Eventually, the script was producing a valid insert for every row in the CSVs. With the database complete, I moved on to help my teammates tackle their own parts of the project, which I discuss in the next section.
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-purple-700/15 p-5 ring-1 ring-purple-600/30 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <FaBug className="text-purple-300 text-xl" />
              <h4 className="text-lg font-semibold text-purple-200">Deadline Adaption</h4>
            </div>
            <p className="text-gray-200 leading-relaxed">
              As the demo deadline crept closer, we hit a serious roadblock with API integration the night before. We could connect and ping the database, but the API simply refused to cooperate with the frontend. Most of my teammates had early classes, so by late night it was just me and one other teammate left to keep working.
            </p>
            <p className="text-gray-200 leading-relaxed">
              With nothing scheduled the next day except the demo, I dug in for the long haul. We spent hours experimenting: tweaking security rules, trying different approaches, and fighting with CORS errors that kept blocking our requests. Around 3 AM, after a lot of dead ends, I finally got a successful call through to the API and was able to wire up a crucial frontend feature: a tuple count query.
            </p>
            <p className="text-gray-200 leading-relaxed">
              I don't think I've ever felt that level of project stress before. With almost no API experience going in, I had to learn fast, troubleshoot on the fly, and keep going despite being exhausted. It turned out to be one of the best crash courses I've had in picking up new tools and pushing through pressure.
            </p>
          </div>

        </motion.section>

        {/* Accomplishments */}
        <motion.section
          className="space-y-10"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-center bg-white/25 px-4 py-2 rounded-xl inline-block shadow-md backdrop-blur">
            Core Accomplishments
          </h2>

          {/* Python */}
          <div className="flex items-start gap-5">
            <span className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-700/30 flex items-center justify-center">
              <FaDatabase className="text-purple-300 text-2xl" />
            </span>

            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-semibold text-purple-200">
                Python ETL
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Most of my work on this project centered on data preparation, especially writing the Python script that converted SCDB CSV files into SQL insert commands.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My script handled two main tasks: generating all the insert commands and producing a file with the create table commands for our custom schema. As I worked, the script evolved; each time I learned more about the data, I updated the schema and the corresponding commands. This process led to a pretty complex implementation, with plenty of alter table commands to support compound and foreign keys as the project progressed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The insert commands required some creativity. Because the CSVs were vote-based—each row represented a single justice's vote—there were many repeated values like case ID or docket ID. To avoid duplicate entries, I used sets to check if each related value was unique before creating a new insert command. For some fields, like new justices or courts, I added additional logic to handle those cases specifically. Once everything was verified, the insert was added to the output, and the script continued down the rows.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I also had to do quite a bit of input validation, since the SCDB data wasn't always consistent or in a format Oracle would accept. I built helper functions for everything from date parsing to numeric formatting, as well as a general clean_field function for handling nulls, NaNs, empty strings, and any other oddities that showed up in the CSVs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I hadn't worked much in Python before this, but I knew it was great for file I/O, so I picked it as both the right tool and a learning opportunity. And learn it I did. The hands-on experience with Python's syntax and workflow made me much more confident in picking up unfamiliar languages, a skill that's carried over to projects like building this very website.
              </p>

            </div>
          </div>

          {/* Queries */}
          <div className="flex items-start gap-5">
            <span className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-700/30 flex items-center justify-center">
              <FaChartLine className="text-purple-300 text-2xl" />
            </span>

            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-semibold text-purple-200">
                Trend Queries
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Working on the trend queries was genuinely fascinating for me. As someone who's always been a bit of a politics nerd, seeing the Supreme Court's history unfold through the data, and being able to analyze it in new ways, made the hard work to get everything running feel especially rewarding.
              </p>
              <p className="text-gray-300 leading-relaxed">
                One of the most interesting queries we built examined the ideological leaning of justices, based on their individual voting patterns. My biggest personal discovery was that, regardless of the court's makeup or the apparent ideological tilt of its members, the aggregate decisions almost always trend moderate - a 1.5 on the ideology scale (with 1 representing conservative and 2 representing liberal). I found it both fascinating and reassuring that, even when one side has a clear majority, the justices tend to settle near the middle rather than sticking rigidly to party lines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This project also gave me some new perspective on the work I do. I genuinely enjoyed exploring what I'd built, even though it started as a tough class assignment. What stuck with me wasn't the grade, but the process of learning from my own tool. It shifted how I see my work; there's a different kind of satisfaction in building something you can actually use and learn from, beyond just finishing the task.
              </p>
            </div>
          </div>
        </motion.section>


        {/* Tough spots */}
        <motion.section
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaMapSigns className="text-purple-400 text-2xl" />
            <h3 className="text-2xl font-semibold text-purple-300">
              Challenges & Lessons
            </h3>
          </div>

          <div className="space-y-2">
            <p className="text-gray-300 leading-relaxed">
              This project was a true team effort. With such a full-stack application, every member brought something different to the table, and having that diversity of skills was essential to our success. Even when I had to step in and help move things forward, I always built on the groundwork laid by my teammates. There was never a moment where anyone was completely on their own; we supported each other throughout.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The whole experience was a crash course in pragmatic engineering. I learned how to adapt quickly to unexpected technical challenges and became more comfortable diving into unfamiliar code or picking up new tools on the fly. Whether it was troubleshooting late-night API issues or reworking our database schema for the hundredth time, I learned to stay focused under pressure and find solutions, even when things got messy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Just as important were the lessons in teamwork and collaboration. Balancing individual contributions with group deadlines, stepping up to help wherever needed, and communicating clearly were every bit as critical as any technical decision. Those habits: clear communication, adaptability, and a willingness to pitch in, are things I've carried into every project since.
            </p>


          </div>
        </motion.section>

        {/* Link to source */}
        <motion.section
          className="text-center"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="http://scdb.wustl.edu"
            target="_blank"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-transform duration-150 hover:scale-105"
          >
            Explore the Supreme Court Database
          </Link>
          <span className="block text-gray-400 mt-1">SCDB is the official source for the data behind this project.</span>
        </motion.section>
      </section>
    </main>
  );
}
