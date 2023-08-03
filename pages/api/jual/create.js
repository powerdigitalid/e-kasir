import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      product_id,
      pelanggan_id,
      quantity,
      total,
      invove,
      date,
      harga,
      pembayaran,
      sisa,
      keterangan,
    } = req.body;

    try {
      if (!product_id) {
        return res.status(400).json({ error: "Product ID is required" });
      }

      // Cek apakah product_id valid
      const product = await prisma.product.findUnique({
        where: { id: String(product_id) },
      });

      if (!product) {
        return res.status(404).json({ error: "Produk tidak ditemukan" });
      }

      // Cek apakah quantity valid
      if (quantity <= 0) {
        return res.status(400).json({ error: "Jumlah harus lebih dari 0" });
      }

      // Cek apakah stock cukup
      if (quantity > product.product_stock) {
        return res.status(400).json({ error: "Stok produk tidak mencukupi" });
      }

      // Tambahkan data transaksi_jual
      const newTransaksiJual = await prisma.jual.create({
        data: {
          product_id: String(product_id),
          pelanggan_id: String(pelanggan_id),
          quantity,
          total: parseInt(quantity) * parseInt(harga),
          date: date,
          harga: parseInt(harga),
          pembayaran: parseInt(pembayaran),
          sisa: parseInt(sisa),
          keterangan: keterangan,
          invove: invove,
        },
      });

      // Update product_stock di tabel product
      await prisma.product.update({
        where: { id: String(product_id) },
        data: {
          product_stock: product.product_stock - quantity,
        },
      });

      return res.status(200).json({ success: true, data: newTransaksiJual });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  } else if (req.method === "GET") {
    try {
      const data = await prisma.jual.findMany({
        orderBy: { date: "desc" },
        include: {
          product: true,
          pelanggan: true,
        },
      });

      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
