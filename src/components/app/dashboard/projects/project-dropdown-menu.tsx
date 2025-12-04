import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSheetType } from "@/hooks";
import { BinsByUserPayload } from "@/interfaces";
import { Edit, Settings, Share, Trash } from "lucide-react";

export const ProjectDropdownMenu = (bin: BinsByUserPayload) => {
  const { onToggle } = useSheetType<BinsByUserPayload>();

  const handleSetBin = () => onToggle(true, bin);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSetBin}>
          <Edit />
          Edit metadata
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash />
          Delete bin
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
