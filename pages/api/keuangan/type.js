import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const type = await prisma.type.findMany();
        return res.status(200).json({data: type});
    }
    else if (req.method === "POST") {
        const { type_name } = req.body;
        const type = await prisma.type.create({
            data: {
                type_name
            }
        });
        return res.status(200).json(type);
    } else if (req.method === "PUT") {
        const { id } = req.query;
        const { type_name } = req.body;
        const type = await prisma.type.update({
            where: { id: parseInt(id) },
            data: {
                type_name
            }
        });
        return res.status(200).json(type);
    } else if (req.method === "DELETE") {
        const { id } = req.query;
        const type = await prisma.type.delete({
            where: { id: parseInt(id) }
        });
        return res.status(200).json(type);
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
        