import Link from "next/link";
import Image from "next/image";
import { projectSummaries } from "@/data/projects";


export default function ProjectsOverview() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 sm:text-5xl sm:mb-10">My Projects</h1>
        <div className="space-y-10 sm:space-y-12">
          {projectSummaries.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ?'md:flex-row-reverse' :''} items-center gap-5 sm:gap-6`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={project.overviewImage}
                  alt={project.imageAlt}
                  width={400}
                  height={400}
                  className="h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-1">{project.overviewTitle}</h2>
                <h3 className="text-lg italic text-gray-300 mb-3">{project.overviewTagline}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed sm:leading-normal">{project.overviewDescription}</p>
                <Link
                  href={project.link}
                  className="inline-flex min-h-10 w-fit items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-shadow sm:min-h-0"
                >
                  View Project -&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

