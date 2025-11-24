import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Globe, Home, LucideProps, User } from "lucide-react";

interface SidebarItem {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Community",
    url: "#",
    icon: Globe,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
];
