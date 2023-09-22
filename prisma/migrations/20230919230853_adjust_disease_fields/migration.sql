/*
  Warnings:

  - You are about to drop the column `name` on the `disease` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "disease" DROP COLUMN "name",
ALTER COLUMN "has_incidence" DROP NOT NULL,
ALTER COLUMN "meteorology" DROP NOT NULL;
