import { Footer } from "@/components/ui";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer className="container" />
    </>
  );
}
