-- DropForeignKey
ALTER TABLE "log" DROP CONSTRAINT "log_user_id_fkey";

-- AlterTable
ALTER TABLE "log" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "log" ADD CONSTRAINT "log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
