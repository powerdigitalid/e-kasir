import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  //update product by id
  if (req.method === "PUT") {
    const { product_name, product_price, product_stock, id } = req.body;
    try {
      const data = await prisma.product.update({
        where: { id: id },
        data: {
          product_name: product_name,
          product_price: parseInt(product_price),
          product_stock: parseInt(product_stock),
        },
      });
      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
}