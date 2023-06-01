/*
  Warnings:

  - You are about to drop the `Analysis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Phase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Scale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Analysis" DROP CONSTRAINT "Analysis_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_phase_id_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_scale_id_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Phase" DROP CONSTRAINT "Phase_analysis_id_fkey";

-- DropTable
DROP TABLE "Analysis";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Log";

-- DropTable
DROP TABLE "Phase";

-- DropTable
DROP TABLE "Scale";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(12) NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysis" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phases" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "analysis_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "phase_id" INTEGER,
    "scale_id" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scales" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "analysis" ADD CONSTRAINT "analysis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phases" ADD CONSTRAINT "phases_analysis_id_fkey" FOREIGN KEY ("analysis_id") REFERENCES "analysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_phase_id_fkey" FOREIGN KEY ("phase_id") REFERENCES "phases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_scale_id_fkey" FOREIGN KEY ("scale_id") REFERENCES "scales"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
