import z from "zod";

export const SearchBinSchema = z.object({
  term: z.string().min(3, "This must be at least three character long"),
});
