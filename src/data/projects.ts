export type ProjectSummary = {
  id: "prettier-er" | "tasker" | "scdb";
  homeTitle: string;
  overviewTitle: string;
  homeTagline: string;
  overviewTagline: string;
  shortDescription: string;
  overviewDescription: string;
  tech: readonly string[];
  link: string;
  homeImage: string;
  overviewImage: string;
  imageAlt: string;
};

export const projectSummaries = [
  {
    id: "prettier-er",
    homeTitle: "Prettier-er",
    overviewTitle: "Prettier-er",
    homeTagline: "Customizable VS Code formatter",
    overviewTagline: "The non-opinionated code formatter.",
    shortDescription:
      "A VS Code extension enhancing Prettier with custom preferences and code readability metrics.",
    overviewDescription:
      "Prettier-er is a VS Code extension that builds on top of Prettier, offering customizable formatting rules and a unique code readability analysis tool. Created as a senior project at UF, it was designed to give developers, new and seasoned, more control over their style choices; making clean, readable code without sacrificing personal or organizational preferences.",
    tech: ["JavaScript", "TypeScript", "VS Code Ext. API"],
    link: "/projects/prettier-er",
    homeImage: "/prettier-er.png",
    overviewImage: "/prettier-er.png",
    imageAlt: "Prettier-er logo",
  },
  {
    id: "tasker",
    homeTitle: "Tasker",
    overviewTitle: "Tasker",
    homeTagline: "Academic To-Do Manager",
    overviewTagline: "Your academic tasks, organized your way.",
    shortDescription:
      "Qt-based task manager for students, with .ics calendar import and metadata-driven task lists.",
    overviewDescription:
      "Tasker is a Qt-based task management app designed to help students organize assignments, quizzes, and other deadlines. Built during an intensive two-month software engineering course, the project emphasized agile practices such as storyboarding and sprint planning. Tasker lets users create detailed tasks with customizable metadata - including class, due date, weight, and difficulty - and provides robust filtering and sorting capabilities. A standout feature is its .ics import tool, enabling seamless integration of existing calendars (such as Canvas exports) to auto-populate task lists. I focused primarily on the GUI development, task data management, and implementing the calendar import feature, making this a rewarding introduction to desktop software development.",
    tech: ["C++", "Qt", "Visual Studio"],
    link: "/projects/tasker",
    homeImage: "/tasker.png",
    overviewImage: "/tasker.png",
    imageAlt: "Tasker logo",
  },
  {
    id: "scdb",
    homeTitle: "SCDB Trends",
    overviewTitle: "SCDB Database & Trends",
    homeTagline: "Supreme Court Data Visualization",
    overviewTagline: "Exploring Supreme Court History Through Data Visualization.",
    shortDescription:
      "Python/SQL web app for querying and visualizing Supreme Court Database trends interactively.",
    overviewDescription:
      "This project was developed as part of my Database Management course, showcasing interactive trend queries based on data from the Supreme Court Database (SCDB). We utilized Python scripts to convert SCDB datasets into structured SQL insert commands, constructing a comprehensive Oracle database. Despite tight deadlines and teamwork challenges, we built a web app using Go, HTML, CSS, and JavaScript to interactively query the database and visualize historical trends, like ideological swings among justices, and voting patterns correlated with presidential appointments. This project not only highlighted fascinating judicial insights, but significantly expanded my skills in rapid problem-solving, database design, API integration, and adaptive leadership under pressure.",
    tech: ["Go", "Python", "SQL", "HTML", "JavaScript"],
    link: "/projects/scdb-database-trends",
    homeImage: "/scdb_home.png",
    overviewImage: "/scdb.png",
    imageAlt: "SCDB logo",
  },
] as const satisfies readonly ProjectSummary[];
