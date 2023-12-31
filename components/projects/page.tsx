import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects" className="h-screen flex">
      <div className="w-full lg:w-3/4 m-auto flex flex-col gap-y-6 text-center">
        <h1 className="text-4xl font-semibold tracking-wide">Projects</h1>
        <div className="flex flex-col gap-4 mx-4">
          {Object.keys(projects).map((projectKey) => {
            const project = projects[projectKey];
            return (
              <Link
                key={project.title}
                href={project.link}
                target="_blank"
                className="w-full lg:w-2/3 m-auto text-left py-4 px-4 flex flex-col gap-y-6 rounded-md transition duration-200 hover:bg-background-light/30 hover:drop-shadow-xl hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
              >
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <div className="text-justify">{project.description}</div>
                <div className="flex flex-row gap-4 flex-wrap">
                  {project.skills
                    .toSorted((a, b) => a.localeCompare(b))
                    .map((skill) => {
                      return (
                        <div
                          key={project.title}
                          className="text-sm px-3 border border-primary rounded-full"
                        >
                          {skill}
                        </div>
                      );
                    })}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
