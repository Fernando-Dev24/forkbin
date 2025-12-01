import { AppSidebar, AppSidebarInset } from "@/components/app/ui";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/components/ui";
import { getUserSession } from "@/actions";
import { redirect } from "next/navigation";
import { SessionProvider } from "@/providers";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getUserSession();
  if (!user) redirect("/auth/login?error=unauthorized");

  return (
    <SessionProvider session={user}>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />

        <SidebarInset>
          <AppSidebarInset />
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          <Footer className="app-container" />
        </SidebarInset>
      </SidebarProvider>
    </SessionProvider>
  );
}
