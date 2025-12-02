import { Button } from "@/components/ui";
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
import { Pencil, Settings, StarIcon } from "lucide-react";

interface Props {
  bin: BinsByUserPayload;
}

export const ProjectCard = ({ bin }: Props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{bin.title}</CardTitle>
          <CardDescription>{bin.description}</CardDescription>
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
            <Button size={"icon"} variant={"outline"}>
              <Settings />
            </Button>
          </div>
          <div className="text-right space-y-1">
            <Badge variant={"secondary"}>
              {bin.isPublic ? "Public" : "Private"}{" "}
            </Badge>
            <p className="text-xs text-muted-foreground">
              {formatDate(bin.updatedAt)}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
