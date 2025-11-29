"use client";

import { Button } from "@/components/ui";
import { Grid3x3, Table2 } from "lucide-react";
import { CreateBinDialog } from "../create-bin/create-bin-dialog";
import { useView } from "@/store/view-as";

export const ProjectsNav = () => {
  const { viewAs } = useView();
  console.log(viewAs);

  return (
    <div className="flex justify-between items-center">
      <p>This is a search</p>
      <nav className="flex items-center gap-x-3">
        <Button
          size={"icon"}
          variant={"outline"}
          className="hidden md:inline-flex"
        >
          <Grid3x3 />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="hidden md:inline-flex"
        >
          <Table2 />
        </Button>
        <CreateBinDialog />
      </nav>
    </div>
  );
};
