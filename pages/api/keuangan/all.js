import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
    //get all keuangan data include type
    if (req.method === "GET") {
        const keuangan = await prisma.keuangan.findMany({
            include: {
                type: true
            }
        });
        return res.status(200).json(keuangan);
    }
    //create new keuangan data
    else if (req.method === "POST") {
        const { type_id, jumlah_uang, pembayaran, keterangan } = req.body;
        const keuangan = await prisma.keuangan.create({
            data: {
                type: {
                    connect: {
                        id: parseInt(type_id)
                    },
                },
                jumlah_uang: parseInt(jumlah_uang),
                pembayaran: pembayaran,
                keterangan: keterangan,
            }
        });
        return res.status(200).json({data:keuangan});
    } else if (req.method === "PUT") {
        const { id } = req.query;
        const { type_id, jumlah_uang, pembayaran, keterangan } = req.body;
        const keuangan = await prisma.keuangan.update({
            where: { id: parseInt(id) },
            data: {
                type: {
                    connect: {
                        id: parseInt(type_id)
                    },
                },
                jumlah_uang: parseInt(jumlah_uang),
                pembayaran: pembayaran,
                keterangan: keterangan,
            }
        });
        return res.status(200).json({data:keuangan});
    } else if (req.method === "DELETE") {
        const { id } = req.query;
        const keuangan = await prisma.keuangan.delete({
            where: { id: parseInt(id) }
        });
        return res.status(200).json({data:keuangan});
    }
    else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
