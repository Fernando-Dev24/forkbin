"use client";

import { CreateBinDialog } from "../create-bin/create-bin-dialog";
import { useSession } from "@/providers";
import { ProjectSearch } from "./project-search";

export const ProjectsNav = () => {
  const { session } = useSession();

  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-semibold">
          Hey, <span className="capitalize">{session.firstName}</span>
        </h2>
        <p className="text-muted-foreground">What are going to do today?</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-y-5 md:gap-0 md:items-center md:justify-between">
        <ProjectSearch />
        <nav className="flex items-center gap-x-3 w-full md:w-auto">
          <CreateBinDialog />
        </nav>
      </div>
    </>
  );
};
