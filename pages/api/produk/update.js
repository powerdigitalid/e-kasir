import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  //update product by id
  if (req.method === "PUT") {
    const { id } = req.query;
    const { product_name, product_price, product_stock } = req.body;
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        product_name,
        product_price: parseInt(product_price),
        product_stock: parseInt(product_stock),
      },
    });
    return res.status(200).json(product);
  }
}