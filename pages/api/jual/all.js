import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
  //get all, create, put and delete type
  if (req.method === "GET") {
    try {
      const data = await prisma.jual.findMany({
        include: {
          pelanggan: true,
          product: true,
        },
      });
      res.status(200).json({ data });
    } catch (error) {
      console.error("Fetch data error:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID is required for deleting a type",
        data: [],
      });
    }

    try {
      const type = await prisma.jual.delete({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        message: "Delete type success",
        data: type,
      });
    } catch (error) {
      console.error("Delete type error:", error);
      res.status(500).json({
        message: "Failed to delete type",
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
