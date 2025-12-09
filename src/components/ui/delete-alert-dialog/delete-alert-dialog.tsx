"use client";

import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert-dialog";
import { Button } from "../button";
import { onDeleteBin } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
  binId: string;
}

export const DeleteAlertDialog = ({ binId }: Props) => {
  const router = useRouter();

  const handleDeleteBin = async () => {
    toast.promise(onDeleteBin(binId), {
      loading: "Deleting...",
      success: "Bin deleted successfully",
      error: (error) => error.message,
      finally: () => router.refresh(),
      position: "top-center",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"destructive"}
          className="w-full flex justify-start rounded-sm px-2 py-1.5 text-sm"
        >
          <Trash />
          Delete bin
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteBin}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
