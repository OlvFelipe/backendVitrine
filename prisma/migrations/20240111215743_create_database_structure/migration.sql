/*
  Warnings:

  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopkeeper` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "document" INTEGER NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "shopkeeper" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Announcement" (
    "id" VARCHAR(36) NOT NULL,
    "announcementId" TEXT NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" VARCHAR(36) NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,
    "fuel" TEXT NOT NULL,
    "ipva" BOOLEAN NOT NULL,
    "licensed" BOOLEAN NOT NULL,
    "color" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "gearbox" TEXT NOT NULL,
    "bodyworkId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "optionalId" TEXT NOT NULL,
    "announcementId" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyWork" (
    "id" VARCHAR(36) NOT NULL,
    "type" TEXT NOT NULL,
    "bodyworkId" TEXT NOT NULL,

    CONSTRAINT "BodyWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" VARCHAR(36) NOT NULL,
    "type" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Optional" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "optionalId" TEXT NOT NULL,

    CONSTRAINT "Optional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_bodyworkId_key" ON "Vehicle"("bodyworkId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_categoryId_key" ON "Vehicle"("categoryId");

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_bodyworkId_fkey" FOREIGN KEY ("bodyworkId") REFERENCES "BodyWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Optional" ADD CONSTRAINT "Optional_optionalId_fkey" FOREIGN KEY ("optionalId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
