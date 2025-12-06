"use client";

import { BinsByUserPayload } from "@/interfaces";
import { ProjectCard } from "./project-card";
import { EditBinSheet } from "..";
import { TagsField } from "@/components/ui";

interface Props {
  bins: BinsByUserPayload[];
}

export const ProjectsWrapper = ({ bins }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {bins.map((bin) => (
          <ProjectCard key={bin.id} {...bin} />
        ))}
      </div>

      <EditBinSheet />
    </>
  );
};
