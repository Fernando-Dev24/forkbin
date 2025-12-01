import { ProjectCard } from "./project-card";

export const ProjectsCardWrapper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCard key={i} />
      ))}
    </div>
  );
};
