import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Globe, Home, LucideProps, User } from "lucide-react";

export const sidebarItems = {
  navMain: [
    {
      title: "Dashboard",
      url: "/app/dashboard",
      icon: Home,
    },
    {
      title: "Community",
      url: "/app/community", // TODO: This could be changed cause this path is public
      icon: Globe,
    },
    {
      title: "Profile",
      url: "/app/me/information/abc",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Information",
          url: "/app/me/information/abc",
        },
        {
          title: "Stats",
          url: "/app/me/stats/abc",
        },
      ],
    },
  ],
};
