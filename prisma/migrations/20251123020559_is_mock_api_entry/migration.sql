/*
  Warnings:

  - You are about to drop the column `isMock` on the `bins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bins" DROP COLUMN "isMock",
ADD COLUMN     "isMockApi" BOOLEAN NOT NULL DEFAULT false;
