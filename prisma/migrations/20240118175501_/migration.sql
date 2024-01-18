/*
  Warnings:

  - You are about to drop the column `bodyworkId` on the `BodyWork` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BodyWork" DROP COLUMN "bodyworkId";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "categoryId";
