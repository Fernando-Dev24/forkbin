"use client";

import { useView } from "@/store/";
import { ProjectsTable } from "./projects-table";
import { ProjectsCardWrapper } from "./projects-cards-wrapper";
import { BinsByUserPayload } from "@/interfaces";
import { ProjectCard } from "./project-card";

export interface BinItemsProp {
  bins: BinsByUserPayload[];
}

export const Projects = ({ bins }: BinItemsProp) => {
  const { viewAs } = useView();

  return (
    <>
      {viewAs === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bins.map((bin) => (
            <ProjectCard key={bin.id} bin={bin} />
          ))}
        </div>
      )}

      {viewAs === "table" && <ProjectsTable bins={bins} />}
    </>
  );
};
