import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id } = req.query;
  if (id && req.method === "DELETE") {
    try {
      const product = await prisma.product.delete({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        message: "Delete product success",
        data: product,
      });
    } catch (error) {
      console.error("Delete product error:", error);
      res.status(500).json({
        message: "Failed to delete product",
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      message: "Method not allowed",
      data: [],
    });
  }
}