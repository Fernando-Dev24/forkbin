"use client";

import { generatePaginationNumbers } from "@/helpers/pagination/generate-pagination-numbers";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../pagination";
import { createPageUrl } from "@/helpers/pagination/create-page-url";

interface Props {
  totalPages: number;
}

export const PaginationWrapper = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? "1";
  const currentPage = isNaN(+pageString) ? 1 : +pageString;
  const allPages = generatePaginationNumbers(currentPage, totalPages);

  if (currentPage <= 0 || isNaN(+pageString) || currentPage > totalPages)
    redirect(`${pathname}?page=1`);

  const paramsToCreateUrl = {
    pathname,
    currentPage,
    totalPages,
    searchParams,
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageUrl({
              ...paramsToCreateUrl,
              pageNumber: currentPage - 1,
            })}
          />
        </PaginationItem>

        {allPages.map((page, index) => (
          <PaginationItem key={`${page}-${index}`}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={createPageUrl({ ...paramsToCreateUrl, pageNumber: page })}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={createPageUrl({
              ...paramsToCreateUrl,
              pageNumber: currentPage + 1,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
