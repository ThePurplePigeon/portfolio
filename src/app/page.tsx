import Image from 'next/image'
import Link from 'next/link'
import { FaReact, FaPython, FaJava, FaGithub, FaGraduationCap, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";
import { SiQt, SiCplusplus, SiJavascript, SiTypescript, SiUnrealengine, SiUnity } from "react-icons/si";
import TypedRoles from "@/components/TypedRoles";
import { projectSummaries } from "@/data/projects";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="relative flex flex-col items-center justify-center min-h-[55vh] py-8 px-4 bg-gray-900 overflow-hidden">
        <Image
          src="/me.jpg"
          alt="Picture of Joshua"
          width={200}
          height={200}
          priority
          className="rounded-full border-4 border-purple-400 shadow-lg mb-4"
        />
        <h1 className="text-center text-4xl font-bold mb-2 sm:text-5xl">Hello, I'm Joshua</h1>
        <TypedRoles />
        <Link
          href="/projects"
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg mt-4 transition-transform transform duration-150 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]"
        >
          View My Work
        </Link>
      </section>

      <section className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3 py-4 mb-3">
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-purple-300 gap-2 shadow-sm">
          <SiCplusplus className="text-blue-400" /> C++
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-yellow-300 gap-2 shadow-sm">
          <FaPython className="text-yellow-300" /> Python
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-yellow-400 gap-2 shadow-sm">
          <SiJavascript className="text-yellow-400" /> JavaScript
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-300 gap-2 shadow-sm">
          <FaJava className="text-blue-300" /> Java
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 gap-2 shadow-sm">
          <SiTypescript className="text-blue-400" /> TypeScript
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-cyan-300 gap-2 shadow-sm">
          <FaReact className="text-cyan-300" /> React
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-green-400 gap-2 shadow-sm">
          <SiQt className="text-green-400" /> Qt
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-purple-300 gap-2 shadow-sm">
          <SiUnrealengine className="text-purple-300" /> Unreal
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 gap-2 shadow-sm">
          <SiUnity className="text-gray-300" /> Unity
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-300 gap-2 shadow-sm">
          <FaMapMarkerAlt className="text-pink-400" /> North Carolina
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-blue-200 gap-2 shadow-sm">
          <FaGraduationCap className="text-blue-400" /> UF '24 BS CS
        </span>
        <span className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm text-green-400 gap-2 shadow-sm">
          <FaGithub className="text-gray-200" /> Open to Work
        </span>
      </section>

      <section className="max-w-3xl mx-auto text-center mt-4 mb-6 px-4">
        <div className="inline-block w-full max-w-2xl bg-gray-800/90 rounded-xl px-6 py-4 shadow-md border border-purple-500/30 sm:w-auto">
          <h3 className="text-lg font-semibold mb-1 text-purple-300">
            Currently Focusing On
          </h3>
          <p className="text-gray-200 leading-relaxed sm:leading-normal">
            <span>CompTIA A+ ce certified and looking</span>{" "}
            <span className="sm:block">for full-time IT and software engineering positions.</span>{" "}
            <span className="sm:block">Working on a mobile formatting pass for this website.</span>
          </p>
        </div>

        <div className="mx-auto mt-4 flex max-w-2xl flex-col items-center gap-4 rounded-xl border border-blue-400/30 bg-gray-800/90 p-4 shadow-md sm:flex-row sm:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-[#f4f4f4] p-3 shadow-inner">
            <Image
              src="/certifications/comptia-a-plus.png"
              alt="CompTIA A+ ce certification logo"
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
            />
          </div>
          <div>
            <p className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-200 sm:justify-start">
              <FaCertificate className="text-blue-400" /> CompTIA A+ ce Certified
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Issued June 25, 2026 | Valid through June 25, 2029
            </p>
          </div>
        </div>
      </section>


      <section className="bg-gray-900 p-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Who am I?
          </h2>
          <p className="text-base leading-relaxed text-center text-gray-300 max-w-2xl mx-auto sm:text-lg sm:leading-7">
            I'm a software developer with a love for user-focused design and writing clean, maintainable code. Whether building desktop, web, or data-driven projects, I care about code that's both practical and a joy to work with.
          </p>
          <p className="text-base leading-relaxed text-center text-gray-300 max-w-2xl mx-auto sm:text-lg sm:leading-7">
            Outside of code, I thrive on learning new frameworks, exploring how technology shapes our lives, and collaborating with people who challenge me to be a better man. I believe great software isn't just about what it does, but how it feels to build and use. If you want to talk shop, brainstorm, or just talk about new tech, I'm always up for a conversation.
          </p>

          <Link
            href="/about"
            className="
              inline-block
              px-6
              py-2
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              rounded-full
              text-white
              font-semibold
              shadow-lg
              mt-2
              transition-transform
              transform
              duration-150
              hover:scale-105
              hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]
            "
          >
            Learn More About Me
          </Link>
        </div>
      </section>


      <section className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projectSummaries.map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition group flex flex-col items-start">
              <Image
                src={project.homeImage}
                alt={`${project.homeTitle} logo`}
                width={56}
                height={56}
                className="mb-2 rounded shadow-lg object-contain"
              />
              <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-400 transition">{project.homeTitle}</h3>
              <p className="text-sm italic text-gray-400 mb-2">{project.homeTagline}</p>
              <p className="text-gray-300 text-sm flex-1">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-xs px-2 py-1 rounded text-purple-300">{tech}</span>
                ))}
              </div>
              <Link
                href={project.link}
                className="inline-flex min-h-10 items-center mt-3 text-blue-400 hover:underline font-semibold sm:min-h-0"
              >
                View Project &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transition-transform transform duration-150 hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </section>




      <section className="bg-gray-900 p-6 text-center border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-2">Want to chat?</h2>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg transition-transform transform duration-150 hover:scale-105 hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)]"
        >
          Let's Talk
        </Link>
      </section>


    </main>
  );
}
