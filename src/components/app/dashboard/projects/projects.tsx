import { ProjectCard } from "./project-card";
import { CreateBinDialog } from "../create-bin/create-bin-dialog";

export const Projects = () => {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold">Hey, Fernando</h2>
        <p className="text-muted-foreground">
          What you&apos;re going to create today?
        </p>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <h4 className="mb-5 text-lg">Your bins</h4>
          <div className="block md:hidden">
            <CreateBinDialog />
          </div>
        </div>
        <div className="space-y-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
