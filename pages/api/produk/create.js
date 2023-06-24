import { prisma } from "../../../libs/prisma.libs";


export default async (req, res) => {
  //create product to database
  const { product_name, product_price, product_stock } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        product_name: product_name,
        product_price: parseInt(product_price),
        product_stock: parseInt(product_stock),
      },
    });
    res.status(201).json({
      message: "Create product success",
      data: product,
    });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};