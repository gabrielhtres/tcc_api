/*
  Warnings:

  - You are about to drop the column `status` on the `analysis` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `disease` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `phase` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `plot` table. All the data in the column will be lost.
  - Added the required column `status_id` to the `analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "analysis" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "disease" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "phase" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "plot" DROP COLUMN "status",
ADD COLUMN     "status_id" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "status" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "analysis" ADD CONSTRAINT "analysis_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plot" ADD CONSTRAINT "plot_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disease" ADD CONSTRAINT "disease_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase" ADD CONSTRAINT "phase_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
