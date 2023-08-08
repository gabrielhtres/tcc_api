/*
  Warnings:

  - Added the required column `status_code` to the `log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "log" ADD COLUMN     "status_code" INTEGER NOT NULL;
