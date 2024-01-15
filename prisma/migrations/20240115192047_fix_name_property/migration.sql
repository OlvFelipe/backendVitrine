/*
  Warnings:

  - You are about to drop the column `addresNumber` on the `User` table. All the data in the column will be lost.
  - Added the required column `addressNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "addresNumber",
ADD COLUMN     "addressNumber" INTEGER NOT NULL;
