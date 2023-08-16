/*
  Warnings:

  - You are about to drop the column `commonNames` on the `default_disease` table. All the data in the column will be lost.
  - You are about to drop the column `scientificName` on the `default_disease` table. All the data in the column will be lost.
  - You are about to drop the column `actionMethod` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `activeIngredients` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `ambientalClassification` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `applicationMethod` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `patentHolder` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `registerNumber` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `toxicologyClassification` on the `default_fungicide` table. All the data in the column will be lost.
  - You are about to drop the column `tradeMark` on the `default_fungicide` table. All the data in the column will be lost.
  - Added the required column `common_names` to the `default_disease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientific_name` to the `default_disease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action_method` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active_ingredients` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ambiental_classification` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `application_method` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patent_holder` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_number` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toxicology_classification` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trade_mark` to the `default_fungicide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "default_disease" DROP COLUMN "commonNames",
DROP COLUMN "scientificName",
ADD COLUMN     "common_names" TEXT NOT NULL,
ADD COLUMN     "scientific_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "default_fungicide" DROP COLUMN "actionMethod",
DROP COLUMN "activeIngredients",
DROP COLUMN "ambientalClassification",
DROP COLUMN "applicationMethod",
DROP COLUMN "patentHolder",
DROP COLUMN "registerNumber",
DROP COLUMN "toxicologyClassification",
DROP COLUMN "tradeMark",
ADD COLUMN     "action_method" TEXT NOT NULL,
ADD COLUMN     "active_ingredients" TEXT NOT NULL,
ADD COLUMN     "ambiental_classification" TEXT NOT NULL,
ADD COLUMN     "application_method" TEXT NOT NULL,
ADD COLUMN     "patent_holder" TEXT NOT NULL,
ADD COLUMN     "register_number" TEXT NOT NULL,
ADD COLUMN     "toxicology_classification" TEXT NOT NULL,
ADD COLUMN     "trade_mark" TEXT NOT NULL;
