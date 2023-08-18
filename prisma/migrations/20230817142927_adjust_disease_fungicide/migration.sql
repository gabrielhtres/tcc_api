/*
  Warnings:

  - You are about to drop the `_DefaultDiseaseToDefaultFungicide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" DROP CONSTRAINT "_DefaultDiseaseToDefaultFungicide_A_fkey";

-- DropForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" DROP CONSTRAINT "_DefaultDiseaseToDefaultFungicide_B_fkey";

-- DropTable
DROP TABLE "_DefaultDiseaseToDefaultFungicide";

-- CreateTable
CREATE TABLE "default_disease_fungicide" (
    "disease_id" INTEGER NOT NULL,
    "fungicide_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "default_disease_fungicide_pkey" PRIMARY KEY ("disease_id","fungicide_id")
);

-- AddForeignKey
ALTER TABLE "default_disease_fungicide" ADD CONSTRAINT "default_disease_fungicide_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "default_disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "default_disease_fungicide" ADD CONSTRAINT "default_disease_fungicide_fungicide_id_fkey" FOREIGN KEY ("fungicide_id") REFERENCES "default_fungicide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
