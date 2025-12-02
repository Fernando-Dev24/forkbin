import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { BinItemsProp } from "./projects";
import { formatDate } from "@/helpers/date/format-date";

export const ProjectsTable = ({ bins }: BinItemsProp) => {
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
          {bins.map((bin) => (
            <TableRow key={bin.id}>
              <TableCell className="projects-table-td">{bin.title}</TableCell>
              <TableCell className="projects-table-td">
                {bin._count.forks}
              </TableCell>
              <TableCell className="projects-table-td">
                {bin.isPublic ? "Public" : "Private"}
              </TableCell>
              <TableCell className="projects-table-td">
                {formatDate(bin.updatedAt)}
              </TableCell>
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
