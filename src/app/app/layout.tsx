import { AppSidebar } from "@/components/app/ui";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <main>
        <AppSidebar />

        <SidebarInset>
          <header className="flex h-16 items-center px-4">
            <SidebarTrigger />
          </header>

          <div className="p-4">{children}</div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
}
