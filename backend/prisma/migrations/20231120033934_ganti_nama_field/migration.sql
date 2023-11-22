/*
  Warnings:

  - You are about to drop the column `namaLengkap` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `pertanyaanKeamanan` on the `users` table. All the data in the column will be lost.
  - Added the required column `nama_ibu_kandung` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_lengkap` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `namaLengkap`,
    DROP COLUMN `pertanyaanKeamanan`,
    ADD COLUMN `nama_ibu_kandung` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_lengkap` VARCHAR(191) NOT NULL;
