import {
  Navbar,
  Hero,
  PopularBins,
  HowItWorks,
  PopularBinsSkeleton,
} from "@/components/landing";
import { SuspenseWrapper } from "@/components/ui";

export default function Landing() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <SuspenseWrapper skeletonUI={<PopularBinsSkeleton />}>
        <PopularBins />
      </SuspenseWrapper>
      <HowItWorks />
    </div>
  );
}
