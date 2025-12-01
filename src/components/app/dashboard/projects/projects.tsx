"use client";

import { useView } from "@/store/";
import { ProjectsNav } from "./projects-nav";
import { ProjectsTable } from "./projects-table";
import { ProjectsCardWrapper } from "./projects-cards-wrapper";
import { Empty } from "@/components/ui";

export const Projects = () => {
  const { viewAs } = useView();

  return (
    <div className="md:py-10 md:px-20 space-y-10">
      <ProjectsNav />

      {/* <Empty /> */}
      <div>
        {viewAs === "grid" && <ProjectsCardWrapper />}
        {viewAs === "table" && <ProjectsTable />}
      </div>
    </div>
  );
};
