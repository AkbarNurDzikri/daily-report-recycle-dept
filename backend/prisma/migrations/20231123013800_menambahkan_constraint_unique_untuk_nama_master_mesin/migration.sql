/*
  Warnings:

  - A unique constraint covering the columns `[nama_mesin]` on the table `MasterMesin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `MasterMesin_nama_mesin_key` ON `MasterMesin`(`nama_mesin`);
