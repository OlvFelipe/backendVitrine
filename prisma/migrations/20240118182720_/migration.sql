/*
  Warnings:

  - You are about to drop the column `optionalId` on the `Optional` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Optional" DROP CONSTRAINT "Optional_optionalId_fkey";

-- AlterTable
ALTER TABLE "Optional" DROP COLUMN "optionalId";

-- AddForeignKey
ALTER TABLE "Optional" ADD CONSTRAINT "Optional_id_fkey" FOREIGN KEY ("id") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
