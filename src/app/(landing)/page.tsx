import { Navbar, Hero, PopularBins } from "@/components/landing";

export default function Landing() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <PopularBins />
    </div>
  );
}
