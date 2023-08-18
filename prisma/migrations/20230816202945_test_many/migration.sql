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
