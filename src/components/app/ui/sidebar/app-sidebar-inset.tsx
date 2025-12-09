"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";

export const AppSidebarInset = () => {
  const pathname = usePathname();
  let pageTitle = "";

  switch (true) {
    case pathname.includes("dashboard"):
      pageTitle = "Dashboard";
      break;
    case pathname.includes("edit"):
      pageTitle = "Edit bin";
      break;
    case pathname.includes("detail"):
      pageTitle = "Bin detail";
      break;
    case pathname.includes("me"):
      pageTitle = "Profile";
      break;
    default:
      pageTitle = "App";
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <h4 className="text-xl font-semibold capitalize">{pageTitle}</h4>
    </header>
  );
};
