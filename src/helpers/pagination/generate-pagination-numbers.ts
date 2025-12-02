export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
) => {
  // First, if totalPages es less than 7 just render like that
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If currentPages is between the first three pages, render 3, puntos suspensivos and the last 2
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // Lo mismo pero con las ultimas tres
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // Si esta en cualquiera otra mostrar la primera, puntos suspensivos, la anterior, la actual, la siguiente de la actual, puntos suspensivos y la ultima
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
