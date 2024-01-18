-- DropForeignKey
ALTER TABLE "Optional" DROP CONSTRAINT "Optional_id_fkey";

-- AlterTable
ALTER TABLE "Optional" ADD COLUMN     "optionalId" TEXT;

-- AddForeignKey
ALTER TABLE "Optional" ADD CONSTRAINT "Optional_optionalId_fkey" FOREIGN KEY ("optionalId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
