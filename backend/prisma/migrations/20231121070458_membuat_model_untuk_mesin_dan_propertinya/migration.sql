-- CreateTable
CREATE TABLE `MasterMesin` (
    `id` VARCHAR(191) NOT NULL,
    `nama_mesin` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MesinProperties` (
    `id` VARCHAR(191) NOT NULL,
    `id_mesin` VARCHAR(191) NOT NULL,
    `nama_property` VARCHAR(191) NOT NULL,
    `nilai_property` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MesinProperties` ADD CONSTRAINT `MesinProperties_id_mesin_fkey` FOREIGN KEY (`id_mesin`) REFERENCES `MasterMesin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
