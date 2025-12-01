import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/ui";
import { AppSidebarNavMain } from "./app-sidebar-nav-main";
import { sidebarItems } from "./sidebar-items";
import { AppSidebarUser } from "./app-sidebar-user";

export const AppSidebar = () => {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="py-5">
          <SidebarGroupLabel className="mb-3">
            <Logo className="w-20 md:w-20" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <AppSidebarNavMain mainItems={sidebarItems.navMain} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <AppSidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
};
