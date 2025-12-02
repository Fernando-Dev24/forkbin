import { getBinsByUser } from "@/actions";
import { Projects } from "@/components/app/dashboard";
import { ProjectsNav } from "@/components/app/dashboard/projects/projects-nav";
import { Empty } from "@/components/ui";

export default async function DashboardPage() {
  const { bins } = await getBinsByUser(6);

  return (
    <div className="md:py-10 md:px-20 space-y-10">
      <ProjectsNav />
      {bins.length < 1 && <Empty />}
      {bins.length > 0 && <Projects bins={bins} />}
    </div>
  );
}
