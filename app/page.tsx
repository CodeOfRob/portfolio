"use client";

import About from "@/components/about/page";
import Projects from "@/components/projects/page";

export default function Home() {
  return (
    <div className="absolute top-0 w-screen">
      <div className="flex flex-col w-full lg:max-w-screen-2xl m-auto">
        <About />
        <Projects />
      </div>
    </div>
  );
}
