import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export const ProjectsTable = () => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded border border-default">
      <Table className="w-full text-sm text-left rtl:text-right text-body">
        <TableHeader className="text-sm text-body bg-secondary border-accent border-default">
          <TableRow>
            <TableHead className="projects-table-th">Title</TableHead>
            <TableHead className="projects-table-th"># Forks</TableHead>
            <TableHead className="projects-table-th">Privacity</TableHead>
            <TableHead className="projects-table-th">Last update</TableHead>
            <TableHead className="sr-only projects-table-th">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-secondary/10 border-b border-default">
          {Array.from({ length: 6 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="projects-table-td">{"Bin Title"}</TableCell>
              <TableCell className="projects-table-td">{"Forks"}</TableCell>
              <TableCell className="projects-table-td">{"IsPublic"}</TableCell>
              <TableCell className="projects-table-td">1/12/2025</TableCell>
              <TableCell className="projects-table-td text-right">
                {"Action"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
