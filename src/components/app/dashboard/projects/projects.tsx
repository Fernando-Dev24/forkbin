import { ProjectCard } from "./project-card";
import { ProjectsNav } from "./projects-nav";

export const Projects = () => {
  return (
    <div className="md:py-10 md:px-20 space-y-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-semibold">Hey, Fernando</h2>
        <p className="text-muted-foreground">Your bins</p>
      </div>

      <ProjectsNav />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
