"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { formatDate } from "@/helpers/date/format-date";
import { BinsByUserPayload } from "@/interfaces";
import { Pencil, StarIcon } from "lucide-react";
import { ProjectDropdownMenu } from "./project-dropdown-menu";
import { renderTags } from "@/helpers/render-tags/render-tags";

export const ProjectCard = (bin: BinsByUserPayload) => {
  console.log(renderTags(bin.tags));
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <CardTitle>{bin.title}</CardTitle>
              <CardDescription>{bin.description}</CardDescription>
            </div>
            <Badge variant={"outline"}>/{bin.slug}</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <p className="flex items-center gap-x-2">
            <StarIcon />
            {bin._count.forks} forks
          </p>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <div className="space-x-5">
            <LinkButton href="/app/edit/b/abc">
              <Pencil />
              Edit
            </LinkButton>
            <ProjectDropdownMenu {...bin} />
          </div>
          <div className="text-right space-y-1">
            <Badge variant={"secondary"}>
              {bin.isPublic ? "Public" : "Private"}{" "}
            </Badge>
            <p className="text-xs text-muted-foreground capitalize">
              {bin.tags.length < 1
                ? formatDate(bin.updatedAt)
                : renderTags(bin.tags).join(", ")}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
