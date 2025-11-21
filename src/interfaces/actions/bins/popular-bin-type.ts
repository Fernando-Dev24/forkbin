import { Prisma } from "@/generated/prisma/client";

export type PopularBinType = Prisma.BinGetPayload<{
  select: {
    description: true;
    forksCount: true;
    id: true;
    title: true;
    author: {
      select: {
        username: true;
      };
    };
  };
}>;
