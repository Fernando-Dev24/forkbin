import { AppSidebar, AppSidebarInset } from "@/components/app/ui";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/components/ui";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />

        <SidebarInset>
          <AppSidebarInset />
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          <Footer className="app-container" />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
