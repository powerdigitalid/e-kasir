import { prisma } from "../../../libs/prisma.libs.js";


export default async function handler(req, res) {
    //create getall, update and delet transaksi beli pada tabel Transaksi_beli include produk
    if (req.method === "GET") {
        prisma.transaksi_beli.findMany()
            .then((data) => {
                res.status(200).json({ data });
            }
            ).catch((error) => {
                res.status(500).json({ error });
            }
            );
    } else if (req.method === "POST") {
        const { quantity, product_id, total } = req.body;
        try {
            const beli = await prisma.transaksi_beli.create({
                data: {
                    quantity: parseInt(quantity),
                    product_id: product_id,
                    total: parseInt(total),
                },
            });
            res.status(201).json({
                message: "Create beli success",
                data: beli,
            });
        } catch (error) {
            console.error("Create beli error:", error);
            res.status(500).json({
                message: "Failed to create beli",
                error: error.message,
            });
        }
    } else if (req.method === "PUT") {
        const { id, quantity, product_id, total } = req.body;
        try {
            const beli = await prisma.transaksi_beli.update({
                where: {
                    id: id,
                },
                data: {
                    quantity: quantity,
                    product_id: product_id,
                    total: parseInt(total),
                },
            });
            res.status(201).json({
                message: "Update beli success",
                data: beli,
            });
        } catch (error) {
            console.error("Update beli error:", error);
            res.status(500).json({
                message: "Failed to update beli",
                error: error.message,
            });
        }
    } else if (req.method === "DELETE") {
        const { id } = req.body;
        try {
            const beli = await prisma.transaksi_beli.delete({
                where: {
                    id: id,
                },
            });
            res.status(201).json({
                message: "Delete beli success",
                data: beli,
            });
        } catch (error) {
            console.error("Delete beli error:", error);
            res.status(500).json({
                message: "Failed to delete beli",
                error: error.message,
            });
        }
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
}