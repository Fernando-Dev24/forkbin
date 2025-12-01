"use client";

import { Button } from "@/components/ui";
import { Grid3x3, Table2 } from "lucide-react";
import { CreateBinDialog } from "../create-bin/create-bin-dialog";
import { useView, ViewOption } from "@/store/view-as";
import { useSession } from "@/providers";
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { ProjectSearch } from "./project-search";

export const ProjectsNav = () => {
  const { session } = useSession();
  const { viewAs, setView } = useView();
  const { isMobile } = useSidebar();

  const handleView = (view: ViewOption) => setView(view);

  useEffect(() => {
    if (isMobile) setView("grid");
  }, [isMobile]);

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
          <Button
            size={"icon"}
            variant={viewAs === "grid" ? "outline" : "ghost"}
            className="hidden md:inline-flex"
            onClick={() => handleView("grid")}
          >
            <Grid3x3 />
          </Button>
          <Button
            size={"icon"}
            variant={viewAs === "table" ? "outline" : "ghost"}
            className="hidden md:inline-flex"
            onClick={() => handleView("table")}
          >
            <Table2 />
          </Button>
          <CreateBinDialog />
        </nav>
      </div>
    </>
  );
};
