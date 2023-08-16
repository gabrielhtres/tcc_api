/*
  Warnings:

  - Changed the type of `active_ingredients` on the `default_fungicide` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "default_fungicide" DROP COLUMN "active_ingredients",
ADD COLUMN     "active_ingredients" JSONB NOT NULL;
