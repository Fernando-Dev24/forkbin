import { Prisma } from "@/generated/prisma/client";

export type BinsByUserPayload = Prisma.BinGetPayload<{
  select: {
    id: true;
    title: true;
    description: true;
    isPublic: true;
    _count: {
      select: {
        forks: true;
      };
    };
    updatedAt: true;
  };
}>;
