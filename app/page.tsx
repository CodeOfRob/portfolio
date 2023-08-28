"use client";

import About from "@/components/about/page";
import Skills from "@/components/skills/page";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 flex flex-col w-screen">
      <About />
      <Skills />
    </div>
  );
}
