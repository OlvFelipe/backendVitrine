/*
  Warnings:

  - You are about to drop the column `type` on the `BodyWork` table. All the data in the column will be lost.
  - Added the required column `bodywork_type` to the `BodyWork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BodyWork" DROP COLUMN "type",
ADD COLUMN     "bodywork_type" TEXT NOT NULL;
