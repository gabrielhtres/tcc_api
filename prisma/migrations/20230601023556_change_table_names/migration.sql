/*
  Warnings:

  - You are about to drop the column `createdAt` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `logs` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `phases` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `scales` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "images" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "logs" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "phases" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "scales" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;
