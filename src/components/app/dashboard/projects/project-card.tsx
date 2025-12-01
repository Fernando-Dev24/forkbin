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
import { Pencil, Settings, StarIcon } from "lucide-react";

export const ProjectCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam
            numquam accusamus neque repellat fugit ipsa.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="flex items-center gap-x-2">
            <StarIcon />
            24 forks
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
            <Badge variant={"secondary"}>Public</Badge>
            <p className="text-xs text-muted-foreground">1/12/2025</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
