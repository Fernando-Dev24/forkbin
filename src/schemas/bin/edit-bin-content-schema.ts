import z from "zod";
import { slugRegex } from "./create-bin-schema";

export const EditBinContentSchema = z.object({
  title: z.string().min(1, "Title is required").max(20),
  description: z
    .string()
    .min(1, "Description is required")
    .max(50, "Description could not be more than 50 characters"),
  slug: z
    .string()
    .regex(
      slugRegex,
      "Invalid slug format. Slugs must contain only lowercase letters, numbers, and single hyphens, and cannot start or end with a hyphen."
    ),
  tags: z.array(z.string()),
  content: z.any(),
  isPublic: z.boolean().default(false),
  isMockApi: z.boolean().default(false),
});
