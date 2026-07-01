"use client";

import { ReactTyped } from "react-typed";

const roles = [
  "C++ Apologist",
  "Full-Stack Developer",
  "Software Engineer",
  "Aspiring Game Developer",
] as const;

export default function TypedRoles() {
  return (
    <ReactTyped
      className="mb-3 text-center text-xl text-gray-400"
      strings={[...roles]}
      cursorChar="_"
      typeSpeed={40}
      backSpeed={60}
      backDelay={2000}
      loop
    />
  );
}
