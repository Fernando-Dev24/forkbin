import { ArrowRight, GitFork, Pencil, Share2 } from "lucide-react";
import { Button } from "@/components/ui";

export const Hero = () => {
  return (
    <div className="my-20 flex flex-col md:flex-row items-center justify-between">
      {/* CONTENT */}
      <div className="order-1 md:order-0 text-center md:text-left">
        {/* ICONOS */}
        <div className="hidden md:flex items-center gap-x-5 mb-5 text-foreground/70">
          <span className="hero-icons">
            <GitFork />
            Fork
          </span>
          <span className="hero-icons">
            <Pencil />
            Edit
          </span>
          <span className="hero-icons">
            <Share2 />
            Share
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-semibold">
          {`{`}
          <span className="text-primary">JSON</span> made collaborative
          {`}`}
        </h1>
        <Button variant="default" size="lg" className="mt-5 text-base">
          Get started
          <ArrowRight />
        </Button>
      </div>

      {/* ILLUSTRATION */}
      <figure className="min-w-[300px] md:min-w-[600px] w-[300px] md:w-[600px] mb-10 md:mb-0">
        <img
          src="/landing-illustration.svg"
          alt="People sharing their bins through internet"
          className="w-full"
        />
      </figure>
    </div>
  );
};
