/*
  Warnings:

  - You are about to drop the `DefaultDisease` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DefaultFungicide` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `status` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" DROP CONSTRAINT "_DefaultDiseaseToDefaultFungicide_A_fkey";

-- DropForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" DROP CONSTRAINT "_DefaultDiseaseToDefaultFungicide_B_fkey";

-- DropForeignKey
ALTER TABLE "default_disease_fungicide" DROP CONSTRAINT "default_disease_fungicide_disease_id_fkey";

-- DropForeignKey
ALTER TABLE "default_disease_fungicide" DROP CONSTRAINT "default_disease_fungicide_fungicide_id_fkey";

-- AlterTable
ALTER TABLE "status" ADD COLUMN     "updated_at" TIMESTAMPTZ NOT NULL;

-- DropTable
DROP TABLE "DefaultDisease";

-- DropTable
DROP TABLE "DefaultFungicide";

-- CreateTable
CREATE TABLE "default_disease" (
    "id" INTEGER NOT NULL,
    "classification" TEXT NOT NULL,
    "culture" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "commonNames" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "symptoms" TEXT NOT NULL,
    "bioecology" TEXT NOT NULL,
    "control" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "default_disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "default_fungicide" (
    "id" INTEGER NOT NULL,
    "tradeMark" TEXT NOT NULL,
    "patentHolder" TEXT NOT NULL,
    "toxicologyClassification" TEXT NOT NULL,
    "ambientalClassification" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "actionMethod" TEXT NOT NULL,
    "applicationMethod" TEXT NOT NULL,
    "compatibility" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "activeIngredients" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "default_fungicide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "default_disease_fungicide" ADD CONSTRAINT "default_disease_fungicide_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "default_disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "default_disease_fungicide" ADD CONSTRAINT "default_disease_fungicide_fungicide_id_fkey" FOREIGN KEY ("fungicide_id") REFERENCES "default_fungicide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" ADD CONSTRAINT "_DefaultDiseaseToDefaultFungicide_A_fkey" FOREIGN KEY ("A") REFERENCES "default_disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DefaultDiseaseToDefaultFungicide" ADD CONSTRAINT "_DefaultDiseaseToDefaultFungicide_B_fkey" FOREIGN KEY ("B") REFERENCES "default_fungicide"("id") ON DELETE CASCADE ON UPDATE CASCADE;
