import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
    //get all, create, put and delete type
    if (req.method === "GET") {
        prisma.type.findMany()
            .then((data) => {
                res.status(200).json({ data });
            }
            ).catch((error) => {
                res.status(500).json({ error });
            }
            );
    }
    else if (req.method === "POST") {
        const { type_name } = req.body;
        try {
            const type = await prisma.type.create({
                data: {
                    type_name: type_name,
                },
            });
            res.status(201).json({
                message: "Create type success",
                data: type,
            });
        } catch (error) {
            console.error("Create type error:", error);
            res.status(500).json({
                message: "Failed to create type",
                error: error.message,
            });
        }
    }
    else if (req.method === "PUT") {
        const { id, type_name } = req.body;
        try {
            const type = await prisma.type.update({
                where: {
                    id: id,
                },
                data: {
                    type_name: type_name,
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
    }
    else if (req.method === "DELETE") {
        const { id } = req.body;
        try {
            const type = await prisma.type.delete({
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
    }
    else {
        res.status(400).json({
            message: "Method not allowed",
            data: [],
        });
    }
}
        