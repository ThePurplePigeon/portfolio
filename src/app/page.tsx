export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <section className="flex flex-col items-center justify-center h-[80vh] p-6">
        <h1 className="text-5xl font-bold">Hello, I&apos;m Joshua</h1>
        <p className="mt-4 text-xl text-gray-400">C++ Apologist | Full-Stack Developer</p>
        <div className="mt-8">
          <a
            href="/projects"
            className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
          >
            View My Work
          </a>
        </div>
      </section>

      <section className="bg-gray-900 p-6 text-center">
        <p className="max-w-2xl mx-auto text-lg">
          I&apos;m a passionate software developer focused on user-centered design and writing maintainable, extensible code.
          Check out my About page for more info!
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <div className="gird grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/*Prettier-er*/}
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Prettier-er</h3>
            <p className="text-grey-400 text-sm">
              Prettier-er is a VS-Code extension that builds on the popular Prettier formatter, with a focus on user preference. Prettier-er also includes a code readability analysis tool, based on research into readability metrics.
            </p>
            <a
              href="/projects"
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
          {/*Tasker*/}
          <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Tasker</h3>
            <p className="text-grey-400 text-sm">
              Tasker is a simple, QT-based task management application, made for students and built for my Software Engineering class. Tasker includes a feature to read through a calender file to generate tasks.
            </p>
            <a
              href="/projects"
              className="inline-block mt-2 text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-purple-700 p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Want to chat?</h2>
        <a
          href="/contact"
          className="inline-block px-6 py-2 bg-grey-900 rounded-full text-white font-semibold hover:bg-gray-800 transition"
        >
          Let&apos;s Talk
        </a>
      </section>
    </main>
  );
}
