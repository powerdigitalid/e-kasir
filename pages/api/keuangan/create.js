import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
    //create keuangan include type
    const { type_id, jumlah_uang, keterangan, pembayaran } = req.body;
    try {
        const keuangan = await prisma.keuangan.create({
            data: {
                type: {
                    connect: {
                        id: type_id,
                    },
                },
                jumlah_uang: parseInt(jumlah_uang),
                keterangan: keterangan,
                pembayaran: pembayaran,
            },
        });
        res.status(201).json({
            message: "Create keuangan success",
            data: keuangan,
        });
    } catch (error) {
        console.error("Create keuangan error:", error);
        res.status(500).json({
            message: "Failed to create keuangan",
            error: error.message,
        });
    }
}