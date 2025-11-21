"use client";

import { ArrowUp, MailIcon, MessageCircleWarning } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { Button } from "./button";

export const Footer = () => {
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 md:py-5 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="order-1 md:order-0 pt-5 md:pt-0">
          <span className="text-xs text-muted-foreground">
            {`{`}coded by @fernandodev{`}`}
          </span>
          <p className="text-2xl">Forkbin {new Date().getFullYear()}</p>
        </div>

        <div className="flex items-center gap-x-5">
          <Button variant={"outline"} size={"icon"} onClick={onScrollTop}>
            <ArrowUp />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <MailIcon />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <LuGithub />
          </Button>
          <Button variant={"destructive"} size={"icon"}>
            <MessageCircleWarning />
          </Button>
        </div>
      </div>
    </footer>
  );
};
