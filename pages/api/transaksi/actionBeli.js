import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id } = req.query;
  if (id && req.method === "DELETE") {
    try {
      const deleteBeli = await prisma.transaksi_beli.delete({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        message: "Delete deleteBeli success",
        data: deleteBeli,
      });
    } catch (error) {
      console.error("Delete deleteBeli error:", error);
      res.status(500).json({
        message: "Failed to delete deleteBeli",
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