/*
  Warnings:

  - You are about to drop the column `product_desc` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `product_img` on the `product` table. All the data in the column will be lost.
  - Added the required column `product_stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `product_desc`,
    DROP COLUMN `product_img`,
    ADD COLUMN `product_stock` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Transaksi_jual` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi_beli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Keuangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jumlah_uang` INTEGER NOT NULL,
    `pembayaran` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `type_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaksi_jual` ADD CONSTRAINT `Transaksi_jual_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaksi_beli` ADD CONSTRAINT `Transaksi_beli_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Keuangan` ADD CONSTRAINT `Keuangan_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
