/*
  Warnings:

  - You are about to drop the column `default_fungicide_id` on the `disease` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "disease" DROP CONSTRAINT "disease_default_fungicide_id_fkey";

-- AlterTable
ALTER TABLE "disease" DROP COLUMN "default_fungicide_id";

-- CreateTable
CREATE TABLE "fungicide" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "disease_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "fungicide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fungicide" ADD CONSTRAINT "fungicide_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
