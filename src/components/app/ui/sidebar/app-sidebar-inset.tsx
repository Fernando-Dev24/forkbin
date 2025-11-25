"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";

export const AppSidebarInset = () => {
  const pathname = usePathname().split("/");

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <h4 className="text-xl font-semibold capitalize">
        {pathname[pathname.length - 1]}
      </h4>
    </header>
  );
};
