/*
  Warnings:

  - You are about to drop the column `fungicide_id` on the `phase` table. All the data in the column will be lost.
  - You are about to drop the `fungicide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "disease" DROP CONSTRAINT "disease_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "phase" DROP CONSTRAINT "phase_disease_id_fkey";

-- DropForeignKey
ALTER TABLE "phase" DROP CONSTRAINT "phase_fungicide_id_fkey";

-- AlterTable
ALTER TABLE "disease" ADD COLUMN     "default_fungicide_id" INTEGER;

-- AlterTable
ALTER TABLE "phase" DROP COLUMN "fungicide_id";

-- DropTable
DROP TABLE "fungicide";

-- AddForeignKey
ALTER TABLE "phase" ADD CONSTRAINT "phase_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disease" ADD CONSTRAINT "disease_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "phase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disease" ADD CONSTRAINT "disease_default_fungicide_id_fkey" FOREIGN KEY ("default_fungicide_id") REFERENCES "default_fungicide"("id") ON DELETE SET NULL ON UPDATE CASCADE;
