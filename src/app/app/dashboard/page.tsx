import { Projects, CreateBinCard } from "@/components/app/dashboard";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10">
      <Projects />
      <div className="hidden md:block">
        <CreateBinCard />
      </div>
    </div>
  );
}
