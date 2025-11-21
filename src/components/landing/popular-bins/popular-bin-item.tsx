import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { monoFont } from "@/fonts/fonts";
import { StarIcon } from "lucide-react";
import { PopularBinType } from "@/interfaces";
import { Button } from "@/components/ui";

interface Props {
  bin: PopularBinType;
}

export const PopularBinItem = ({ bin }: Props) => {
  return (
    <Card className="md:duration-150 md:hover:-translate-y-3">
      <CardHeader>
        <CardTitle className={`${monoFont.className}`}>{bin.title}</CardTitle>
        <CardDescription>{bin.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="inline-flex items-center gap-x-3">
          <StarIcon />
          {bin.forksCount} forks
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-muted-foreground">
        <p>by @{bin.author.username}</p>
        <CardAction>
          <Button variant={"default"}>View</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
