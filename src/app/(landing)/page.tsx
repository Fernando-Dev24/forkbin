import { Navbar, Hero, PopularBins, HowItWorks } from "@/components/landing";

export default function Landing() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <PopularBins />
      <HowItWorks />
    </div>
  );
}
