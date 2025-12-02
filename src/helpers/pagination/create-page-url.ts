import { type ReadonlyURLSearchParams } from "next/navigation";

interface Params {
  pageNumber: string | number;
  pathname: string;
  currentPage: number;
  totalPages: number;
  searchParams: ReadonlyURLSearchParams;
}

export const createPageUrl = ({
  pageNumber,
  pathname,
  currentPage,
  totalPages,
  searchParams,
}: Params) => {
  const params = new URLSearchParams(searchParams);
  const invalidRoute = `${pathname}?${params.toString()}`;

  if (pageNumber === "...") {
    return invalidRoute;
  }

  if (+pageNumber <= 0) {
    return invalidRoute;
  }

  if (currentPage > totalPages) {
    return invalidRoute;
  }

  params.set("page", pageNumber.toString());
  return `${pathname}?${params.toString()}`;
};
