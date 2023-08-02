import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
  //get all, create, put and delete type
  if (req.method === "GET") {
    try {
      const data = await prisma.pelanggan.findMany();
      res.status(200).json({ data });
    } catch (error) {
      console.error("Fetch data error:", error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else if (req.method === "POST") {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Name is required for creating a new type",
        data: [],
      });
    }

    try {
      const pelanggan = await prisma.pelanggan.create({
        data: {
          name: name,
        },
      });
      res.status(201).json({
        message: "Create type success",
        data: pelanggan,
      });
    } catch (error) {
      console.error("Create type error:", error);
      res.status(500).json({
        message: "Failed to create type",
        error: error.message,
      });
    }
  } else if (req.method === "PUT") {
    const { id, name } = req.body;

    if (!id || !name) {
      return res.status(400).json({
        message: "ID and Name are required for updating a type",
        data: [],
      });
    }

    try {
      const type = await prisma.pelanggan.update({
        where: {
          id: id,
        },
        data: {
          name: name,
        },
      });
      res.status(201).json({
        message: "Update type success",
        data: type,
      });
    } catch (error) {
      console.error("Update type error:", error);
      res.status(500).json({
        message: "Failed to update type",
        error: error.message,
      });
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
      const type = await prisma.pelanggan.delete({
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
