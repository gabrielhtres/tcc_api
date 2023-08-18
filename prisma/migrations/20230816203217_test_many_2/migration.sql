/*
  Warnings:

  - You are about to drop the `default_disease_fungicide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "default_disease_fungicide" DROP CONSTRAINT "default_disease_fungicide_disease_id_fkey";

-- DropForeignKey
ALTER TABLE "default_disease_fungicide" DROP CONSTRAINT "default_disease_fungicide_fungicide_id_fkey";

-- DropTable
DROP TABLE "default_disease_fungicide";

-- CreateTable
CREATE TABLE "_DefaultDiseaseToDefaultFungicide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DefaultDiseaseToDefaultFungicide_AB_unique" ON "_DefaultDiseaseToDefaultFungicide"("A", "B");

-- CreateIndex
CREATE INDEX "_DefaultDiseaseToDefaultFungicide_B_index" ON "_DefaultDiseaseToDefaultFungicide"("B");

-- AddForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" ADD CONSTRAINT "_DefaultDiseaseToDefaultFungicide_A_fkey" FOREIGN KEY ("A") REFERENCES "default_disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" ADD CONSTRAINT "_DefaultDiseaseToDefaultFungicide_B_fkey" FOREIGN KEY ("B") REFERENCES "default_fungicide"("id") ON DELETE CASCADE ON UPDATE CASCADE;
