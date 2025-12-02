import { getBinsByUser } from "@/actions";
import { Projects } from "@/components/app/dashboard";
import { ProjectsNav } from "@/components/app/dashboard/projects/projects-nav";
import { Empty, PaginationWrapper } from "@/components/ui";

interface Props {
  searchParams: Promise<{
    page?: number;
  }>;
}

export default async function DashboardPage({ searchParams }: Props) {
  let page = (await searchParams).page;
  page = page ? parseInt(page.toString()) : 1;
  const { bins, totalPages } = await getBinsByUser({ page });

  return (
    <div className="md:py-10 md:px-20 space-y-10">
      <ProjectsNav />
      {bins.length < 1 && <Empty />}
      {bins.length > 0 && <Projects bins={bins} />}
      <PaginationWrapper totalPages={totalPages} />
    </div>
  );
}
