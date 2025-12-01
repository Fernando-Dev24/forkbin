import z from "zod";

export const SearchBinSchema = z.object({
  query: z.string().min(3, "This must be at least three character long"),
});
