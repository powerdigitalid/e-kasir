import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id } = req.query;
  if (id && req.method === "DELETE") {
    try {
      const delete_jual = await prisma.transaksi_jual.delete({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        message: "Delete delete_jual success",
        data: delete_jual,
      });
    } catch (error) {
      console.error("Delete delete_jual error:", error);
      res.status(500).json({
        message: "Failed to delete delete_jual",
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