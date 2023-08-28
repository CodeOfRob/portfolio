"use client";

import About from "@/components/about/page";
import Projects from "@/components/projects/page";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 flex flex-col w-screen">
      <About />
      <Projects />
    </div>
  );
}
