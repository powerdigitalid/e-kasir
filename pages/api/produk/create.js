import { prisma } from "../../../libs/prisma.libs";


export default async (req, res) => {
  if (req.method === "POST") {
      const { product_name, product_price, product_stock } = req.body;
      const product = await prisma.product.create({
        data: {
          product_name,
          product_price: parseInt(product_price),
          product_stock: parseInt(product_stock)
        },
      });
      return res.status(200).json(product);
  }
};