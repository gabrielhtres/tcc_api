/*
  Warnings:

  - You are about to drop the column `date` on the `phase` table. All the data in the column will be lost.
  - You are about to drop the column `has_incidence` on the `phase` table. All the data in the column will be lost.
  - You are about to drop the column `meteorology` on the `phase` table. All the data in the column will be lost.
  - You are about to drop the column `percentage` on the `phase` table. All the data in the column will be lost.
  - You are about to drop the column `phase_id` on the `phase_image` table. All the data in the column will be lost.
  - Added the required column `has_incidence` to the `disease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meteorology` to the `disease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disease_id` to the `phase_image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "phase_image" DROP CONSTRAINT "phase_image_phase_id_fkey";

-- AlterTable
ALTER TABLE "disease" ADD COLUMN     "has_incidence" BOOLEAN NOT NULL,
ADD COLUMN     "meteorology" TEXT NOT NULL,
ADD COLUMN     "percentage" INTEGER;

-- AlterTable
ALTER TABLE "phase" DROP COLUMN "date",
DROP COLUMN "has_incidence",
DROP COLUMN "meteorology",
DROP COLUMN "percentage";

-- AlterTable
ALTER TABLE "phase_image" DROP COLUMN "phase_id",
ADD COLUMN     "disease_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "phase_image" ADD CONSTRAINT "phase_image_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
