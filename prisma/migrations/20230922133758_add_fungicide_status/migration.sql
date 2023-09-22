/*
  Warnings:

  - You are about to drop the column `description` on the `fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `fungicide` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fungicide" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "status_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "fungicide" ADD CONSTRAINT "fungicide_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
