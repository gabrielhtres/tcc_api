-- CreateTable
CREATE TABLE "scale_phase" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "scale_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "scale_phase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scale_phase" ADD CONSTRAINT "scale_phase_scale_id_fkey" FOREIGN KEY ("scale_id") REFERENCES "scale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
