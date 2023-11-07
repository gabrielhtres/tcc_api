/*
  Warnings:

  - You are about to drop the `phase_image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scale_image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scale_phase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "phase_image" DROP CONSTRAINT "phase_image_disease_id_fkey";

-- DropForeignKey
ALTER TABLE "scale_image" DROP CONSTRAINT "scale_image_scale_id_fkey";

-- DropForeignKey
ALTER TABLE "scale_phase" DROP CONSTRAINT "scale_phase_scale_id_fkey";

-- DropTable
DROP TABLE "phase_image";

-- DropTable
DROP TABLE "scale_image";

-- DropTable
DROP TABLE "scale_phase";

-- CreateTable
CREATE TABLE "scale_part" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "scale_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "scale_part_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scale_part" ADD CONSTRAINT "scale_part_scale_id_fkey" FOREIGN KEY ("scale_id") REFERENCES "scale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
