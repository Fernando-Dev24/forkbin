/*
  Warnings:

  - You are about to drop the column `isMockApi` on the `bins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bins" DROP COLUMN "isMockApi",
ADD COLUMN     "schema" JSONB;
