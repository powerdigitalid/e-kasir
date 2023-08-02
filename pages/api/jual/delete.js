import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  const { id } = req.query;
  if (id && req.method === "DELETE") {
    try {
      const keuangan = await prisma.keuangan.delete({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        message: "Delete keuangan success",
        data: keuangan,
      });
    } catch (error) {
      console.error("Delete keuangan error:", error);
      res.status(500).json({
        message: "Failed to delete keuangan",
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