/*
  Warnings:

  - Added the required column `default_disease_id` to the `fungicide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fungicide" ADD COLUMN     "default_disease_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "fungicide" ADD CONSTRAINT "fungicide_default_disease_id_fkey" FOREIGN KEY ("default_disease_id") REFERENCES "default_fungicide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
