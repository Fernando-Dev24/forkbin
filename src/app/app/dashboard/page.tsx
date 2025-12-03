import { getBinsByUser } from "@/actions";
import { ProjectCard } from "@/components/app/dashboard/projects/project-card";
import { ProjectsNav } from "@/components/app/dashboard/projects/projects-nav";
import { Empty, PaginationWrapper } from "@/components/ui";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{
    page?: number;
    title?: string;
  }>;
}

export default async function DashboardPage({ searchParams }: Props) {
  let { page, title } = await searchParams;
  page = page ? parseInt(page.toString()) : 1;
  const { bins, totalPages } = await getBinsByUser({ page, title });

  if (bins.length < 1) redirect("/app/dashboard");

  return (
    <div className="md:py-10 md:px-20 space-y-10">
      <ProjectsNav />
      {bins.length < 1 && <Empty />}
      {bins.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bins.map((bin) => (
              <ProjectCard key={bin.id} {...bin} />
            ))}
          </div>

          <PaginationWrapper totalPages={totalPages} />
        </>
      )}
    </div>
  );
}
