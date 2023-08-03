/*
  Warnings:

  - You are about to drop the `analyzes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `diseases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fungicides` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phase_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plots` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scale_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "analyzes" DROP CONSTRAINT "analyzes_user_id_fkey";

-- DropForeignKey
ALTER TABLE "diseases" DROP CONSTRAINT "diseases_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "logs" DROP CONSTRAINT "logs_user_id_fkey";

-- DropForeignKey
ALTER TABLE "phase_images" DROP CONSTRAINT "phase_images_phase_id_fkey";

-- DropForeignKey
ALTER TABLE "phases" DROP CONSTRAINT "phases_disease_id_fkey";

-- DropForeignKey
ALTER TABLE "phases" DROP CONSTRAINT "phases_fungicide_id_fkey";

-- DropForeignKey
ALTER TABLE "plots" DROP CONSTRAINT "plots_analysis_id_fkey";

-- DropForeignKey
ALTER TABLE "scale_images" DROP CONSTRAINT "scale_images_scale_id_fkey";

-- DropTable
DROP TABLE "analyzes";

-- DropTable
DROP TABLE "diseases";

-- DropTable
DROP TABLE "fungicides";

-- DropTable
DROP TABLE "logs";

-- DropTable
DROP TABLE "phase_images";

-- DropTable
DROP TABLE "phases";

-- DropTable
DROP TABLE "plots";

-- DropTable
DROP TABLE "scale_images";

-- DropTable
DROP TABLE "scales";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(12) NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "jwt_token" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysis" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "x_coordinate" DOUBLE PRECISION NOT NULL,
    "y_coordinate" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "analysis_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "plot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disease" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "plot_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phase" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "disease_id" INTEGER NOT NULL,
    "has_incidence" BOOLEAN NOT NULL,
    "percentage" INTEGER,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meteorology" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "fungicide_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fungicide" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "fungicide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phase_image" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "phase_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "phase_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scale" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "scale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scale_image" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "scale_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "scale_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "analysis" ADD CONSTRAINT "analysis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plot" ADD CONSTRAINT "plot_analysis_id_fkey" FOREIGN KEY ("analysis_id") REFERENCES "analysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disease" ADD CONSTRAINT "disease_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase" ADD CONSTRAINT "phase_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase" ADD CONSTRAINT "phase_fungicide_id_fkey" FOREIGN KEY ("fungicide_id") REFERENCES "fungicide"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase_image" ADD CONSTRAINT "phase_image_phase_id_fkey" FOREIGN KEY ("phase_id") REFERENCES "phase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scale_image" ADD CONSTRAINT "scale_image_scale_id_fkey" FOREIGN KEY ("scale_id") REFERENCES "scale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log" ADD CONSTRAINT "log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
