/*
  Warnings:

  - Added the required column `default_disease_id` to the `disease` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "disease" ADD COLUMN     "default_disease_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "disease" ADD CONSTRAINT "disease_default_disease_id_fkey" FOREIGN KEY ("default_disease_id") REFERENCES "default_disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
